import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { findProduct } from '../../redux/productsSlise'
import { useState } from 'react'

function SearchInput() {
  const [inputValue, setInputValue] = useState("")
  const dispatch = useDispatch()
  const handleChange = (event)=>{
    setInputValue(event.target.value)
  }
  const search = () => dispatch(findProduct(inputValue))
  return (
    <>
      <input
        value={inputValue}
        onChange={handleChange}
        placeholder="Ищите что-то конкретное?"
      />
      <button style={{ background: "violet" }} onClick={()=>search()}>Найти</button>
    </>
  )
}

export default SearchInput