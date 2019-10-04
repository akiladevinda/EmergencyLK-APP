/** 
 * EmergencyLK 
 * Routing Screens of Application
 */

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { fromRight } from 'react-navigation-transitions';
//All routing pages importing
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import MainScreen from "../screens/Auth/MainScreen";
import LoginScreen from "../screens/Auth/LoginScreen";
import RegisterScreen from "../screens/Auth/RegisterScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import ReportCrime from "../screens/ReportCrime/ReportCrime";
import EarthquakeAlerts from "../screens/AlertScreens/EarthquakeAlerts";
import FloodAlerts from "../screens/AlertScreens/FloodAlerts";
import TsunamiAlerts from "../screens/AlertScreens/TsunamiAlerts";
import MedicalHelp from "../screens/MedicalHelp/MedicalHelp";
import MissingPerson from "../screens/MissingPerson/MissingPerson";
import MyProfile from "../screens/MyProfile/MyProfile";

//Creating Stack Navigator for All Routes in Application
const AppNavigator = createStackNavigator({
  //   SplashScreen: {
  //     screen:SplashScreen,
  //     navigationOptions: { 
  //       header: null,  
  //       gesturesEnabled: false 
  //     },   
  //   },
  //   MainScreen: {
  //       screen:MainScreen,
  //       navigationOptions: { 
  //         header: null,  
  //         gesturesEnabled: false 
  //       },   
  //     },
  //   LoginScreen: {
  //       screen:LoginScreen,
  //       navigationOptions: { 
  //         header: null,  
  //         gesturesEnabled: false 
  //       },   
  //     },
  //   RegisterScreen: {
  //       screen:RegisterScreen,
  //       navigationOptions: { 
  //         header: null,  
  //         gesturesEnabled: false 
  //       },   
  //     },
    HomeScreen: {
        screen:HomeScreen,
        navigationOptions: { 
          header: null,  
          gesturesEnabled: false 
        },   
      },
    ReportCrime: {
          screen:ReportCrime,
          navigationOptions: { 
            header: null,  
            gesturesEnabled: false 
          },   
      },
    EarthquakeAlerts: {
          screen:EarthquakeAlerts,
          navigationOptions: { 
            header: null,  
            gesturesEnabled: false 
          },   
      },
    FloodAlerts: {
          screen:FloodAlerts,
          navigationOptions: { 
            header: null,  
            gesturesEnabled: false 
          },   
    },
    TsunamiAlerts: {
          screen:TsunamiAlerts,
          navigationOptions: { 
            header: null,  
            gesturesEnabled: false 
          },   
      },
    MedicalHelp: {
          screen:MedicalHelp,
          navigationOptions: { 
            header: null,  
            gesturesEnabled: false 
          },   
      },
    MissingPerson: {
          screen:MissingPerson,
          navigationOptions: { 
            header: null,  
            gesturesEnabled: false 
          },   
    },
    MyProfile: {
          screen:MyProfile,
          navigationOptions: { 
            header: null,  
            gesturesEnabled: false 
          },   
      },
}, {
    transitionConfig: () => fromRight(),
});
    
  //Make App Navigator to creating app container
  const AppContainer = createAppContainer(AppNavigator);

  //exporting App Conrainer with all routing pages
  export default AppContainer;
  
  