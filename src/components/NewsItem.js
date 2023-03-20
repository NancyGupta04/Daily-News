
import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let { title, descr, imageUrl, newsUrl, author, publishDate, source } = this.props
    return (
      <div>
        <div className="card" >
          <div style={{position:'absolute',right:'0',margin:'0px',padding:'0px' }}><span className="badge rounded-pill bg-info"> {source}</span></div>
          <img className="card-img-top" src={imageUrl} alt="" />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{descr}...</p>
            <p className='card-text'><small className='text-muted'>By {author} on {new Date(publishDate).toGMTString()}</small></p>
            <a href={newsUrl} className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}
