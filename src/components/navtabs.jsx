import { Link } from 'react-router-dom'
import Header from './header'
import React from 'react'

export default function navTab() {
  return (
    <Header 
    links={[
        <Link key={1} className='home-link' to="/">Stock Exchange</Link>,
        <Link key={2} className='link' to="/cyp"> Crypto </Link>,
        <Link key={3} className='link' to="/"> S&P 500 </Link>,
    ]}
    />
  )
}