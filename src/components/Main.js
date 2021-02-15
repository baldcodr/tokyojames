import PropTypes from 'prop-types'
import React from 'react'
import lfw from '../images/london-week.png'
import farfetch from '../images/farfetch.png'
import folklore from '../images/folk-lore.png'
import browns from '../images/browns.png'
import templemuse from '../images/temple-muse.png'
import tokyojames from '../images/tokyo.png'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Stockist</h2>
          <span className="image main">
            {/* <img src={lfw} alt="" /> */}
            <h3>Africa</h3>
            <p>Temple Muse</p>

            <h3>Europe</h3>
            <p>Browns<br/>Paradise Garage</p>

            <h3>Online</h3>
            <p>FarFetch<br/>Folklore</p>

            {/* <div class="grid-container">
            <div class="grid-item"><img src={templemuse} alt="" /></div>
            <div class="grid-item"><img src={browns} alt="" /></div>
            </div>

            <h3>Europe</h3>
            <div class="grid-container">
            <div class="grid-item"><img src={browns} alt="" /></div>
            </div>

            <h3>Online</h3>
            <div class="grid-container">
            <div class="grid-item"><img src={farfetch} alt="" /></div>
            <div class="grid-item"><img src={folklore} alt="" /></div>
            </div> */}

          </span>
          {/* <p>
            Our products are available for purchase on these stores or 
            contact us directly.
          </p> */}
          {close}
        </article>

        {/* <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Shop</h2>
          <span className="image main">
            <img src={tokyojames} alt="" />
          </span>
          <h3>
            COMING SOON!!!
          </h3>

          {close}
        </article> */}

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            
            <div className="about">
              <img className="about" src={tokyojames} alt="" width='200px' />
            </div>
          </span>
          <p>
          Tokyo James is a British-Nigerian Menswear Designer at the 
          forefront of a new Generation of fashion talent emerging 
          from the content of Africa  , founded in 2015 by Iniye Tokyo James. 
          Traveling between London and Lagos, with a base in menswear 
          his collections emphasise the use of traditional Saville Row tailoring 
          whilst shattering traditions with unconventional Pantone and textile 
          choices  –– gaining James a fast-growing cult following globally.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          {/* <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" required/>
            </div>

            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required/>
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form> */}
          <p>Info@tokyojames.co.uk</p>
          <p>Press : <br/>
            Kehinde@theatentive.com</p>
          <p>
          <p>
            Business Enquiry:<br/>
            Nathalie@tokyojames.co.uk
          </p>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/tokyojames"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://tokyojames.co.uk" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/tokyojamess" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul>
          </p>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
