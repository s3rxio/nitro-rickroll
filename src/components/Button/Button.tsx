import React from 'react';
import styles from './Button.module.scss';

export interface IButtonProps {
    size: 'small' | 'large';
    color: 'white' | 'dark' | 'brand';

    link: string;
    target?: React.HTMLAttributeAnchorTarget;
    pill?: boolean;

    children?: React.ReactNode;
}

const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
    return (
        <a
            href={props.link}
            className={
                `${styles.button} ${styles[`button_${props.size}`]} ${styles[`button_${props.color}`]}`
            }
            target={props.target}
        >
            <span style={props.pill ? {textDecoration: "line-through"} : {}}>
                {props.children}
            </span>
            {props.pill &&
                <span className={styles.button__pill} >
                    Бесплатно
                </span>
            }
        </a>
    );
};

export default Button;