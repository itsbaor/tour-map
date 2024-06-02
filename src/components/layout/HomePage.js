import React, { useEffect, useState } from 'react';
import Intro from '../Intro/Intro';
import Content from '../content/Content';
import ModelMovie from '../modelMovies/modelMovie';
import Menu from '../menu/Menu';
import { useSelector } from 'react-redux';
import Footer from '../footer/Footer';

function HomePage(props) {
    const {MovieDetail}=useSelector(state=>state.inforMovies)
    const [isShowMovieDetail, setIsShowMovieDetail]=useState(false)
    useEffect(()=>{
        setIsShowMovieDetail(MovieDetail ? true :false)
    },[MovieDetail])
    return (
        <div>
           <Intro/>
           <Content/>
           <Menu/>
           <ModelMovie movie={MovieDetail} showModel={ isShowMovieDetail}/>
           <Footer/>
        </div>
    );
}

export default HomePage;