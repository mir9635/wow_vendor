import React, {FC, useState} from "react";
import { ReactComponent as QPlus } from "../../../../../src/assets/images/q-plus.svg";
import { ReactComponent as QMinus } from "../../../../../src/assets/images/q-minus.svg";
import styles from './style.module.scss';

interface IQuestion {
    title: string;
    text: any;
}

const Question:FC<IQuestion> = ({title, text}) => {
    const [active, setActive] = useState(false);

    const handleToogle = () => setActive((prevState => !prevState))

    return (
        <div className={[styles.question, active ? styles.active : ''].join(' ')}>
            <div onClick={handleToogle} className={styles.question__title}>
                {title}
                {active ? <QMinus/> : <QPlus/>}
            </div>
            <div className={styles.question__text}>{text}</div>
        </div>
    )
}

export default Question
