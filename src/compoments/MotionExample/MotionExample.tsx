import './MotionExample.css';
import { FC } from 'react';
import { motion, useScroll, useSpring } from "framer-motion"

interface MotionExampleProps {}

const MotionExample: FC<MotionExampleProps> = () => {

    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    
    return (
        <div>
            <motion.div className="progress-bar" style={{ scaleX }} />
        </div>

        
    ) 
}

export default MotionExample;