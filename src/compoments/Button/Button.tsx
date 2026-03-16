import './Button.css';
import { FC } from 'react';
import { StyleTypes } from '../../constants';
import { RESUME_FILE_NAME } from '../../constants/textContent';

interface IconButtonButtonProps {
    contentText: string;
    type: StyleTypes;
}

const Button: FC<IconButtonButtonProps> = ({ contentText, type }) => {

    const fileName = RESUME_FILE_NAME;

    switch (type){
        case StyleTypes.Primary:
            return (
                <div className='btn-container'>
                    <a className='btn primary' href={`${process.env.PUBLIC_URL}/${fileName}`} download={RESUME_FILE_NAME}>{ contentText }</a>
                </div>
            )
        case StyleTypes.Secondary:
            return (
                <div className='btn-container'>
                    <a className='btn secondary' href={`${process.env.PUBLIC_URL}/${fileName}`} download={RESUME_FILE_NAME}>{ contentText }</a>
                </div>
            )
        case StyleTypes.Tertiary:
            return (
                <div className='btn-container'>
                    <a className='btn tertiary' href={`${process.env.PUBLIC_URL}/${fileName}`} download={RESUME_FILE_NAME}>{ contentText }</a>
                </div>
            )
        default:
            return (
                <div className='btn-container'>
                    <a className='btn' href={`${process.env.PUBLIC_URL}/${fileName}`} download={RESUME_FILE_NAME}>{ contentText }</a>
                </div>
            )
    }

}

export default Button;