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
const API_REPORT_CRIME = PROTOCOL+HOST+'/emeergency-lk/api/report-crime.php'
const API_REPORT_MISSING_PERSON= PROTOCOL+HOST+'/emeergency-lk/api/report-miss-persons.php'

//Exporting All API Links to Use
export default
{
    API_REGISTER:API_REGISTER,
    API_LOGIN:API_LOGIN,
    API_USER_DETAILS:API_USER_DETAILS,
    API_REPORT_CRIME:API_REPORT_CRIME,
    API_REPORT_MISSING_PERSON:API_REPORT_MISSING_PERSON,
}
    
 