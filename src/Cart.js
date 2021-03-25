import React,{Component} from "react";
import {Link} from 'react-router-dom';

class Cart extends Component{
    render(){
        return(
            <div className="Cart">
                <div className="top">
                    <h3>React-Redux Store</h3>
                    <p>Welcome to the React Store</p>
                </div>
                <div className="bottom">
                    <table>
                        <tr>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th><Link to="/">Back to Store</Link></th>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

export default Cart;
