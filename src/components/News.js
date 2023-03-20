
import NewsItem from './NewsItem.js'
import React, { Component } from 'react'
import Spinner from './Spinner.js';
import PropTypes from 'prop-types';
import NewsImg from '../News-img.jpg'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  articles = [
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Jon Fingas",
      "title": "Garmin debuts an ECG app, but it's only available on one smartwatch",
      "description": "Garmin hasn't yet had a dedicated electrocardiogram (ECG) app despite the health focus of its wearables, but it's filling that gap today. The company has introduced a simply-titled ECG App that, like equivalents on other devices, can study your heart rhythm a…",
      "url": "https://www.engadget.com/garmin-ecg-app-smartwatch-120035781.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2023-01/e3a406b0-981b-11ed-8ffb-57d53eaafc4b",
      "publishedAt": "2023-01-24T12:00:35Z",
      "content": "Garmin hasn't yet had a dedicated electrocardiogram (ECG) app despite the health focus of its wearables, but it's filling that gap today. The company has introduced a simply-titled ECG App that, like… [+1516 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Devindra Hardawar",
      "title": "LG's latest CineBeam ultra short-throw projector is a dream — if you can afford it",
      "description": "Who wouldn't want a small box that can spit a 120-inch image onto your wall? That's the basic pitch behind 4K ultra short-throw (UST) projectors, which are sometimes called \"Laser TVs.\" They're technically easier to set up than traditional projectors, and unl…",
      "url": "https://www.engadget.com/lg-cinebeam-hu915qe-review-ust-projector-130042561.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2023-01/6f12f500-98fb-11ed-afde-65c233381a8c",
      "publishedAt": "2023-01-24T13:00:42Z",
      "content": "While my setup wasn't ideal, the CineBeam HU915QE still delivered most of what I wanted: A large and luscious dose of cinema in my basement screening room. Almost immediately, I noticed that it produ… [+4893 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Gizmodo.com"
      },
      "author": "Germain Lussier",
      "title": "M3GAN Is Now Str3aming, B3sti3s",
      "description": "With Tuesday’s Oscar nominations celebrating the best in film from 2022, it might be easy to forget today is also the day you can celebrate not just the best film of 2023 so far, but maybe one of the best ever. I’m talking, of course, of M3GAN.Read more...",
      "url": "https://gizmodo.com/m3gan-streaming-release-james-wan-jason-blum-killer-dol-1850025114",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/7921060ef24f21d2006cb83551c16e5a.jpg",
      "publishedAt": "2023-01-24T19:30:00Z",
      "content": "With Tuesdays Oscar nominations celebrating the best in film from 2022, it might be easy to forget today is also the day you can celebrate not just the best film of 2023 so far, but maybe one of the … [+1683 chars]"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": null,
      "title": "Three killed in Washington state store shooting, suspect at large - Reuters",
      "description": "Three people were killed in a shooting at a convenience store in central Washington state early Tuesday, police said, and the suspect is at large and considered dangerous.",
      "url": "https://www.reuters.com/world/us/three-killed-washington-state-store-shooting-suspect-large-2023-01-24/",
      "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=127",
      "publishedAt": "2023-01-24T17:58:00Z",
      "content": "Jan 24 (Reuters) - Three people were killed in a shooting at a convenience store in central Washington state early Tuesday, police said, and the suspect is at large and considered dangerous.\r\nPolice … [+1494 chars]"
    }
  ]
  
  capitilizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      totalResults: 0,
      loading: true,
      page: 1
    }
    document.title = `${this.capitilizeFirstLetter(this.props.category)}-Daily news`;
  }

  async updateNews() {
    this.props.setProgress(20);
    this.setState({ loading: true });
    let fetchUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api_key}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(fetchUrl);
    this.props.setProgress(40);
    let parsedData = await data.json();
    this.props.setProgress(80);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults,loading:false });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page+1 ,loading: true});
    let fetchUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api_key}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(fetchUrl);
    let parsedData = await data.json();
    this.setState({ articles:this.state.articles.concat(parsedData.articles),loading:false }); 
  };
  // handlePrevClick = async () => {
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // }

  // handleNextClick = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // }

  render() {
    return (
      <>
        <h1 style={{ lineHeight: '3', textAlign: 'center',marginTop:'60px' }}>Daily News Top {this.capitilizeFirstLetter(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner />}

          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length!== this.state.totalResults}
            // loader={<Spinner/>}
          >
            <div className='container my-3'>
              <div className="row">
                {this.state.articles.map((element) => {
                  return <div key={element.url} className="col-md-3">
                    <NewsItem title={element.title ? element.title : ""} descr={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage ? element.urlToImage : NewsImg} newsUrl={element.url} author={element.author ? element.author : 'Unknown'} publishDate={element.publishedAt} source={element.source.name} />
                  </div>
                })}
              </div> 
            </div>
          </InfiniteScroll>

          {/* <div className="d-flex justify-content-center">
            <button type="button" disabled={this.state.page<=1} className="btn btn-dark pagebtn" onClick={this.handlePrevClick}>&larr; Prev</button>
            <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults /this.props.pageSize)} className="btn btn-dark pagebtn" onClick={this.handleNextClick}>Next &rarr; </button>
          </div> */}
      </>
    )
  }
}

