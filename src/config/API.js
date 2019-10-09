/**
 * EmergencyLK 
 * Global API URL's
 */

//Protocol and Host Links
const PROTOCOL = 'http://';
const HOST = '10.0.2.2'; //For Android emulator we are using ip address instead of localhost name ios-> localhost
//API LINKS
const API_REGISTER = PROTOCOL+HOST+'/emeergency-lk/api/user-register.php'
const API_LOGIN = PROTOCOL+HOST+'/emeergency-lk/api/user-login.php'
const API_USER_DETAILS = PROTOCOL+HOST+'/emeergency-lk/api/get-user-details.php'
const API_REPORT_CRIME = PROTOCOL+HOST+'/emeergency-lk/api/report-crime.php'
const API_REPORT_MISSING_PERSON= PROTOCOL+HOST+'/emeergency-lk/api/report-miss-persons.php'
const API_MDEICAL_HELP = PROTOCOL+HOST+'/emeergency-lk/api/report-medical-help.php'
const API_MISSINGP_COUNT = PROTOCOL+HOST+'/emeergency-lk/api/missingp-count.php'
const API_GET_MISSING_PERSONS = PROTOCOL+HOST+'/emeergency-lk/api/get-missing-persons.php'
const API_GET_MEDHELP_COUNT = PROTOCOL+HOST+'/emeergency-lk/api/get-medhelp-count.php'
const API_GET_MEDHELP_REPORTS = PROTOCOL+HOST+'/emeergency-lk/api/get-medhelp-reports.php'

//Exporting All API Links to Use
export default
{
    API_REGISTER:API_REGISTER,
    API_LOGIN:API_LOGIN,
    API_USER_DETAILS:API_USER_DETAILS,
    API_REPORT_CRIME:API_REPORT_CRIME,
    API_REPORT_MISSING_PERSON:API_REPORT_MISSING_PERSON,
    API_MDEICAL_HELP:API_MDEICAL_HELP,
    API_MISSINGP_COUNT:API_MISSINGP_COUNT,
    API_GET_MISSING_PERSONS:API_GET_MISSING_PERSONS,
    API_GET_MEDHELP_COUNT:API_GET_MEDHELP_COUNT,
    API_GET_MEDHELP_REPORTS:API_GET_MEDHELP_REPORTS,
}
    
 