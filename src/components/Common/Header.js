import React,{Component} from 'react';

class Header extends Component{

    constructor(props){
        super(props);
        this.state={
            searchBox:''
        }
        this.handleSearchBox=this.handleSearchBox.bind(this)
    }
    handleSearchBox(e){
        e.preventDefault();
        var value=e.target.value
        this.setState({searchBox:value})
        this.props.handleSearch(value)
    }

    render(){
        return(
            <div className="row header">
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <form className="form-inline">
                        <label className="col-sm-12 col-md-3 col-lg-3 title" htmlFor="inlineFormCustomSelectPref">Movie Catalog</label>
                        <input type="text" name="searchBox" className="form-control col-sm-12 col-md-6 col-lg-6" value={this.state.searchBox} onChange={this.handleSearchBox} id="inlineFormInputName2" placeholder="search here" />
                        <label className="col-sm-12 col-md-3 col-lg-3 account"><i className="fa fa-user"></i>Username<span><i className="fa fa-angle-down" aria-hidden="true"></i></span></label>		  
                    </form>
                </div>		
            </div>
        )
    }

}

export default Header;