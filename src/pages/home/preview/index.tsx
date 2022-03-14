import React from "react";
import people from '../../../../src/assets/images/banner-image.png';
import styles from './style.module.scss';

const Preview = () => {
    return (
        <div className={styles.preview}>
            <div className={styles.preview__content}>
                <h2 className={styles.preview__title}>Refer a friends and get $10 off!</h2>
                <p className={styles.preview__text}>Connect with friends. Refer a friend and unlock your $10 coupon! Offer ends February 27.</p>
                <button className={styles.preview__btn}>Invite a friend</button>
            </div>
            <img src={people} alt="people" className={styles.preview__img}/>
        </div>
    )
}

export default Preview;