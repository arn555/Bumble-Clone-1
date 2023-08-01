import { useEffect, React } from 'react';
import { View, Image } from 'react-native';
import styles from '../../styling/AllStyles'


function SplashScreen2({navigation}) {

 // After 2 seconds it will automatically route to the IntroVideoScreen
  useEffect(() => {

    setTimeout(() => {
      navigation.navigate('IntroVideoScreen2')
    }, 4000)

  },[]);
  
  return (

    // Splash Screen Background color yellow with 1stchoice Logo
    <View style={{
      flex:1,
      backgroundColor: '#FFCB37',
      alignItems: 'center',
      justifyContent: 'center',
      }}>

       <Image
          style={{ 
            width: 230, 
            height: 130
          }}
          source={require('../../assets/images/bumble-logo.png')}
        />

    </View>

  );
}

export default SplashScreen2;

  