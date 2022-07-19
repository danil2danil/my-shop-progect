import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { findProduct } from '../../redux/productsSlise'
import { useState } from 'react'
import './search-input.scss'
import { BsSearch } from 'react-icons/bs'


function SearchInput() {
  const [inputValue, setInputValue] = useState("")
  const dispatch = useDispatch()
  const handleChange = (event) => {
    setInputValue(event.target.value)
  }
  const search = () => dispatch(findProduct(inputValue))
  return (
    <div className='search'>
      <input
        className='search__input'
        value={inputValue}
        onChange={handleChange}
        placeholder="Ищите что-то конкретное?"
      />
      <button className='search__input-btn' onClick={() => search()}>
        <BsSearch style={{ width: 25, height: 25, color: "white"}} />
      </button>
    </div>
  )
}

export default SearchInput