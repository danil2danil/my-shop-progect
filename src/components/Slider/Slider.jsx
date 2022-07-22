import './slider.scss'
import { useState, useEffect } from 'react'
import sliderItems from './sliderData'
import { BsArrowRightSquare, BsArrowLeftSquare } from 'react-icons/bs'



function Slider({ isAnimationActive, images, width, height, animate, buttons }) {
    const sliderWidth = width
    const sliderHeight = 300
    const visibleItems = 1
    const itemWidth = sliderWidth / visibleItems
    const [offset, setOffset] = useState(0)
    const curentOffset = offset;
    const [animationCurentSlide, setanimationCurentSlide] = useState(1)
    const [isFinalSlide, setIsFinalSlide] = useState(false)


    const swipeNext = () => {
        setOffset(() => {
            return Math.max((curentOffset - itemWidth * visibleItems), -(itemWidth * (images.length - visibleItems)))
        });

    }

    const swipePrew = () => {
        setOffset(() => {
            return Math.min(curentOffset + itemWidth * visibleItems, 0)
        })

    }

    const autoAnimationNext = () => {
        swipeNext();
        setanimationCurentSlide(animationCurentSlide + 1)
    }

    const autoAnimationPrev = () => {
        swipePrew();
        setanimationCurentSlide(animationCurentSlide - 1)
    }

    useEffect(() => {
        if (animate) {
            if (animationCurentSlide !== images.length && isFinalSlide === false) {
                autoAnimationNext()
            }
            else setIsFinalSlide(true)
            if (animationCurentSlide !== 1 && isFinalSlide === true) {
                autoAnimationPrev()
            }
        }
    }, [curentOffset, isFinalSlide]);


    const items = images.map((elem) => {
        return (
            <img src={elem} alt="" className="slider__item" style={{ minWidth: itemWidth }} />
        );
    })
    return (
        <div className="slider">
            <BsArrowLeftSquare style={buttons ? { display: 'block' } : { display: 'none' }} className="slider__nav-btn slider__nav-btn--prew" onClick={swipePrew}>prew</BsArrowLeftSquare>
            <div className="slider__window" style={{ width: `${sliderWidth}px` }}>
                <div className="slider__track" style={{ height: `${sliderHeight}px`, transform: `translateX(${offset}px)` }}>
                    {items}
                </div>
            </div>
            <BsArrowRightSquare style={buttons ? { display: 'block' } : { display: 'none' }} className="slider__nav-btn slider__nav-btn--next" onClick={swipeNext}>next</BsArrowRightSquare>
        </div>
    )
}

export default Slider;