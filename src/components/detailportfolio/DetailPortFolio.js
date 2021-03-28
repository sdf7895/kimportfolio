import React, { Component } from 'react';
import "./DetailProtFolio.css"

import ImageSlider from '../Slider/ImageSlider';
import { SliderData } from '../Slider/SliderData';

class DetailPortFolio extends Component{
    render(){
      const images =  this.props.location.state.images;
        return(
          <div>
            <ImageSlider slides={images}/>
          </div>
        )
    }
}

export default DetailPortFolio