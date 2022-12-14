import React, {useState} from "react";
import styles from "./Main.module.scss";
import Logo from "../../media/title.svg";
import BackgroundMP4 from "../../media/background.mp4";
import BackgroundWebm from "../../media/background.webm";
import Header from "../Header/Header";
import RickRollButton from "../RickRollButton/RickRollButton";
import Button from "../Button/Button";
import Wumpus from "../../media/wumpus.png";
import Modal from "../Modal/Modal";

const Main: React.FC = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <section className={styles.main}>
            <Modal title="Стоп стоп стоп!" content="К сожалению, в данный момент, что то сломалось и вы не можете приобрести Discord Nitro на год. Как хорошо что можно бесплатно получить Discord Nitro на месяц! ;)" isOpen={modalIsOpen} setIsOpen={setModalIsOpen}/>

            <Header />
            <div className={styles.main__container}>
                <div className={styles.main__info}>
                    <div className={styles["main__title-wrapper"]}>
                        <img src={Wumpus} alt="Wumpus" className={styles.main__wumpus}/>
                        <img src={Logo} alt="Discord Nitro" className={styles.main__title} width={300} height={122}/>
                    </div>

                    <span className={styles.main__text}>
                        Улучшите свои возможности в Discord за небольшую ежемесячную плату. Сделайте свои эмодзи ещё лучше, загружайте большие файлы, дайте буст любимым серверам и получите множество других бонусов.
                    </span>

                    <div className={styles["main__buttons-wrapper"]}>
                        <Button link="/#" size="large" color="dark" onClick={(e) => {e.preventDefault(); setModalIsOpen(true)}}>
                            99,99$ в год
                        </Button>

                        <RickRollButton />
                    </div>
                </div>
            </div>

            <div className={styles["main__video-wrapper"]}>
                <video className={styles.main__video} loop muted autoPlay>
                    <source src={BackgroundMP4} type="video/mp4"/>
                    <source src={BackgroundWebm} type="video/webm"/>
                </video>
            </div>
        </section>
    );
};

export default Main;