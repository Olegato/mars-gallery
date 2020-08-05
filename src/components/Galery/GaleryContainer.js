import React from 'react'
import './HeaderStyle.scss'

const Header = () => {
  return (
    <header className={'main-header'}>
      <img className={'header-img'} src={'https://images8.alphacoders.com/374/374852.jpg'} alt='Mars'/>
      <h1 className={'main-title'}>MARS GALLERY</h1>
    </header>
  )
}

export default Header
