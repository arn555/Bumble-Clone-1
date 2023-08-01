import React from 'react';
import { Image } from 'react-native';
import styles from '../../../styling/AllStyles'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QuestionScreen1 from '../../../screens/GirlProfile1/QuestionScreen1/QuestionScreen1';
import ResponseScreen1A from '../../../screens/GirlProfile1/ResponseScreen1/ResponseScreen1A';
import ResponseScreen2B from '../../../screens/GirlProfile1/ResponseScreen1/ResponseScreen2B';
import ResponseScreen3C from '../../../screens/GirlProfile1/ResponseScreen1/ResponseScreen3C';
import ResponseScreen4D from '../../../screens/GirlProfile1/ResponseScreen1/ResponseScreen4D';
import QuestionScreen20 from '../../../screens/GirlProfile1/QuestionScreen20/QuestionScreen20';
import ResponseScreen20A from '../../../screens/GirlProfile1/ResponseScreen20/ResponseScreen20A';
import Passed1 from '../../../screens/GirlProfile1/Endpoint/Passed1';
import Failed1 from '../../../screens/GirlProfile1/Endpoint/Failed1';



const Stack = createNativeStackNavigator();

function GirlProfile1() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        {/* -------------- SCREENS ---------------- */}

        {/* -------------- GirlProfile1 -------------- */}
        
        {/* QuestionScreen1 */}
        
        <Stack.Screen name="QuestionScreen1" component={QuestionScreen1}
        options={{ headerTitle: () => (
        
        <Image style={styles.headerQuestionScreen1} 
        source={require('../../../assets/images/logo.png')} />
        ), 
        headerStyle: {
          backgroundColor: '#FF2400',
        },
        }} />  

        {/* ResponseScreen1A */}
        <Stack.Screen name="ResponseScreen1A" component={ResponseScreen1A} 
        options={{ headerTitle: () => (
        // Header Image Logo
        <Image style={styles.headerResponseScreen1} 
        source={require('../../../assets/images/logo.png')} />
        ), headerStyle: {
        // Header Background Color
          backgroundColor: '#FF2400',
        },
        }} />

        {/* ResponseScreen2B */}
        <Stack.Screen name="ResponseScreen2B" component={ResponseScreen2B} 
        options={{ headerTitle: () => (
        // Header Image Logo
        <Image style={styles.headerResponseScreen1} 
        source={require('../../../assets/images/logo.png')} />
        ), headerStyle: {
        // Header Background Color
          backgroundColor: '#FF2400',
        },
        }} />

        {/* ResponseScreen3C */}
        <Stack.Screen name="ResponseScreen3C" component={ResponseScreen3C} 
        options={{ headerTitle: () => (
        // Header Image Logo
        <Image style={styles.headerResponseScreen1} 
        source={require('../../../assets/images/logo.png')} />
        ), headerStyle: {
        // Header Background Color
          backgroundColor: '#FF2400',
        },
        }} />

        {/* ResponseScreen4D */}
        <Stack.Screen name="ResponseScreen4D" component={ResponseScreen4D} 
        options={{ headerTitle: () => (
        // Header Image Logo
        <Image style={styles.headerResponseScreen1} 
        source={require('../../../assets/images/logo.png')} />
        ), headerStyle: {
        // Header Background Color
          backgroundColor: '#FF2400',
        },
        }} />

        {/* QuestionScreen20 */}
        <Stack.Screen name="QuestionScreen20" component={QuestionScreen20} 
        options={{ headerTitle: () => (
        // Header Image Logo
        <Image style={styles.headerResponseScreen1} 
        source={require('../../../assets/images/logo.png')} />
        ), headerStyle: {
        // Header Background Color
          backgroundColor: '#FF2400',
        },
        }} />

        {/* ResponseScreen20A */}
        <Stack.Screen name="ResponseScreen20A" component={ResponseScreen20A} 
        options={{ headerTitle: () => (
        // Header Image Logo
        <Image style={styles.headerResponseScreen1} 
        source={require('../../../assets/images/logo.png')} />
        ), headerStyle: {
        // Header Background Color
          backgroundColor: '#FF2400',
        },
        }} />

        {/* Passed1 */}
        <Stack.Screen name="Passed1" component={Passed1} 
        options={{ headerTitle: () => (
        // Header Image Logo
        <Image style={styles.headerResponseScreen1} 
        source={require('../../../assets/images/logo.png')} />
        ), headerStyle: {
        // Header Background Color
          backgroundColor: '#FF2400',
        },
        }} />

        {/* Failed1 */}
        <Stack.Screen name="Failed1" component={Failed1} 
        options={{ headerTitle: () => (
        // Header Image Logo
        <Image style={styles.headerResponseScreen1} 
        source={require('../../../assets/images/logo.png')} />
        ), headerStyle: {
        // Header Background Color
          backgroundColor: '#FF2400',
        },
        }} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default GirlProfile1;