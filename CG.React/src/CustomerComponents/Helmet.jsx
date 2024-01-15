import React from 'react'
import styles from '../css/Customer.module.css'


const Helmet = () => {
  return (
    <div>
        <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500&family=Roboto:ital,wght@0,100;0,300;0,400;1,100;1,300&display=swap"
          rel="stylesheet"
        />
      </Helmet>
    </div>
  )
}

export default Helmet