import React, {useState} from "react";
import Select from 'react-select';
import { ReactComponent as Delete } from "../../../../src/assets/images/del.svg";
import { ReactComponent as Search } from "../../../../src/assets/images/search.svg";
import { ReactComponent as Filter } from "../../../../src/assets/images/filter.svg";
import styles from './style.module.scss';

const customStyles = {
    control: (base: any) => ({
        ...base,
        borderColor: '#D0D5DD',
        borderRadius: 8,
        padding: 3,
    }),
    multiValue: (base: any) => ({
        ...base,
        backgroundColor: '#F4EBFF',
        borderRadius: 4,
    }),
    multiValueLabel: (base:any) => ({
        ...base,
        color: '#7F56D9',

    })
}

const Filters = () => {
    const [selectedCategoryOption, setSelectedCategoryOption] = useState([{ value: 'strategy', label: 'Strategy' }]);
    const [selectedSortOption, setSelectedSortOption] = useState([{ value: 'popular', label: 'Popular' }]);

    const categoryOptions = [
        { value: 'strategy', label: 'Strategy' },
        { value: 'rpg', label: 'RPG' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    const handleChangeCat = (option:any) => {
        setSelectedCategoryOption(option);
        console.log(option);
    };

    const sortOptions = [
        { value: 'popular', label: 'Popular' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    const handleChange = (option:any) => {
        setSelectedSortOption(option);
        console.log(option);
    };

    return (
        <div className={styles.filters}>
            <div className={styles.filter}>
                <label className={styles.filter__title}>Search for games</label>
                <div className={styles.filter__search}>
                    <input className={styles.filter__input} type="text" placeholder="Search..."/>
                    <div className={styles.filter__img}>
                        <Search/>
                    </div>
                </div>
            </div>
            <div className={styles.filter}>
                <label className={styles.filter__title}>Category</label>
                <Select
                    styles={customStyles}
                    value={selectedCategoryOption}
                    onChange={handleChangeCat}
                    // @ts-ignore
                    options={categoryOptions}
                    isMulti
                    className={styles.select}
                />
            </div>
            <div className={styles.filter}>
                <label className={styles.filter__title}>Sort by</label>
                <Select
                    styles={customStyles}
                    value={selectedSortOption}
                    onChange={handleChange}
                    options={sortOptions}
                    className={styles.select}
                />
            </div>
            <button className={styles.filters__btn}>
                <Filter/>
                Filters
            </button>
            <div className={styles.values}>
                {selectedCategoryOption.map(({value,label}) => (
                    <span key={value}>{label}<Delete/></span>
                ))}
            </div>
        </div>
    )
}

export default Filters;