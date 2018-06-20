import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Common/Header'
import axios from 'axios';
import SearchResult from './components/SearchResult/SearchResult'

class App extends Component {
  
  constructor(){
    super()
    this.state={
      searching:false,
      searchData:'',
      search:'',
      searchKey:'',
      totalResults:''
    }
    this.handleSearch=this.handleSearch.bind(this)
    this.getResults=this.getResults.bind(this)
    
  }
  // componentDidMount(){
  //   this.getResults(1);
  // }

  getResults(data='',page=1){
    var searchKey
    if(data!==''){
      searchKey=data;
    }else{
      searchKey = this.state.searchKey
    }
      axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s='+searchKey+'&page='+page)  
    .then((res)=>{
      if(res.status===200 && res.data.Search){
       
        this.setState({searchData:res.data.Search,totalResults:res.data.totalResults})
      }else{
        this.setState({totalResults:0,searchData:''})
      }
    }).catch((err)=>{
      this.setState({totalResults:0,searchData:''})
      console.log(err)
    })
  }

  handleSearch(data){
    if(data === ''){
      this.setState({searchData:''})
    }else{
      this.setState({searchKey:data})
      this.getResults(data)
    }
  }

  render() {
    return (
      <div className="container">
       <Header handleSearch={this.handleSearch}  />
       <SearchResult searchData={this.state.searchData} total={this.state.totalResults} searchKey={this.state.searchKey} forPagination={this.getResults} />
      </div>
    );
  }
}

export default App;
