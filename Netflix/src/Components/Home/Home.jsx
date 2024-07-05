import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Banner from '../Banner/Banner'
import RowList from '../Rows/RowList/RowList'


function Home() {
  return (
   <>
   <Header />
   <Banner/>
   <RowList/>
   <Footer />
    </>
  )
}

export default Home