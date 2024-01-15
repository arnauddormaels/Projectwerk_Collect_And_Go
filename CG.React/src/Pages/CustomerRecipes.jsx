import React from 'react'
import Navbar from '../CustomerComponents/Navbar'
import Searchbalk from '../CustomerComponents/Searchbalk'
import Recipelist from '../CustomerComponents/Recipelist'

const CustomerRecipes = () => {
  return (
    <div>
        <Navbar/>
        <Searchbalk/>
        <Recipelist/>
    </div>
  )
}

export default CustomerRecipes