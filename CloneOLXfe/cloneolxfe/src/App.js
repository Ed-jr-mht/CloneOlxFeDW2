import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import Router from './Routers';
import { Template } from './components/MainComponents'
import Header from './components/partials/Header'
import Footer from './components/partials/Footer'

const Page = (props) => {
  return (
    <BrowserRouter>
      <Template>
        <Header/>
        <Router/>
        <Footer/>
      </Template>
    </BrowserRouter>
  )
}
const mapStateToProps = (state) =>{
  return {
    user: state.user
  }
}
const mapDispatchProps = (dispatch) =>{
  return{

  }
}
export default connect(mapStateToProps,mapDispatchProps) (Page)

