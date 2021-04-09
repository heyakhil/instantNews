import React,{useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PushNotification from "react-native-push-notification";
import SplashScreens from './Src/SplashScreens' 
import Home from './Src/Screens/Home';
import Explore from './Src/Screens/Explore';
import Setting from './Src/Screens/Setting';
import messaging from '@react-native-firebase/messaging';
const Stack = createStackNavigator();
const App = () => {

  useEffect(()=>{  
    messaging()
    .subscribeToTopic('LatestNews')
    .then(() => console.log('Subscribed to topic!'));

    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token) {
        console.log("TOKEN:", token);
      },
    
      // (required) Called when a remote is received or opened, or local notification is opened
      onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);
    
        // process the notification
        if(!notification.foreground){
          PushNotification.localNotification({
            title: notification.data.title, // (optional)
            message: notification.data.message, // (required)
            playSound: true, // (optional) default: true
            soundName: "default",
            bigPictureUrl: notification.data.pic
          })
        }
        
       
      },
    
      // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
      onAction: function (notification) {
        console.log("ACTION:", notification.action);
        console.log("NOTIFICATION:", notification);
        
        // process the action
      },
    
      // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
      onRegistrationError: function(err) {
        console.error("Erro,",err.message, err);
      },
    
      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: true,
    
      /**
       * (optional) default: true
       * - Specified if permissions (ios) and token (android and ios) will requested or not,
       * - if not, you must call PushNotificationsHandler.requestPermissions() later
       * - if you are not using remote notification or do not have Firebase installed, use this:
       *     requestPermissions: Platform.OS === 'ios'
       */
      requestPermissions: true,
    });
  },[])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen options={{headerShown:false}} name="Splash" component={SplashScreens} />
        <Stack.Screen options={{headerShown:false}} name="Home" component={Home} />
        <Stack.Screen options={{headerShown:false}} name="Explore" component={Explore} />
        <Stack.Screen options={{headerShown:false}} name="Setting" component={Setting} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
