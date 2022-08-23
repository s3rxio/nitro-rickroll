import React from "react";
import styles from "./About.module.scss";
import {Perk, IPerkProps} from "../Perk/Perk";
import PerkImage1 from "../../media/perks/perk1.svg";
import PerkImage2 from "../../media/perks/perk2.svg";
import PerkImage3 from "../../media/perks/perk3.svg";
import PerkImage4 from "../../media/perks/perk4.svg";
import PerkImage5 from "../../media/perks/perk5.png";
import PerkImage6 from "../../media/perks/perk6.png";
import RickRollButton from "../RickRollButton/RickRollButton";
import Button from "../Button/Button";

const About: React.FC = () => {
    const normalizeClassName = (className: string) => `${styles.about__perk} ${className}`;
    const perks: IPerkProps[] = [
        {
            title: "Улучшенные эмодзи",
            description: "Собирайте или создавайте собственные пользовательские и анимированные эмодзи.",

            imageURL: PerkImage1,
            className: normalizeClassName(styles.about__perk_emoji)
        },
        {
            title: "Персонализация профиля",
            description: "Используйте анимированные аватары и получите особый тег.",

            imageURL: PerkImage2,
            className: normalizeClassName(styles["about__perk_personal-profile"])
        },
        {
            title: "Поддержите сервер",
            description: "Получите 2 буста сервера и скидку 30% на дополнительные бусты.",

            imageURL: PerkImage3,
            className: normalizeClassName(styles["about__perk_support-server"])
        },
        {
            title: "Пусть все знают о вашей поддержке",
            description: "Значок в профиле показывает, как долго вы поддерживаете Discord.",

            imageURL: PerkImage4,
            className: normalizeClassName(styles["about__perk_rep-support"])
        },
        {
            title: "Увеличение размера загружаемых файлов",
            description: "Загружайте высококачественные файлы размером до 100 МБ.",

            imageURL: PerkImage5,
            className: normalizeClassName(styles["about__perk_bigger-file"])
        },
        {
            title: "Видео в высоком качестве",
            description: "Видео, демонстрация экрана и стриминг Go Live в высоком качестве.",

            imageURL: PerkImage6,
            className: normalizeClassName(styles["about__perk_hd-video"])
        }
    ];

    return (
        <section className={styles.about}>
            <div className={styles.about__container}>
                <h1 className={styles.about__title}>
                    <span style={{fontWeight: 900}}>Discord Nitro</span> сделает использование голосовых, текстовых и видеочатов ещё приятнее.
                </h1>
                <div className={styles["about__sub-title"]}>
                    Посмотрите, какие классные фишки вы получите.
                </div>

                <div className={styles.about__perks}>
                    {
                        perks.map((perk, index) => {
                            return (
                                <Perk key={index} {...perk} />
                            );
                        })
                    }
                </div>

                <div className={styles.about__buy}>
                    <h2>Давайдавайдавайдавайдавай!</h2>

                    <div className={styles.about__buttons__wrapper}>
                        <Button link="/#" size="large" color="dark">
                            99,99$ в год
                        </Button>

                        <RickRollButton />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;