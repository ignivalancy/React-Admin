/*
 * @file: App.js
 * @description: Loaded data after rehydrated true
 * @date: 17.07.2017
 * @author: Jasdeep Singh
 * */
 

import React, {Component} from 'react';  
import Routers from './Routers'; 
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import configureStore from './configureStore';
import createHistory from 'history/createBrowserHistory';

 const history = createHistory();

/************ store configration *********/
const store = configureStore();

class App extends Component {  

  constructor() {
    super()
    this.state = { rehydrated: false }
  }

  componentWillMount(){
    store.subscribe(() => {
      
      if(!this.state.rehydrated){
        
        this.setState({ rehydrated: true });
      }
    });  
  }

  render() {
    return (
      <Provider store={store}> 
  	    <Router history={history}>  
  	       {  !this.state.rehydrated && history.location.pathname !=='/' ? "" : <Routers store={store} /> }
  	    </Router>
	   </Provider>
    );
  }
}


export default App;
