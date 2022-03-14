import React from "react";
import {data} from "./data";
import Question from "./question";
import styles from './style.module.scss';

const Questions = () => (
    <div className={styles.questions}>
        <h2 className={styles.questions__title}>Frequently asked questions</h2>
        <p className={styles.questions__text}>Everything you need to know about the games.</p>
        {data.map(({title, text}) => (
            <Question key={title} title={title} text={text}/>
        ))}
    </div>
);

export default Questions;