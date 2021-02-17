import React from 'react'
import '../assets/scss/main.scss'
import Helmet from 'react-helmet'
// import YouTube from 'react-youtube';
import ReactPlayer from 'react-player'
// import Layout from '../components/layout'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading',
      muted: true,
    }
    this.handleOpenArticle = this.handleOpenArticle.bind(this)
    this.handleCloseArticle = this.handleCloseArticle.bind(this)
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
        this.setState({loading: ''});
    }, 100);
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleOpenArticle(article) {

    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout
      })
    }, 350)

  }

  handleCloseArticle() {

    this.setState({
      articleTimeout: !this.state.articleTimeout
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: ''
      })
    }, 350)

  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.isArticleVisible) {
        this.handleCloseArticle();
      }
    }
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.mute();
    event.target.playVideo();
  }
  
  _onEnd(event) {
    event.target.playVideo();
  }
  
  render() {
    // const siteTitle = this.props.data.site.siteMetadata.title
    // const siteDescription = this.props.data.site.siteMetadata.description
    const { muted } = this.state;
  
    const videoOptions = {
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 0,
        rel: 0,
        showinfo: 0
      }
    }
    return (
      <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
      <Helmet>
          <title> Tokyo James | Official Website</title>
          <meta name="description" content="Tokyo James Fashion Brand UK/Nigeria" />
      </Helmet>

      <div id="wrapper">

        <Header onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} />
        <div
						className='volume'
						onClick={() => this.setState({ muted: !muted })}>
						sound {this.state.muted ? "off" : "on"}
					</div>
        <Main
          isArticleVisible={this.state.isArticleVisible}
          timeout={this.state.timeout}
          articleTimeout={this.state.articleTimeout}
          article={this.state.article}
          onCloseArticle={this.handleCloseArticle}
        />
        <Footer timeout={this.state.timeout} />

      </div>
      {/*<div id="bg"></div>*/}

      <div className="video-background">
        <div className="video-foreground">
        <ReactPlayer 
        url='https://www.youtube.com/watch?v=v_ulgBFDz90'
        playing={true}
        loop={true}
        volume={1}
        muted={muted}
         />
          {/* <YouTube
            videoId="v_ulgBFDz90"
            opts={videoOptions}
            className="video-iframe"
            muted={muted}
            onReady={this._onReady}
            onEnd={this._onEnd}
          /> */}
        </div>
      </div>
    </div>
    )
  }
}

export default IndexPage
