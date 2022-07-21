import React from 'react'
import { BsCartCheckFill } from 'react-icons/bs'
import './popup-cart.scss'
import { useDispatch, useSelector } from 'react-redux'
import { toogleCartPopup } from '../../redux/popupSlise'



function PopupCartBtn() {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.products.cart)
  const showPopup = () => {
    dispatch(toogleCartPopup())
  }
  const isPopupActive = useSelector(state => state.popup.isPopupActive)


  return (
    <div className='popup__btn-wrapper' onClick={showPopup}>
      <div className={isPopupActive ? 'popup__btn-inner active' : 'popup__btn-inner'}>
        <BsCartCheckFill className='popup__btn' />
        <div className='popup__btn-index'>{counter.length}</div>
      </div>
    </div>
  )
}

export default PopupCartBtn