import './SkillSet.css';

import { FC } from 'react';
import { motion } from 'framer-motion';
import ScrollBar from '../ScrollBar/ScrollBar';

interface SkillSetProps {}

const SkillSet: FC<SkillSetProps> = () => {

        
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    };

    return (
        <motion.div
            className='skill-set-container'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={containerVariants}
        >
            <motion.p className='skill-header' variants={itemVariants}>Here are my Skills...</motion.p>
            <motion.div variants={itemVariants}><ScrollBar title='Angular' percentage={85} /></motion.div>
            <motion.div variants={itemVariants}><ScrollBar title='React' percentage={75} /></motion.div>
            <motion.div variants={itemVariants}><ScrollBar title='Typescript' percentage={90} /></motion.div>
            <motion.div variants={itemVariants}><ScrollBar title='Swift' percentage={80} /></motion.div>
            <motion.div variants={itemVariants}><ScrollBar title='Java' percentage={70} /></motion.div>
            <motion.div variants={itemVariants}><ScrollBar title='Python' percentage={80} /></motion.div>
            <motion.div variants={itemVariants}><ScrollBar title='Flutter' percentage={75} /></motion.div>
            <motion.div variants={itemVariants}><ScrollBar title='Creativity' percentage={300} /></motion.div>
        </motion.div>
    ) 
}

export default SkillSet;