import { FC } from 'react';
import { Pane } from 'evergreen-ui';

import './ServiceCard.css';

interface ServiceCardProps {
    id: number;
    title: string;
    subTitle: string;
    iconPath: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ id, title, subTitle, iconPath }) => {
    
    return (
        <Pane
            display="flex"
            flexDirection='column'
            justifyContent="space-evenly"
            alignItems="start"
            marginTop={20}
        >
            <img src={iconPath} alt="Service Icon" className="image-hover-effect" />
            <p className='serviceTitle'>{title}</p>
            <p className='serviceSubTitle'>{subTitle}</p>
        </Pane>
    ) 
}

export default ServiceCard;