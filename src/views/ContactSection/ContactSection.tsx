import './ContactSection.css';

import { FC } from 'react';
import Section from '../../compoments/Section/Section';
import IconList from '../../compoments/IconList/IconList';
import { gitHubWhite, linkedInWhite } from '../../constants/iconItems';
import { conactHeader, contactDesc } from '../../constants';
import { motion } from "framer-motion"

interface ContactSectionProps {
    refPointer: React.RefObject<HTMLDivElement>;
}

const ContactSection: FC<ContactSectionProps> = ({ refPointer }) => {

    const socialMediaIcons = [gitHubWhite, linkedInWhite];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
        >
            <Section
                header={conactHeader}
                desc={contactDesc}
                refPointer={refPointer}
                topSpacing={100}
                botSpacing={100}
                altBackground={true}
                divider={false}
                childComponent={
                    <motion.div
                        className="contact-methods"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-50px' }}
                        variants={containerVariants}
                    >
                        <motion.div variants={itemVariants}>
                            <IconList vertical={false} iconArr={socialMediaIcons} />
                        </motion.div>
                        <motion.a
                            href="mailto:renzzo098@gmail.com"
                            className="email-button"
                            variants={itemVariants}
                        >
                            Get in touch via email
                        </motion.a>
                    </motion.div>
                }
            />
            <motion.div
                className="contact-motion-divider"
                initial={{ x: "100%" }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true }}
            />
        </motion.div>

    ) 
}

export default ContactSection;