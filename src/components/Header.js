import PropTypes from 'prop-types'
import React from 'react'
import Logo from '../images/logo.png'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    {/* <div className="logo">
      <span className="icon fa-diamond"></span>
    </div> */}
    <div className="content">
      <div className="inner">
        <div >
         <a className="mainlogo" href="/"><img src={Logo} /></a>
        </div>
        {/* <p>
        ‘OGIDI OKUNRIN’
        </p> */}
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Stockists
          </button>
        </li>
        {/* <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Shop
          </button>
        </li> */}
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
