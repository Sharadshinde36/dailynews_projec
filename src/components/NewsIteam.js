import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getByTitle } from '@testing-library/react'

export class NewsIteam extends Component {
  static propTypes = {

  }

  render() {
    let {title,desc,imgurl,url,updated} = this.props;
    return (
        
      <div>
       <div className="card" >
  <img src={imgurl} className="card-img-top" alt="img not found"/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{desc}</p>
    <a href={url} target="__blank" className="btn btn-sm btn-primary">view details</a>
  </div>
  <div class="card-footer text-muted">
  {updated}
  </div>
</div> 
      </div>
    )
  }
}

export default NewsIteam
