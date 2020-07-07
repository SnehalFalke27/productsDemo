import React from 'react';
import { connect } from "react-redux";

class Details extends React.Component {
    constructor(props){
        console.log("localStorage.getItem",localStorage.getItem("credit"));
        super(props);
        console.log( localStorage.getItem("credit"));
        this.state = {
            productData: this.props.data,
            credit: localStorage.getItem("credit"),
            warningMsg:"",
            successMsg:""
        }
        this.buyProduct = this.buyProduct.bind(this);
    }
    
    render() {
        console.log("this.props", this.state.productData);
       return (
          <div className="detailsContainer">
              <div className="warningMsg">{this.state.warningMsg}</div>
              <div className="successMsg">{this.state.successMsg}</div>
              <div className="creditMsg">Available credit balance: {this.state.credit}</div>
             <h3>{this.state.productData.name}</h3>
             <img src={this.state.productData.imgUrl} alt={this.state.productData.name} height="200" width="200"/>
            <div className="price">
                <div>Price: {this.state.productData.price} </div>
            <div>
                <button type="button" class="btn btn-success" onClick={this.buyProduct}>Buy</button>
            </div>
            </div>
          </div>
       )
    }

    buyProduct(e) {
        console.log("state ereee", this.state);
        if(this.state.productData.price > this.state.credit) {
            this.setState({warningMsg:'Your credit balance is low to buy this product'});
        } else {
            let remaininCredit = this.state.credit - this.state.productData.price;
            this.setState({credit:remaininCredit});
            localStorage.setItem("credit", remaininCredit);
            this.setState({successMsg:'Order placed successfully'});
        }
    }
 }
// export default Details;
 const mapStateToProps = state => {
     console.log("state hereee", state);
    return {
      data: state.getDataInfo.data,
      error: state.getDataInfo.error
    };
  };
  
  export default connect(mapStateToProps)(Details);
  