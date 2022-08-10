import React from "react";
import styles from "./Header.module.scss";
import Logo from "../../media/logo.svg";
import Button from "../Button/Button";

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__logo}>
                    <img src={Logo} alt='logo' />
                </div>

                <div className={`${styles.header__menu} ${styles.menu}`}>
                    <div className={styles.menu__list}>
                        <a href="//discord.com/download" className={styles.menu__item}>Загрузить</a>
                        <a href="/#" className={styles.menu__item}>Nitro</a>
                        <a href="//discord.com/safety" className={styles.menu__item}>Безопасность</a>
                        <a href="//support.discord.com/" className={styles.menu__item}>Поддержка</a>
                        <a href="//discord.com/blog" className={styles.menu__item}>Блог</a>
                        <a href="//discord.com/jobs" className={styles.menu__item}>Вакансии</a>
                    </div>
                </div>

                <div className={styles["header__login-button-wrapper"]}>
                    <Button link="//discord.com/login" size="small" color="white">
                        Вход
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;