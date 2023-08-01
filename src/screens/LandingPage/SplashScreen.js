import { useEffect, React } from 'react';
import { View, Image } from 'react-native';
import styles from '../../styling/AllStyles'


function SplashScreen({navigation}) {

 // After 2 seconds it will automatically route to the IntroVideoScreen
  useEffect(() => {

    setTimeout(() => {
      navigation.navigate('IntroVideo')
    }, 4000)

  },[]);
  
  return (

    // Splash Screen Background color blue with 1stchoice Logo
    <View style={styles.splashContainer}>

       <Image
          style={styles.splashLogo}
          source={require('../../assets/images/logo.png')}
        />

    </View>

  );
}

export default SplashScreen;

  