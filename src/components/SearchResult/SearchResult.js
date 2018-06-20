import React , {Component} from 'react';
import Pagination from "react-js-pagination";

class SearchResult extends Component{

    constructor(props){
        super(props);
        this.state={
            searchData:'',
            results:false,
            total:'',
            activePage:1
        }
        this.handlePageChange=this.handlePageChange.bind(this)
    }

    handlePageChange(page){
        this.setState({activePage:page})
        this.props.forPagination('',page)
    }
    componentDidMount(){
        if(this.props.searchData){
            this.setState({searchData:this.props.searchData,results:true})
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.searchData === ''){
            this.setState({searchData:nextProps.searchData,results:false ,searchKey:nextProps.searchKey})
        }else if(this.props.searchData !== nextProps.searchData){
            this.setState({searchData:nextProps.searchData,results:true,total:nextProps.total,searchKey:nextProps.searchKey })
        }
        
    }

    render(){
                return(
                    <div className="row content">
                        {this.state.results ? (
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <div className="row">
                                    <div className="col-sm-12 col-md-12 col-lg-12">
                                        <label className="search_caption">You Searched for :</label><label className="search_text">{this.state.searchKey},</label><span className="results">{this.state.total} Results found</span>
                                    </div>
                                    {this.state.searchData.map((result,i)=>{
                                        let imageUrl='';
                                        if(result.Poster != "N/A"){
                                            imageUrl=result.Poster
                                        }else{
                                            imageUrl=require('../../assets/images/noimagefound.png')
                                        }
                                        return(
                                            <div className="col-sm-6 col-md-6 col-lg-3 movie_item" key={i}>
                                                <div className="card" >
                                                    <div className="img">
                                                        <img className="card-img-top" src={imageUrl} alt="Card image cap" />
                                                    </div>
                                                
                                                    <ul className="list-group list-group-flush">
                                                        <li className="list-group-item"><label className="caption">Name<span className="float-right">:</span></label><label className="value">{result.Title} </label></li>
                                                        <li className="list-group-item"><label className="caption">Year<span className="float-right">:</span></label><label className="value">{result.Year} </label></li>
                                                        <li className="list-group-item"><label className="caption">IMDBId<span className="float-right">:</span></label><label className="value">{result.imdbID} </label></li>
                                                        <li className="list-group-item"><label className="caption">Type<span className="float-right">:</span></label><label className="value">{result.Type}</label></li>
                                                    </ul>
                                                
                                                </div>
                                            </div>
                                    )
                                })}
                                </div>
                                   <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-12">
                                        <Pagination
                                            activePage={this.state.activePage}
                                            itemsCountPerPage={10}
                                            totalItemsCount={this.state.total}
                                            pageRangeDisplayed={5}
                                            onChange={this.handlePageChange}
                                        />
                                        </div>
                                    </div>`
                            </div>
                                
                        ):(
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                No Results Found.</div>
                        )}
                </div>
        
                )
        }
    

}

export default SearchResult;