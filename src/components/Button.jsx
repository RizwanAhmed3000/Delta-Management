import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ styles , link}) => {
  return (
  <Link to={link}>
  
  <button type='button' className={`py-4 px-6 bg-blue-gradient 
    font-poppins font-medium text-[18px] text-primary outline-none rounded-[12px] ${styles}`}>
      Get Started
    </button>
    </Link>
  )
}

export default Button