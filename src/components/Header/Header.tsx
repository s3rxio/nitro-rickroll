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