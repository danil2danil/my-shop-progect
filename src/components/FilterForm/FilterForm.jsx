import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { aplyFilters, filterItems } from '../../redux/productsSlise'
import Filteritem from './Filteritem'

function FilterForm() {
    const [filters, setFilters]=useState({brand: ["Adidas", "Nike", "New Ballance", "Soucony"], type: ["Бездорожье", "Стадион", "Шоссе"], waterproof: ["Водонепроницаемые"]})

    const dispatch = useDispatch()
    const [chosedFilters, setChosedFilters] = useState([])
    const handleClick = (filter, filterValue)=>{
        if(chosedFilters.some(item => item[filter] === filterValue)){
            setChosedFilters(()=>chosedFilters.filter(elem=>elem[filter] !== filterValue))
        }
        else{
            setChosedFilters(chosedFilters.concat([{[filter]: filterValue}]))
        }
    }
    
    return (
        <section className='filters'>
            <div className="filters__area">
                {filters.brand.map((item)=>{
                    return(
                        <Filteritem filter={"brand"} filterValue={item} handleClick={handleClick}/>
                    )
                })}
            </div>
            <button onClick={()=>dispatch(aplyFilters(chosedFilters))} style={{background: "violet", padding: 10}}>Применить фильтры</button>
        </section>
    )
}

export default FilterForm