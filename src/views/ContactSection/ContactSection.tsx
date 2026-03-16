import './ContactSection.css';

import { FC } from 'react';
import Section from '../../compoments/Section/Section';
import IconList from '../../compoments/IconList/IconList';
import { gitHubWhite, linkedInWhite } from '../../constants/iconItems';
import { conactHeader, contactDesc } from '../../constants';
import { motion } from "framer-motion"
import { useIsMobile } from '../../hooks/useIsMobile';

interface ContactSectionProps {
    refPointer: React.RefObject<HTMLDivElement>;
}

const ContactSection: FC<ContactSectionProps> = ({ refPointer }) => {
    const isMobile = useIsMobile();

    const socialMediaIcons = [gitHubWhite, linkedInWhite];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.05,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    };

    return (
        <motion.div
            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
            transition={isMobile ? undefined : { duration: 0.5, ease: 'easeOut' }}
            viewport={isMobile ? undefined : { once: true, margin: '-100px' }}
        >
            <Section
                header={conactHeader}
                desc={contactDesc}
                refPointer={refPointer}
                topSpacing={isMobile ? 200 : 100}
                botSpacing={isMobile ? 300 : 100}
                altBackground={true}
                divider={false}
                childComponent={
                    <motion.div
                        className="contact-methods"
                        initial={isMobile ? "visible" : "hidden"}
                        whileInView={isMobile ? undefined : "visible"}
                        viewport={isMobile ? undefined : { once: true, margin: '-50px' }}
                        variants={isMobile ? undefined : containerVariants}
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
        </motion.div>

    ) 
}

export default ContactSection;