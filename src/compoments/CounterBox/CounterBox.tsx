import './CounterBox.css';

import { FC, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { StyleTypes } from '../../constants';


interface CounterBoxProps {
    maxInt: number;
    subTitle: string;
    type: StyleTypes;
}

// Ensure GSAP plugins are registered
gsap.registerPlugin(ScrollTrigger);

const CounterBox: FC<CounterBoxProps> = ({ maxInt, subTitle, type }) => {
    
    // Correctly type useRef with HTMLDivElement
    const numberRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Ensure GSAP plugins are registered
        gsap.registerPlugin(ScrollTrigger);

        if (numberRef.current) {
        // Now TypeScript knows numberRef.current is an HTMLDivElement, not null
        // and getAttribute is a valid method call
        const target = maxInt; // Directly use targetNumber prop
        
        gsap.to(numberRef.current, {
            scrollTrigger: {
                trigger: numberRef.current,
                start: 'botom center', // Adjust based on your needs
                toggleActions: 'play none none none',
                // toggleActions: 'restart pause resume pause',
            },
            duration: 2,
            textContent: target,
            snap: { textContent: 1 },
            ease: "power1.out",
            // Optional: onComplete callback if needed
        });
        }
    }, [maxInt]); // Depend on targetNumber to re-run animation if it changes

    return (
        <div className='counter-container'>
            <div className={`counter-box ${type == StyleTypes.Primary ? 'primary-box' : ''}`}>
                <div ref={numberRef} className={`counter-value ${type == StyleTypes.Primary ? 'primary-text' : ''}`} data-target={maxInt}>
                    0
                </div>
                <hr className={`counter-divider ${type == StyleTypes.Primary ? 'primary' : ''}`} /> 
                <p className={`sub-title ${type == StyleTypes.Primary ? 'primary-text' : ''}`}>{subTitle}</p>
            </div>
        </div>
    );
};
export default CounterBox;