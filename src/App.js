import Store from './Store';
import Cart from './Cart';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App(){
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={Store} />
                <Route path="/Cart" component={Cart} />
            </Switch>
        </Router>
    );
}

export default App;
