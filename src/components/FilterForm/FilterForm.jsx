import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { aplyFilters } from '../../redux/productsSlise'
import { MdOutlineArrowDropDownCircle } from 'react-icons/md'
import Filteritem from './Filteritem'
import SearchInput from '../SearchInput/SearchInput'
import PopupCart from '../PopupCart/PopupCart'

function FilterForm() {
    const [filters, setFilters] = useState({ brand: ["Adidas", "Nike", "New Ballance", "Soucony"], specialization: ["Бездорожье", "Стадион", "Шоссе"], waterproof: ["Да"] })
    const [isFiltersVisible, setIsFiltersVisible] = useState(false)
    const dispatch = useDispatch()
    const [chosedFilters, setChosedFilters] = useState([])
    const handleClick = (filter, filterValue) => {
        if (chosedFilters.some(item => item[filter] === filterValue)) {
            setChosedFilters(() => chosedFilters.filter(elem => elem[filter] !== filterValue))
        }
        else {
            setChosedFilters(chosedFilters.concat([{ [filter]: filterValue }]))
        }
    }
    return (
        <section className='filters'>
            <PopupCart />
            <div className="filters__inner">
                <button
                    onClick={() => setIsFiltersVisible(!isFiltersVisible)}
                    className={ chosedFilters.length > 0 ? 'filters__show-btn active' : 'filters__show-btn'}
                >
                    <MdOutlineArrowDropDownCircle style={{ width: 22, height: 22 }} />
                    Фильтры: {chosedFilters.length}
                </button>
                <SearchInput />  
            </div>
            <div style={{ display: isFiltersVisible ? "block" : "none", padding: 30, background: "rgb(240, 240, 240)"}}>
                <div className="filters__area">
                    <p className='filters__area-text'>Бренд:</p>
                    {filters.brand.map((item) => {
                        return (
                            <Filteritem filter={"brand"} filterValue={item} handleClick={handleClick} />
                        )
                    })}
                </div>
                <div className="filters__area">
                    <p className='filters__area-text'>Cпециализаця:</p>
                    {filters.specialization.map((item) => {
                        return (
                            <Filteritem filter={"specialization"} filterValue={item} handleClick={handleClick} />
                        )
                    })}
                </div>
                <div className="filters__area">
                    <p className='filters__area-text'>Наличие водоотталкивающего слоя:</p>
                    {filters.waterproof.map((item) => {
                        return (
                            <Filteritem filter={"waterproof"} filterValue={item} handleClick={handleClick} />
                        )
                    })}
                </div>
                <button className='filters__submit-btn' onClick={() => dispatch(aplyFilters(chosedFilters))}>Применить фильтры</button>
            </div>
        </section>
    )
}

export default FilterForm