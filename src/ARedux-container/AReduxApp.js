import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './AHeader'
import ProductLisning from './AProductLisning'
import ProductDetail from './AProductDetail'
import AProductComponents from './AProductComponents'
import '../components/App.css'

function AReduxApp() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/' element={<ProductLisning/>}/>
        <Route path='/product/:productId' element={<ProductDetail/>}/>
  <Route path='/product' element={
    <div >
  <h1 className='all-product'>All Products</h1>
    <div className="main-grid" style={{ display: "grid" }}>
    <AProductComponents/>
    </div>
    </div>
}/>
  <Route path='mens' element={
    <div>
  <h1 className='all-product'>Men's Products</h1>
    <div className="main-grid" style={{ display: "grid" }}>
    <AProductComponents id={"men's"}/>
    </div>
    </div>
  }/>
    </Routes>
    </BrowserRouter>
  )
}

export default AReduxApp