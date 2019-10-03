/** 
 * EmergencyLK 
 * Routing Screens of Application
 */

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
//All routing pages importing
import SplashScreen from "../screens/SplashScreen/SplashScreen";

//Creating Stack Navigator for All Routes in Application
const AppNavigator = createStackNavigator({
    SplashScreen: {
      screen:SplashScreen,
      navigationOptions: {  // Extra Navigation Options
        header: null,  
        gesturesEnabled: false 
      },   
    },
  
  });
  
  //Make App Navigator to creating app container
  const AppContainer = createAppContainer(AppNavigator);

  //exporting App Conrainer with all routing pages
  export default AppContainer;
  
  