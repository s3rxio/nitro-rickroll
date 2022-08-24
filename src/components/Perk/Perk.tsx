import React from 'react';
import styles from './Perk.module.scss';

export interface PerkProps {
    title: string;
    className?: string
    description: string;

    imageURL: string;
}

export const Perk: React.FC<PerkProps> = (props: PerkProps) => {
    return (
        <div className={`${styles.perk} ${props.className!}`}>
            <div className={styles.perk__title}>
                {props.title}
            </div>

            <p className={styles.perk__description}>
                {props.description}
            </p>

            <img src={props.imageURL} alt="" className={styles.perk__image}/>
        </div>
    );
};