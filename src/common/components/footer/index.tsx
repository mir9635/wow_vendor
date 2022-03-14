import React from "react";
import styles from './style.module.scss';



const Footer = () => {
    return(
        <footer className={styles.footer}>
            <div className={"container"}>
                <div className={styles.footer__row}>
                    <div className={styles.footer__text}>
                        <h4>Join our newsletter</h4>
                        <p>We’ll send you a nice letter one per week. No spam.</p>
                    </div>
                    <div className={styles.footer__form}>
                        <input className={styles.footer__input} type="email" placeholder="Enter email"/>
                        <button className={styles.footer__btn}>Subscribe</button>
                    </div>
                </div>
                <div className={styles.footer__list}>
                    <div>
                        <p className={styles.footer__title}>Categories</p>
                        <ul className={styles.footer__ul}>
                            <li><a href="/">Strategy</a></li>
                            <li><a href="/">Action</a></li>
                            <li><a href="/">Shooter</a></li>
                            <li><a href="/">Card Game</a></li>
                            <li><a href="/">Simulator</a></li>
                            <li><a href="/">RPG</a></li>
                            <li><a href="/">Multiplayer</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className={styles.footer__title}>Company</p>
                        <ul className={styles.footer__ul}>
                            <li><a href="/">About us</a></li>
                            <li><a href="/">Careers</a></li>
                            <li><a href="/">Press</a></li>
                            <li><a href="/">News</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className={styles.footer__title}>Legal</p>
                        <ul className={styles.footer__ul}>
                            <li><a href="/">Terms</a></li>
                            <li><a href="/">Privacy</a></li>
                            <li><a href="/">Cookies</a></li>
                            <li><a href="/">Licenses</a></li>
                            <li><a href="/">Settings</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className={styles.footer__title}>Legal</p>
                        <ul className={styles.footer__ul}>
                            <li><a href="/">Twitter</a></li>
                            <li><a href="/">Facebook</a></li>
                            <li><a href="/">Dribbble</a></li>
                            <li><a href="/">GitHub</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p className={styles.footer__copyright}>Copyright © GameVendor, 2022</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;