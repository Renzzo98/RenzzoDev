import gitHubIconWhite from '../assets/github_icon_white.png';
import linkedInIconWhite from '../assets/linkedin_icon_white.png';
import gitHubIcon from '../assets/github_icon.png';
import linkedInIcon from '../assets/linkedin_icon.png';
import bussinessBagIcon from '../assets/business_finance_work_icon.png';
import freelancerIcon from '../assets/freelance_work_icon.png';
import avatarIcon from '../assets/avatar_profile_icon.png';
import activeAvatarIcon from '../assets/app_avatar_profile_icon_active.png';

export interface SMItem {
    key: number;
    link: string;
    iconPath: string;
    activeIconPath?: string;
}

export const gitHub: SMItem = {
    key: 1,
    link: 'https://github.com/Renzzo98',
    iconPath: gitHubIcon
}

export const gitHubWhite: SMItem = {
    key: 2,
    link: 'https://github.com/Renzzo98',
    iconPath: gitHubIconWhite
}

export const linkedIn: SMItem = {
    key: 3,
    link: 'https://www.linkedin.com/in/hugorenzzoolcese',
    iconPath: linkedInIcon
}

export const linkedInWhite: SMItem = {
    key: 4,
    link: 'https://www.linkedin.com/in/hugorenzzoolcese',
    iconPath: linkedInIconWhite
}

export const avatarProfile: SMItem = {
    key: 5,
    link: '',
    iconPath: avatarIcon,
    activeIconPath: activeAvatarIcon
}

export const bussinessBag: SMItem = {
    key: 6,
    link: '',
    iconPath: bussinessBagIcon
}

export const freelanceWork: SMItem = {
    key: 7,
    link: '',
    iconPath: freelancerIcon
}