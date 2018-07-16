import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import {Route} from 'react-router-dom';

class Checkout extends Component {
  state = {
    ingredients: null,
    totalPrice: 0
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;
    for(let param of query.entries()) {
      //['salad', '1']
      if(param[0] === 'price') {
        price = param[1];
      } else {
        ingredients[param[0]] = +param[1]
      }
    }
    //console.log(ingredients);
    this.setState({ingredients: ingredients, totalPrice: price});
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
          ingredients={this.state.ingredients}/>
        <Route
          path={this.props.match.path + '/contact-data'}
          render={() => <ContactData
            price={this.state.totalPrice}
            ingredients={this.state.ingredients}/>}/>
      </div>
    );
  }
}

export default Checkout;