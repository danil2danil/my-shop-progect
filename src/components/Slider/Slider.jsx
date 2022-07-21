import './slider.scss'
import { useState, useEffect } from 'react'
import sliderItems from './sliderData'



function Slider({ isAnimationActive, images, width, height }) {
    const sliderWidth = 600
    const sliderHeight = 200
    const visibleItems = 1
    let itemWidth = sliderWidth / visibleItems
    const [offset, setOffset] = useState(0)
    const curentOffset = offset;
    const [animationCurentSlide, setanimationCurentSlide] = useState(1)
    const [isFinalSlide, setIsFinalSlide] = useState(false)


    const swipeNext = () => {
        setTimeout(() => {
            setOffset(() => {
                return Math.max((curentOffset - itemWidth * visibleItems), -(itemWidth * (sliderItems.length - visibleItems)))
            });
        }, 500);

    }

    const swipePrew = () => {
        setTimeout(() => {
            setOffset(() => {
                return Math.min(curentOffset + itemWidth * visibleItems, 0)
            })
        }, 500);

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
        if (animationCurentSlide !== sliderItems.length && isFinalSlide===false) {
            autoAnimationNext()
        }
        else setIsFinalSlide(true)
        if (animationCurentSlide !==1 && isFinalSlide===true) {
            autoAnimationPrev()
        }
    }, [curentOffset, isFinalSlide]);


    const items = sliderItems.map((elem) => {
        return (
            <div key={elem.id} className="slider__item" style={{ minWidth: itemWidth }}>
                <p className="slider__item-content">
                    {elem.content}
                </p>
            </div>
        );
    })
    return (
        <div className="slider">
            <button className="slider__nav-btn slider__nav-btn--prew" onClick={swipePrew}>prew</button>
            <div className="slider__window" style={{ width: `${sliderWidth}px` }}>
                <div className="slider__track" style={{ height: `${sliderHeight}px`, transform: `translateX(${offset}px)` }}>
                    {items}
                </div>
            </div>
            <button className="slider__nav-btn slider__nav-btn--next" onClick={swipeNext}>next</button>
        </div>
    )
}

export default Slider;