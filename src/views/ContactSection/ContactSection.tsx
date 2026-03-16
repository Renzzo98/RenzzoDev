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

    return (
        <div>

            <Section
                header={conactHeader}
                desc={contactDesc}
                refPointer={refPointer}
                topSpacing={100}
                botSpacing={100}
                altBackground={true}
                divider={false}
                childComponent={
                    <div className="contact-methods">
                        <IconList vertical={false} iconArr={socialMediaIcons} />
                        <a href="mailto:renzzo098@gmail.com" className="email-button">
                            Get in touch via email
                        </a>
                    </div>
                }
            />
            <motion.div
                className="contact-motion-divider"
                initial={{ x: "100%" }}
                animate={{ x: "calc(100vw - 50%)" }}
                transition={{ duration: 1, ease: "easeInOut" }}
            />
        </div>
        
    ) 
}

export default ContactSection;