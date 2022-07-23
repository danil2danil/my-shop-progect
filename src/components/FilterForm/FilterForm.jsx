import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { aplyFilters } from '../../redux/productsSlise'
import { MdOutlineArrowDropDownCircle } from 'react-icons/md'
import Filteritem from './Filteritem'
import SearchInput from '../SearchInput/SearchInput'
import PopupCartBtn from '../PopupCart/PopupCartBtn'
import { useMediaQuery } from 'react-responsive'



function FilterForm() {
    const [filters, setFilters] = useState({ brand: ["Adidas", "Nike", "New Ballance", "Soucony"], specialization: ["Бездорожье", "Стадион", "Шоссе"], waterproof: ["Да"] })
    const [isFiltersVisible, setIsFiltersVisible] = useState(false)
    const dispatch = useDispatch()
    const [chosedFilters, setChosedFilters] = useState([])
    const isMedia650 = useMediaQuery({ minWidth: 650 })

    const activateFilter = (filter, filterValue) => {
        if (chosedFilters.some(item => item[filter] === filterValue)) {
            setChosedFilters(() => chosedFilters.filter(elem => elem[filter] !== filterValue))
        }
        else {
            setChosedFilters(chosedFilters.concat([{ [filter]: filterValue }]))
        }
    }

    return (
        <section className='filters'>
            <div className="filters__inner">
                <button
                    onClick={() => setIsFiltersVisible(!isFiltersVisible)}
                    className={chosedFilters.length > 0 ? 'filters__show-btn active' : 'filters__show-btn'}
                >
                    <MdOutlineArrowDropDownCircle style={{ width: 22, height: 22 }} />
                    Фильтры: {chosedFilters.length}
                </button>
                {isMedia650 && <SearchInput />}
                <PopupCartBtn />
            </div>
            <div style={{ display: isFiltersVisible ? "block" : "none", padding: "15px 20px", background: "rgb(240, 240, 240)" }}>
                <p className='filters__area-text'>Бренд:</p>
                <div className="filters__area">
                    {filters.brand.map((item) => {
                        return (
                            <Filteritem key={item} filter={"brand"} filterValue={item} handleClick={activateFilter} />
                        )
                    })}
                </div>
                <p className='filters__area-text'>Cпециализаця:</p>
                <div className="filters__area">
                    {filters.specialization.map((item) => {
                        return (
                            <Filteritem key={item} filter={"specialization"} filterValue={item} handleClick={activateFilter} />
                        )
                    })}
                </div>
                <p className='filters__area-text'>Наличие водоотталкивающего слоя:</p>
                <div className="filters__area">
                    {filters.waterproof.map((item) => {
                        return (
                            <Filteritem key={item} filter={"waterproof"} filterValue={item} handleClick={activateFilter} />
                        )
                    })}
                </div>
                <button className='filters__submit-btn' onClick={() => dispatch(aplyFilters(chosedFilters))}>Применить фильтры</button>
            </div>
        </section>
    )
}

export default FilterForm