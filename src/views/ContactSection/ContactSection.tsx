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
                childComponent={<IconList vertical={false} iconArr={socialMediaIcons} />}
            />
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: "calc(100vw - 50%)" }}
            />
        </div>
        
    ) 
}

export default ContactSection;