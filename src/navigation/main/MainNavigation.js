import React from 'react';
import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from '../../styling/AllStyles'
import SplashScreen from '../../screens/LandingPage/SplashScreen';
import IntroVideoScreen from '../../screens/LandingPage/IntroVideoScreen';
import LandingPage from '../../screens/LandingPage/LandingPage';
import QuestionScreen1 from '../../screens/GirlProfile1/QuestionScreen1/QuestionScreen1';
import ResponseScreen1A from '../../screens/GirlProfile1/ResponseScreen1/ResponseScreen1A';
import ResponseScreen2B from '../../screens/GirlProfile1/ResponseScreen1/ResponseScreen2B';
import ResponseScreen3C from '../../screens/GirlProfile1/ResponseScreen1/ResponseScreen3C';
import ResponseScreen4D from '../../screens/GirlProfile1/ResponseScreen1/ResponseScreen4D';
import QuestionScreen20 from '../../screens/GirlProfile1/QuestionScreen20/QuestionScreen20';
import ResponseScreen20A from '../../screens/GirlProfile1/ResponseScreen20/ResponseScreen20A';
import Passed1 from '../../screens/GirlProfile1/Endpoint/Passed1';
import Failed1 from '../../screens/GirlProfile1/Endpoint/Failed1';


const Stack = createNativeStackNavigator();

const MainNavigation = () => {

    // Main Navigation - SplashScreen, IntroVideoScreen, LandingPage
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
      {/* Note: initialRouteName="" it will be first shown in the screen */}

      {/* -------------- SCREENS ------------------ */}
        
        {/* SplashScreen */}
        <Stack.Screen name="Splash" component={SplashScreen} 
        options={{headerShown: false}} />
        {/* IntroVideoScreen */}
        <Stack.Screen name="IntroVideo" component={IntroVideoScreen} 
        options={{headerShown: false}} />
        {/* LandingPage */}
        <Stack.Screen name="LandingPage" component={LandingPage} 
        options={{headerShown: false}} />

        {/* -------------- GirlProfile1 -------------- */}
        
        {/* QuestionScreen1 */}
        {/* name = "" is used to call to navigate a screen. */}
        <Stack.Screen name="QuestionScreen1" component={QuestionScreen1}
        options={{ headerTitle: () => (
        <Image style={styles.headerQuestionScreen1} 
        source={require('../../assets/images/logo.png')} />
        ),
        headerStyle: {
          backgroundColor: '#FF2400',
        },
        }} />

        {/* ResponseScreen1A */}
        <Stack.Screen name="ResponseScreen1A" component={ResponseScreen1A} 
        options={{ headerTitle: () => (
        <Image style={styles.headerResponseScreen1} 
        source={require('../../assets/images/logo.png')} />
        ), headerStyle: {
          backgroundColor: '#FF2400',
        },
        }} />

        {/* ResponseScreen2B */}
        <Stack.Screen name="ResponseScreen2B" component={ResponseScreen2B} 
        options={{ headerTitle: () => (
        <Image style={styles.headerResponseScreen1} 
        source={require('../../assets/images/logo.png')} />
        ), headerStyle: {
          backgroundColor: '#FF2400',
        },
        }} />

        {/* ResponseScreen3C */}
        <Stack.Screen name="ResponseScreen3C" component={ResponseScreen3C} 
        options={{ headerTitle: () => (
        <Image style={styles.headerResponseScreen1} 
        source={require('../../assets/images/logo.png')} />
        ), headerStyle: {
          backgroundColor: '#FF2400',
        },
        }} />

        {/* ResponseScreen4D */}
        <Stack.Screen name="ResponseScreen4D" component={ResponseScreen4D} 
        options={{ headerTitle: () => (
        <Image style={styles.headerResponseScreen1} 
        source={require('../../assets/images/logo.png')} />
        ), headerStyle: {
          backgroundColor: '#FF2400',
        },
        }} />

        {/* QuestionScreen20 */}
        <Stack.Screen name="QuestionScreen20" component={QuestionScreen20} 
        options={{ headerTitle: () => (
        <Image style={styles.headerResponseScreen1} 
        source={require('../../assets/images/logo.png')} />
        ), headerStyle: {
          backgroundColor: '#FF2400',
        },
        }} />

        {/* ResponseScreen20A */}
        <Stack.Screen name="ResponseScreen20A" component={ResponseScreen20A} 
        options={{ headerTitle: () => (
        <Image style={styles.headerResponseScreen1} 
        source={require('../../assets/images/logo.png')} />
        ), headerStyle: {
          backgroundColor: '#FF2400',
        },
        }} />

        {/* Passed1 */}
        <Stack.Screen name="Passed1" component={Passed1} 
        options={{ headerTitle: () => (
        <Image style={styles.headerResponseScreen1} 
        source={require('../../assets/images/logo.png')} />
        ), headerStyle: {
          backgroundColor: '#FF2400',
        },
        }} />

        {/* Failed1 */}
        <Stack.Screen name="Failed1" component={Failed1} 
        options={{ headerTitle: () => (
        <Image style={styles.headerResponseScreen1} 
        source={require('../../assets/images/logo.png')} />
        ), headerStyle: {
          backgroundColor: '#FF2400',
        },
        }} />

       

      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default MainNavigation;