import './ContactSection.css';

import { FC } from 'react';
import Section from '../../compoments/Section/Section';
import { gitHubWhite, linkedInWhite } from '../../constants/iconItems';
import IconList from '../../compoments/IconList/IconList';
import { conactHeader, contactDesc } from '../../constants';

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
        </div>
    ) 
}

export default ContactSection;