import React from 'react'
import Navbar from '../Navbar'
import PropTypes from 'prop-types'

export default function Header() {
  return (
    <Navbar title="TextUtils" aboutText = "About" />
    // <Navbar />
  )
}

Navbar.propTypes = {title: PropTypes.string.isRequired,
                    aboutText: PropTypes.string}

// Specifies the default values for props:
Navbar.defaultProps = {
  title: 'TextUtils',
  aboutText: 'About Us'
};