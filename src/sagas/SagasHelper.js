/**
 * Developed By: Bharat Jograna
 * Created on: 22 July 2022
 * Saga Helpers Functions
*/
import axios from 'axios';

/**
 * Added by BharatRJ (dt:17/07/2022)
 * Function to Call Rest API
 */
export const callRestAPI = async (APIURL = "", request = {}, headers = "") => {

	axios.defaults.headers.common = headers;
	if(headers === "PostHeaderForm"){
		delete axios.defaults.headers.common;
		axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
		//request = qs.stringify(request);
	}
	
	var responseData = await axios.get(APIURL, request)
		.then(response => JSON.parse(JSON.stringify(response)))
		.catch(error => JSON.parse(JSON.stringify(error.response)));

	var response = {};
	try {
		response = responseData.data;
	} catch (error) {
		response = responseData.status;
	}
	response.statusCode = '400';
	return response;
}
