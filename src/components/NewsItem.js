import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, url, author, publishedAt } = this.props;

    return (
      <div className='my-3'>

        <div className="card" >
          <div>
            <span className="badge bg-danger topRightBadge"><span className="visually-hidden">unread messages</span> {author} </span>
          </div>
          <img src={imageUrl ? imageUrl : 'https://www.letsreact.org/wp-content/uploads/2020/11/Latest-React-News.jpg'} className="card-img-top" alt="..." />
          <div className="card-body">

            <h5 className="card-title">{title}...

            </h5>
            <p className="card-text">{description}...</p>
            <p><small>By {author} on {new Date(publishedAt).toGMTString()}</small></p>
            <a href={url} rel="noreferrer" target='_blank' className="btn btn-sm btn-primary">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}
