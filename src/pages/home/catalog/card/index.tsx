import React, {FC} from "react";
import {Link} from "react-router-dom";
import empty from '../../../../../src/assets/images/cards/empty.jpg';
import ICard from "../../../../interfaces/card";
import styles from './style.module.scss';

const Card:FC<ICard> = ({previewImg,category,title,rating,ratingCount,info,price,oldPrice,noReleased}) => {
    const numberWithSeparate = (number:number) => {
        let newNumber = String(number).split( /(?=(?:...)*$)/ );
        return newNumber.join(',');
    }

    return (
        <Link to="/" className={styles.card}>
            <img className={styles.card__img} src={previewImg ? previewImg : empty} alt={title} />
            <div className={styles.card__body}>
                <span className={styles.badge} data-cat={category}>{category}</span>
                <h3 className={styles.card__title}>{title}</h3>
                <div className={styles.rating}>
                    <div className={styles.rating__stars} data-rating={rating}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <p className={styles.rating__text}>{numberWithSeparate(ratingCount)}</p>
                </div>
                <p className={styles.card__info}>{info}</p>
                <div className={styles.card__prices}>
                    {!noReleased &&
                        <>
                            {!!oldPrice && <del>${numberWithSeparate(oldPrice)}</del>}
                            <span>{price === 0 ? 'Free' : `$${numberWithSeparate(price)}`}</span>
                            {!!oldPrice && <b>-{Math.round(price*100/oldPrice)}%</b>}
                        </>}
                </div>
            </div>
        </Link>
    )
}

export default Card;