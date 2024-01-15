import React from 'react'
import Navbar from '../CustomerComponents/Navbar'
import Helmet from '../CustomerComponents/Helmet'
import Banner from '../CustomerComponents/Banner'
import styles from '../css/Customer.module.css'
import Recipes from '../CustomerComponents/Recipes'


const CustomerPage = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Recipes/>
   
    </div>
  )
}

export default CustomerPage