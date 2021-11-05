import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import NavBar from './components/navbar';
import Home from './components/Home';
import CustomerHome from './components/customer/customerHome';
import ProductHome from './components/product/productHome';
import StoreHome from './components/store/storeHome';
import SaleHome from './components/sale/saleHome';
import NotFound from './components/notFound';



class App extends Component {
    render() { 
        return (
            <div>
                <NavBar/>
                <div className="content">
                    <Switch>
                        <Route path="/customers" component={CustomerHome}/>
                        <Route path="/products" component={ProductHome}/>
                        <Route path="/stores" component={StoreHome}/>
                        <Route path="/sales" component={SaleHome}/>
                        <Route path="/not-found" component={NotFound}/>
                        <Route exact path="/" component={Home}/>
                        <Redirect to="/not-found"/>
                    </Switch>
                </div>
            </div>
       );
    }
}

export default App;