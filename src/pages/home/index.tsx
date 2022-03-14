import React from "react";
import Preview from "./preview";
import Filters from "./filters";
import Catalog from "./catalog";
import Questions from "./questions";
import styles from './style.module.scss';


const Home = () => {
    return (
        <div className={[styles.home, 'container'].join(' ')}>
            <h1 className={styles.home__title}>Games</h1>
            <Preview/>
            <Filters/>
            <Catalog/>
            <Questions/>
        </div>
    )
}

export default Home;



