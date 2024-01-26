import CODINGICON from '../assets/coding_icon.png';
import DESIGNICON from '../assets/layout_design_icon.png';

export interface serviceItem {
    key: number;
    title: string;
    subTitle: string;
    iconPath: string;
}


export const development = {
    key: 1,
    title: 'Development',
    subTitle: 'Delivering cutting-edge frontend development and coding services to bring your creative visions to life.',
    iconPath: CODINGICON
}

export const design = {
    key: 1,
    title: 'Design',
    subTitle: 'Transforming ideas into visual masterpieces with innovative design work that captures attention and engages audiences.',
    iconPath: DESIGNICON
}