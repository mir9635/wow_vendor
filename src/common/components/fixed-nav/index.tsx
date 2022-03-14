import React from "react";
import styles from './style.module.scss';

import {ReactComponent as Home} from "../../../assets/images/fixedNav/hame.svg";
import {ReactComponent as Browse} from "../../../assets/images/fixedNav/browse.svg";
import {ReactComponent as Search} from "../../../assets/images/fixedNav/search.svg";
import {ReactComponent as Account} from "../../../assets/images/fixedNav/account.svg";
import {ReactComponent as Cart} from "../../../assets/images/fixedNav/cart.svg";

const FixedNav = () => (
    <div className={styles.fixedNav}>
        <div className="container">
            <div className={styles.fixedNav__inner}>
                <a href="/"><Home/><span>Home</span></a>
                <a href="/"><Browse/><span>Browse</span></a>
                <a href="/"><Search/><span>Search</span></a>
                <a href="/"><Account/><span>Account</span></a>
                <a href="/"><Cart/><span>Cart</span></a>
            </div>
        </div>
    </div>

);

export default FixedNav