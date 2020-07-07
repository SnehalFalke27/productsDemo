import React from 'react';
import myData from '../json/data.json';
import { getData } from "../actions/getData";
import { connect } from "react-redux";
import './products.scss';

class Products extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
       return (
        <div className="container">
          <h3>All products</h3>
          <div className="card-columns">
             {myData.arrayOfProducts.map(
                    (item) => (
                        <div className="card shadow p-3 mb-5 bg-white rounded" onClick = {(e) => this.viewDetails(item)}>
                            <img src={item.imgUrl} alt={item.name} height="100" width="100"/>
                            <div className="card-body">
                                <div>{item.name}</div>
                                <div>Price: {item.price}</div>
                            </div>
                        </div>
                    )
                  )} 
          </div>
        </div>
       )
    }

     viewDetails(item) {
       this.props.dispatch(getData(item));
       this.props.history.push('/details');
    }
 }

 const mapStateToProps = state => {
    return {
      data: state.getDataInfo.data,
      error: state.getDataInfo.error
    };
  };
  
  export default connect(mapStateToProps)(Products);
  