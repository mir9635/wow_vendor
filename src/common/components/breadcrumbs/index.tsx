import React from "react";
import {Link} from "react-router-dom";
import styles from './style.module.scss';

const Breadcrumbs = () => {
    return (
        <div className='container'>
            <div className={styles.breadcrumbs}>
                <Link to='/'>Home</Link>
                <Link to='/'>Discover</Link>
                <span>Games</span>
            </div>
        </div>
    )
}

export default Breadcrumbs;

