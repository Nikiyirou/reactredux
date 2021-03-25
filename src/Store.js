import './App.css';
import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Store extends Component{
    render(){
        return(
            <div className="Store">
                <h3>React-Redux Store</h3>
                <p>Welcome to the React Store</p>
                <div>
                    <input type="text" placeholder="Search"/>
                    <br/>
                    <p>Cart:0 Total Price:$0</p>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th><Link to="/Cart">My cart</Link></th>
                        </tr>
                        <tr>
                            <td><a href="">Apple</a></td>
                            <td>Eat one everyday, may keep the doctor away</td>
                            <td>$12</td>
                            <td><button>Add to cart</button></td>
                        </tr>
                        <tr>
                            <td><a href="">Grape</a></td>
                            <td>Wine is great, but grapes is even better</td>
                            <td>$11</td>
                            <td><button>Add to cart</button></td>
                        </tr>
                        <tr>
                            <td><a href="">Pineapple</a></td>
                            <td>Enjoy but don't forget to peer first</td>
                            <td>$8</td>
                            <td><button>Add to cart</button></td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

export default Store;
