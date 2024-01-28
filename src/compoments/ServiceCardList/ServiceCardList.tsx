import './ServiceCardList.css';
import { FC } from 'react';
import { Pane } from 'evergreen-ui';
import ServiceCard from '../ServiceCard/ServiceCard';
import { serviceItem } from '../../constants/serviceItems';

interface ServiceCardListProps {
    serviceList: serviceItem[];
}

const ServiceCardList: FC<ServiceCardListProps> = ({ serviceList }) => {
    
    return (
        <Pane
            display="flex"
            flexDirection='row'
            justifyContent="space-around"
            alignItems="start"
            marginTop={20}
            gap={30}
            width={"100%"}
        >
            {serviceList.map((item, index) => {
                return (
                    <div key={index}>
                        <ServiceCard id={index} title={item.title} subTitle={item.subTitle} iconPath={item.iconPath} />
                    </div>
                );
            })}
        </Pane>
    ) 
}

export default ServiceCardList;