import React, {useState} from 'react'
import { SliderData } from './SliderData'
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} 
from 'react-icons/fa'
import './Slider.css'

const ImageSlider = ({ slides }) => {
const [current, setCurrent] = useState(0)
const length = slides.length

const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
}

const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
}

if(!Array.isArray(slides) || slides.length <= 0) {
    return null;
}

    return (
        <div>
        <section className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
            {slides.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (
                            slide.content === 'img' ?    
                                <div>
                                    <img src={slide.image} alt="travel image" className="image"/>
                                    <p>{slide.description}</p>
                                    <p>{slide.description2}</p>
                                    <p>{slide.description3}</p> 
                                </div>
                                : 
                                <div className="videoBox">
                                    <iframe style={{top: 0,left: 0,width: "100%",height: "100%"}} 
                                            src={slide.image}/>
                                    <p>{slide.description}</p>
                                    <p>{slide.description2}</p>
                                    <p>{slide.description3}</p>
                                    <p>{slide.description4}</p>
                                </div>
                        )}
                    </div>
                )
            })}
        </section>
        </div>
    )
}

export default ImageSlider
