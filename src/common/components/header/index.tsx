import React, {FC} from "react";
import {Link} from "react-router-dom";
import { ReactComponent as Logo } from '../../../../src/assets/images/logo.svg';
import { ReactComponent as Pin } from "../../../../src/assets/images/pin.svg";
import { ReactComponent as Car } from "../../../../src/assets/images/cart.svg";
import { ReactComponent as Search } from "../../../../src/assets/images/search2.svg";
import { ReactComponent as Vector } from "../../../../src/assets/images/vector.svg";
import styles from './style.module.scss';

const  Header:FC = () => (
    <header className={styles.header}>
        <div className={styles.banners}>
            <div className={styles.banner}>Refer a friend and get $10 off! 🔥 Offer ends February 27!</div>
        </div>
        <div className="container">
            <div className={styles.header__info}>
                <Link to='/' className={styles.header__address}>
                    <Pin/>
                    <p>Dublin, Republic of Ireland</p>
                </Link>
                <Link to='/'>
                    <Logo/>
                </Link>
                <div className={styles.header__links}>
                    <a className={styles.header__link} href="/"><Search/></a>
                    <a className={styles.header__link} href="/"><Vector/></a>
                    <a className={styles.header__link} href="/"><Car/></a>
                </div>
            </div>
        </div>
        <div className={styles.menu}>
            <div className="container">
                <ul className={styles.menu__list}>
                    <li><a href="/">Discover</a></li>
                    <li><a href="/">Browse</a></li>
                    <li><a href="/">Store</a></li>
                    <li><a href="/">Platforms</a></li>
                    <li><a href="/">Releases</a></li>
                    <li><a href="/">Mobile</a></li>
                    <li><a href="/">Articles</a></li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">News</a></li>
                    <li><a href="/">Contacts</a></li>
                </ul>
            </div>

        </div>
    </header>
);

export default Header;