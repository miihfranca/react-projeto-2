import React from "react";
import Carousel from 'react-elastic-carousel'

import Michele1 from './img/5.jpeg'
import Michele2 from './img/2.jpeg'
import Michele3 from './img/1.jpeg'
import Michele4 from './img/3.jpeg'
import Michele5 from './img/4.jpeg'
import Michele6 from './img/5.jpeg'


export default function Carrossel(){
    return(
        <Carousel className='carrossel'>
            <div>
                <img src={Michele1} alt="" />
            </div>
            <div>
                <img src={Michele2} alt="" />
            </div>
            <div>
                <img src={Michele3} alt="" />
            </div>
            <div>
                <img src={Michele4} alt="" />
            </div>
            <div>
                <img src={Michele5} alt="" />
            </div>
            <div>
                <img src={Michele6} alt="" />
            </div>
        </Carousel>
    )
}