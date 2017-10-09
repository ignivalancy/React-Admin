/*
 * @file: index.js
 * @description: Reducers here
 * @date: 10.07.2017
 * @author: Jasdeep Singh
 * */

import { combineReducers } from 'redux'
import user 	from './modules/user';


/*********** Combine reducers **********/

const AdminApp = combineReducers({
  	user
  
})

export default AdminApp