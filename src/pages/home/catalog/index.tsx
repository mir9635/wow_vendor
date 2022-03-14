import React, {useEffect, useState} from "react";
import ReactPaginate from 'react-paginate';
import Card from "./card";
import { ReactComponent as Plus } from '../../../../src/assets/images/plus.svg';
import data from "./data";
import ICard from "../../../interfaces/card";
import styles from './style.module.scss';

const Catalog = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [cards, setCards] = useState<ICard[]>(data);
    const itemsPerPage = 4;
    // @ts-ignore
    const items = [...Array(99).keys()];
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [img, setImg] = useState<any>(null);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [rating, setRating] = useState(0);
    const [ratingCount, setRatingCount] = useState(0);
    const [info, setInfo] = useState('');
    const [price, setPrice] = useState(0);
    const [oldPrice, setOldPrice] = useState(0);
    const [noReleased, setNoReleased] = useState(false);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        // @ts-ignore
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event:any) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };

    const handleClick = () => setIsOpen(true);

    const handleSave = () => {
        setCards([...cards, {
            id: cards.length + 1,
            previewImg: img,
            category: category,
            title: title,
            rating: rating,
            ratingCount: ratingCount,
            info: info,
            price: price,
            oldPrice: oldPrice,
            noReleased: noReleased
        } ])

        setIsOpen(false);
    };

    return (
        <>
            <div className={styles.catalog}>
                <div className={styles.addCard}>
                    <p className={styles.addCard__title}>You can add a product card by clicking on the button</p>
                    <button className='btn' onClick={handleClick}>
                        <Plus/>
                        Add card
                    </button>
                </div>
                {cards.map(({id,previewImg,category,title,rating,ratingCount,info,price,oldPrice,noReleased}) => (
                    <Card
                        key={id}
                        id={id}
                        previewImg={previewImg}
                        category={category}
                        title={title}
                        rating={rating}
                        ratingCount={ratingCount}
                        info={info}
                        price={price}
                        oldPrice={oldPrice}
                        noReleased={noReleased}
                    />
                ))}
            </div>
            <div className={styles.paginationWrap}>
                <ReactPaginate
                    nextLabel=">"
                    previousLabel="<"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    // @ts-ignore
                    renderOnZeroPageCount={null}
                />
            </div>
            {isOpen && <div className={styles.modal}>
                <button onClick={()=>setIsOpen(false)} className={styles.modal__close}>+</button>
                <input type="file" onChange={(event)=> {
                    if (event.target.files && event.target.files[0]) {
                        let reader = new FileReader();
                        reader.onload = (e) => {
                            if(e.target) {
                                setImg(e.target.result);
                            }
                        };
                        reader.readAsDataURL(event.target.files[0]);
                    }
                }
                }/>
                <input placeholder='card category' type="text" onChange={(e)=> setCategory(e.target.value)}/>
                <input placeholder='card name' type="text" onChange={(e)=> setTitle(e.target.value)}/>
                <input placeholder='card rating' type="text" onChange={(e)=> setRating(Number(e.target.value))}/>
                <input placeholder='card rating count' type="text" onChange={(e)=> setRatingCount(Number(e.target.value))}/>
                <textarea placeholder='card info' onChange={(e)=> setInfo(e.target.value)}/>
                <input placeholder='card price' type="text" onChange={(e)=> setPrice(Number(e.target.value))}/>
                <input placeholder='card old price' type="text" onChange={(e)=> setOldPrice(Number(e.target.value))}/>
                <label>
                    <input type="checkbox" onChange={(e)=> setNoReleased(e.target.checked)}/>
                    <span>no released</span>
                </label>
                <button onClick={handleSave} className='btn'>Save</button>
            </div>}
        </>
    )
}

export default Catalog;