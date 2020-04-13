import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';


import classes from './ContactData.css';



class ContactData extends Component{
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading:false
  }

  orderHandler = (event) => {
    event.preventDefault();
    console.log(this.props.ingredients);

    this.setState({loading:true});
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Matt Kam',
        address: {
          street:'18400 Von Karman Ave',
          zipCode: '92626',
          country: 'USA'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
      //this is just for show. Normally, you'd adjust the price in the backend to avoid users from changing prices.
    }
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({loading:false});
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({loading:false});
      });
  }

  render(){
    let form = (
      <form>
        <input className={classes.Input} type="text" name="" placeholder="Your Name" />
        <input className={classes.Input} type="email" name="" placeholder="Your Mail" />
        <input className={classes.Input} type="text" name="" placeholder="Street" />
        <input className={classes.Input} type="text" name="" placeholder="Postal Code" />
        <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
      </form>
    )
    if (this.state.loading){
      form = <Spinner/>;
    }
    return(
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    )
  }
}

export default ContactData;