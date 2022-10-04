import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsIteam from './NewsIteam'
import Load from './Load'
export class News extends Component {
  total;
   static defaultProps=
   {
    pagesize : 10,
    category:'general',
    country:'in'
   }
  static propTypes=
  {
  pagesize:PropTypes.number,
  category:PropTypes.string,
  country:PropTypes.string,

  }
constructor()
{
    super();
    console.log('I am in constructor');
    this.state={
    articals: [],
    page:1,
   loading:false}
}

async componentDidMount()
{ let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3e06517c91304518a930568b4dafa630&page=1&pageSize=${this.props.pagesize}`;
this.setState({loading:true})
    let data=await fetch(url);
    let parsedata =await data.json();
    this.setState({articals:parsedata.articles,
      loading:false
    });
    this.total=parsedata.totalResults;
   
}
gonext=async ()=>
{
    console.log('clicek on next');
    
    
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3e06517c91304518a930568b4dafa630&page=${this.state.page+1}&pageSize=${this.props.pagesize}`;
    this.setState({loading:true})
let data=await fetch(url);
let parsedata =await data.json();
this.setState({articals:parsedata.articles,
    page:this.state.page +1,
    loading:false
});
    
}
goback=async ()=>
{
    console.log('clicek on back');
    
    
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3e06517c91304518a930568b4dafa630&page=${this.state.page -1}&pageSize=${this.props.pagesize}`;
    this.setState({loading:true})
let data=await fetch(url);
let parsedata =await data.json();
this.setState({articals:parsedata.articles,
    page:this.state.page -1,
    loading:false
});
    
}

  render() {
 
    return (
      <div className='container'>
         <h1>TOP HEADLINES</h1>
       {this.state.loading&&<Load/>} 
      <div className='row'>
      { !this.state.loading&&this.state.articals.map((ele)=>{
      return   <div className='col-md-3 mx-2 pt-2'><NewsIteam title={ele.title}desc={ele.description} imgurl={ele.urlToImage?ele.urlToImage:'https://www.deccanherald.com/sites/dh/files/articleimages/2022/09/24/rupee-1147712-1663962513.jpg'} url={ele.url} updated={ele.publishedAt}/></div>
        
       })}
       <div className='container d-flex justify-content-between'>
       <button  disabled= {this.state.page<=1} className='btn btn-info' onClick={this.goback}>&larr; prev</button>
        <button  disabled={this.state.page>=(this.total/this.props.pagesize)}className='btn btn-info' onClick={this.gonext}>next &rarr;</button>
      
       </div>
   
    
 </div>

 
 

       
       
     
      </div>
    )
  }
}

export default News
