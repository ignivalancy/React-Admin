 /*
 * @file: messages.js
 * @description: Utility Method to handle Date Object.
 * @date: 22.09.2017
 * @author: Nishant Singh
 * 
 */

import moment from 'moment'; 

const CommonMethod = {
	getTableSize:5,
	
	dateToTimestamp : function(date){
		return moment(date).unix()
	},

	timeStampToDate: function(date){
		return moment.unix(date).format("DD/MM/YYYY")
	}
}


export default CommonMethod;