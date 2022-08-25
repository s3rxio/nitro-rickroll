import React from 'react';
import styles from './Modal.module.scss';
import Button from "../Button/Button";

interface ModalProps {
    title: string;
    content: string;

    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
    const closeModal = () => props.setIsOpen(false);

    return (
        <>
            <div className={styles.modal} style={{display: `${props.isOpen ? "flex" : "none"}`}}>
                <h2 className={styles.modal__title}>
                    {props.title}
                </h2>

                <div className={styles.modal__content}>
                    {props.content}
                </div>

                <Button link="/#" size="large" color="dark" onClick={(e) => {e.preventDefault(); closeModal()}}>
                    Отмена
                </Button>
            </div>
            <div className={styles.modal__overlay} onClick={() => closeModal()} style={{display: `${props.isOpen ? "block" : "none"}`}}></div>
        </>
    );
};

export default Modal;