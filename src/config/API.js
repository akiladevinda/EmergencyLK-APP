/**
 * EmergencyLK 
 * Global API URL's
 */

//Protocol and Host Links
const PROTOCOL = 'http://';
const HOST = '10.0.2.2';
//API LINKS
const API_REGISTER = PROTOCOL+HOST+'/emeergency-lk/api/user-register.php'
const API_LOGIN = PROTOCOL+HOST+'/emeergency-lk/api/user-login.php'
const API_USER_DETAILS = PROTOCOL+HOST+'/emeergency-lk/api/get-user-details.php'

//Exporting All API Links to Use
export default
{
    API_REGISTER:API_REGISTER,
    API_LOGIN:API_LOGIN,
    API_USER_DETAILS:API_USER_DETAILS,
}
    
 