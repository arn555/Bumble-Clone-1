import React from 'react';
import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from '../../styling/AllStyles'
import SplashScreen from '../../screens/LandingPage/SplashScreen';
import SplashScreen2 from '../../screens/LandingPage/SplashScreen2';
import IntroVideoScreen from '../../screens/LandingPage/IntroVideoScreen';
import IntroVideoScreen2 from '../../screens/LandingPage/IntroVideoScreen2';
import LandingPage from '../../screens/LandingPage/LandingPage';
import LandingPage2 from '../../screens/LandingPage/LandingPage2';
import QuestionScreen1 from '../../screens/GirlProfile1/QuestionScreen1/QuestionScreen1';
import QuestionScreen1A from '../../screens/GirlProfile1/QuestionScreen1/QuestionScreen1A';
import QuestionScreen1B from '../../screens/GirlProfile1/QuestionScreen1/QuestionScreen1B';
import ResponseScreen1J from '../../screens/GirlProfile1/ResponseScreen2/ResponseScreen1J';
import ResponseScreen2K from '../../screens/GirlProfile1/ResponseScreen2/ResponseScreen2K';
import ResponseScreen3L from '../../screens/GirlProfile1/ResponseScreen2/ResponseScreen3L';
import ResponseScreen4M from '../../screens/GirlProfile1/ResponseScreen2/ResponseScreen4M';
import ResponseScreen1E from '../../screens/GirlProfile1/ResponseScreen1/ResponseScreen1E';
import ResponseScreen2F from '../../screens/GirlProfile1/ResponseScreen1/ResponseScreen2F';
import ResponseScreen3G from '../../screens/GirlProfile1/ResponseScreen1/ResponseScreen3G';
import ResponseScreen4H from '../../screens/GirlProfile1/ResponseScreen1/ResponseScreen4H';
import ResponseScreen1A from '../../screens/GirlProfile1/ResponseScreen1/ResponseScreen1A';
import ResponseScreen2B from '../../screens/GirlProfile1/ResponseScreen1/ResponseScreen2B';
import ResponseScreen3C from '../../screens/GirlProfile1/ResponseScreen1/ResponseScreen3C';
import ResponseScreen4D from '../../screens/GirlProfile1/ResponseScreen1/ResponseScreen4D';
import QuestionScreen20E from '../../screens/GirlProfile1/QuestionScreen20/QuestionScreen20E';
import QuestionScreen20F from '../../screens/GirlProfile1/QuestionScreen20/QuestionScreen20F';
import ResponseScreen20E from '../../screens/GirlProfile1/ResponseScreen20/ResponseScreen20E';
import ResponseScreen20F from '../../screens/GirlProfile1/ResponseScreen20/ResponseScreen20F';
import QuestionScreen20 from '../../screens/GirlProfile1/QuestionScreen20/QuestionScreen20';
import ResponseScreen20A from '../../screens/GirlProfile1/ResponseScreen20/ResponseScreen20A';
import Passed1A from '../../screens/GirlProfile1/Endpoint/Passed1A';
import Passed1B from '../../screens/GirlProfile1/Endpoint/Passed1B';
import Failed1A from '../../screens/GirlProfile1/Endpoint/Failed1A';
import Failed1B from '../../screens/GirlProfile1/Endpoint/Failed1B';
import Passed1 from '../../screens/GirlProfile1/Endpoint/Passed1';
import Failed1 from '../../screens/GirlProfile1/Endpoint/Failed1';


const Stack = createNativeStackNavigator();

const MainNavigation2 = () => {

    // Main Navigation - SplashScreen, IntroVideoScreen, LandingPage
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
      {/* Note: initialRouteName="" it will be first shown in the screen */}

      {/* -------------- SCREENS ------------------ */}
        
        {/* SplashScreen */}
        <Stack.Screen name="SplashScreen2" component={SplashScreen2} 
        options={{headerShown: false}} />
        {/* IntroVideoScreen */}
        <Stack.Screen name="IntroVideoScreen2" component={IntroVideoScreen2} 
        options={{headerShown: false}} />
        {/* LandingPage */}
        <Stack.Screen name="LandingPage2" component={LandingPage2} 
        options={{headerShown: false}} />

        {/* -------------- GirlProfile1 -------------- */}
        
        {/* QuestionScreen1 */}
        {/* name = "" is used to call to navigate a screen. */}
        <Stack.Screen name="QuestionScreen1A" component={QuestionScreen1A}
        options={{ headerTitle: () => (
        <Image style={{
          marginLeft:62, 
          width: 160, 
          height: 35
        }} 
        source={require('../../assets/images/bumble-logo-2.png')} />
        ),
        headerStyle: {
          backgroundColor: '#fff',
        },
        }} />

        <Stack.Screen name="QuestionScreen1B" component={QuestionScreen1B}
        options={{ headerTitle: () => (
        <Image style={{
          marginLeft:62, 
          width: 160, 
          height: 35
        }} 
        source={require('../../assets/images/bumble-logo-2.png')} />
        ),
        headerStyle: {
          backgroundColor: '#fff',
        },
        }} />

        <Stack.Screen name="ResponseScreen1J" component={ResponseScreen1J} 
        options={{ headerTitle: () => (
        <Image style={{
          marginLeft:62, 
          width: 160, 
          height: 35
        }} 
        source={require('../../assets/images/bumble-logo-2.png')} />
        ), headerStyle: {
          backgroundColor: '#fff',
        },
        }} />

        <Stack.Screen name="ResponseScreen2K" component={ResponseScreen2K} 
        options={{ headerTitle: () => (
        <Image style={{
          marginLeft:62, 
          width: 160, 
          height: 35
        }} 
        source={require('../../assets/images/bumble-logo-2.png')} />
        ), headerStyle: {
          backgroundColor: '#fff',
        },
        }} />

        <Stack.Screen name="ResponseScreen3L" component={ResponseScreen3L} 
        options={{ headerTitle: () => (
        <Image style={{
          marginLeft:62, 
          width: 160, 
          height: 35
        }} 
        source={require('../../assets/images/bumble-logo-2.png')} />
        ), headerStyle: {
          backgroundColor: '#fff',
        },
        }} />

        <Stack.Screen name="ResponseScreen4M" component={ResponseScreen4M} 
        options={{ headerTitle: () => (
        <Image style={{
          marginLeft:62, 
          width: 160, 
          height: 35
        }} 
        source={require('../../assets/images/bumble-logo-2.png')} />
        ), headerStyle: {
          backgroundColor: '#fff',
        },
        }} />

        {/* ResponseScreen1A */}
        <Stack.Screen name="ResponseScreen1E" component={ResponseScreen1E} 
        options={{ headerTitle: () => (
        <Image style={{
          marginLeft:62, 
          width: 160, 
          height: 35
        }} 
        source={require('../../assets/images/bumble-logo-2.png')} />
        ), headerStyle: {
          backgroundColor: '#fff',
        },
        }} />

        {/* ResponseScreen2B */}
        <Stack.Screen name="ResponseScreen2F" component={ResponseScreen2F} 
        options={{ headerTitle: () => (
        <Image style={{
          marginLeft:62, 
          width: 160, 
          height: 35
        }} 
        source={require('../../assets/images/bumble-logo-2.png')} />
        ), headerStyle: {
          backgroundColor: '#fff',
        },
        }} />

        {/* ResponseScreen3C */}
        <Stack.Screen name="ResponseScreen3G" component={ResponseScreen3G} 
        options={{ headerTitle: () => (
        <Image style={{
          marginLeft:62, 
          width: 160, 
          height: 35
        }} 
        source={require('../../assets/images/bumble-logo-2.png')} />
        ), headerStyle: {
          backgroundColor: '#fff',
        },
        }} />

        {/* ResponseScreen4D */}
        <Stack.Screen name="ResponseScreen4H" component={ResponseScreen4H} 
        options={{ headerTitle: () => (
        <Image style={{
          marginLeft:62, 
          width: 160, 
          height: 35
        }} 
        source={require('../../assets/images/bumble-logo-2.png')} />
        ), headerStyle: {
          backgroundColor: '#fff',
        },
        }} />

        {/* QuestionScreen20 */}
        <Stack.Screen name="QuestionScreen20E" component={QuestionScreen20E} 
        options={{ headerTitle: () => (
        <Image style={{
          marginLeft:62, 
          width: 160, 
          height: 35
        }} 
        source={require('../../assets/images/bumble-logo-2.png')} />
        ), headerStyle: {
          backgroundColor: '#fff',
        },
        }} />

 
        <Stack.Screen name="QuestionScreen20F" component={QuestionScreen20F} 
        options={{ headerTitle: () => (
        <Image style={{
          marginLeft:62, 
          width: 160, 
          height: 35
        }} 
        source={require('../../assets/images/bumble-logo-2.png')} />
        ), headerStyle: {
          backgroundColor: '#fff',
        },
        }} />

        {/* ResponseScreen20A */}
        <Stack.Screen name="ResponseScreen20E" component={ResponseScreen20E} 
        options={{ headerTitle: () => (
        <Image style={{
          marginLeft:62, 
          width: 160, 
          height: 35
        }} 
        source={require('../../assets/images/bumble-logo-2.png')} />
        ), headerStyle: {
          backgroundColor: '#fff',
        },
        }} />
        
        <Stack.Screen name="ResponseScreen20F" component={ResponseScreen20F} 
        options={{ headerTitle: () => (
        <Image style={{
          marginLeft:62, 
          width: 160, 
          height: 35
        }} 
        source={require('../../assets/images/bumble-logo-2.png')} />
        ), headerStyle: {
          backgroundColor: '#fff',
        },
        }} />

        {/* Passed1 */}
        <Stack.Screen name="Passed1A" component={Passed1A} 
        options={{ headerTitle: () => (
        <Image style={{
          marginLeft:62, 
          width: 160, 
          height: 35
        }} 
        source={require('../../assets/images/bumble-logo-2.png')} />
        ), headerStyle: {
          backgroundColor: '#fff',
        },
        }} />

        <Stack.Screen name="Passed1B" component={Passed1B} 
        options={{ headerTitle: () => (
        <Image style={{
          marginLeft:62, 
          width: 160, 
          height: 35
        }} 
        source={require('../../assets/images/bumble-logo-2.png')} />
        ), headerStyle: {
          backgroundColor: '#fff',
        },
        }} />

        {/* Failed1 */}
        <Stack.Screen name="Failed1A" component={Failed1A} 
        options={{ headerTitle: () => (
        <Image style={{
          marginLeft:62, 
          width: 160, 
          height: 35
        }} 
        source={require('../../assets/images/bumble-logo-2.png')} />
        ), headerStyle: {
          backgroundColor: '#fff',
        },
        }} />

        <Stack.Screen name="Failed1B" component={Failed1B} 
        options={{ headerTitle: () => (
        <Image style={{
          marginLeft:62, 
          width: 160, 
          height: 35
        }} 
        source={require('../../assets/images/bumble-logo-2.png')} />
        ), headerStyle: {
          backgroundColor: '#fff',
        },
        }} />

       

      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default MainNavigation2;