import React from 'react'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import TestText from '../components/TestText'
import CarsCard from 'components/CarCard'
import IndexPageComponent from '../components/IndexPageComponent'
import NewCarousel from 'components/NewCarousel'
import HomeCarousel from 'components/HomeCarousel'
import BannerSlider from '../components/BannerSlider'

const HomeScreen = () => {

    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
        document.body.classList.add("index");
        return function cleanup() {
            document.body.classList.remove("index");
        };
    });

    return (
        <>
            
            <HomeCarousel />
            
            
            <IndexPageComponent />


        </>
    )
}

export default HomeScreen