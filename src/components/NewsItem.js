import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
  let {title,description,imageUrl,url,author,publishedAt} = this.props;
    
    return (
      <div>
        <div className="card my-2" >
          <img src={imageUrl?imageUrl:'https://www.letsreact.org/wp-content/uploads/2020/11/Latest-React-News.jpg'} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}...<span className="position-absolute translate-middle badge rounded-pill bg-danger" style={{zIndex:'1',top: '10px',left:'90%',fontWeight: '70'}}><span className="visually-hidden">unread messages</span> {author} </span></h5>
              <p className="card-text">{description}...</p>
              <p><small>By {author} on {new Date(publishedAt).toGMTString()}</small></p>
              <a href={url} rel="noreferrer" target='_blank' className="btn btn-sm btn-primary">Read more</a>
            </div>
        </div>
      </div>
    )
  }
}
