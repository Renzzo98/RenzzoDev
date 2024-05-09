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
            {/* <motion.div 
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                drag="x"
                dragConstraints={{ left: -100, right: 100 }}
            >
                An animated element
            </motion.div>
            <motion.div
                className='box' 
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 180, 180, 0],
                    borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeatDelay: 1
                }}
            /> */}
        </div>

        
    ) 
}

export default MotionExample;