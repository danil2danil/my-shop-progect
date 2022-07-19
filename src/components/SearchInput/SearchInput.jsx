import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { handleChangeSearch } from '../../redux/productsSlise'

function SearchInput() {
    const dispatch = useDispatch()
    const handleChange = (event)=>{
        dispatch(handleChangeSearch(event.target.value))
    }
    
  return (
    <>
        <input 
            value={useSelector((state)=>state.products.searchValue)} 
            onChange={handleChange}
            placeholder="Ищите что-то конкретное?"
        />
        <button style={{background: "violet"}}>Найти</button>
    </>
  )
}

export default SearchInput