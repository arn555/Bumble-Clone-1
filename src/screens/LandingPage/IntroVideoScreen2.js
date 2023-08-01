import { View } from 'react-native'
import {useRef, useEffect, React} from 'react'
import Video from 'react-native-video';
import styles from '../../styling/AllStyles'

const IntroVideoScreen2 = ({navigation}) => {

  const videoRef = useRef();

  // After 8 seconds it will automatically route to the LandingPage
  useEffect(() => {

    setTimeout(() => {
      navigation.navigate('LandingPage2')
    }, 17000)

  },[]);


  return (

    // 1stChoice Intro Video 
    <View style={styles.flexContainer}>

      <Video source={require('../../assets/videos/bumble-ad-6.mp4')}   
       ref={videoRef}
       controls={false}                                      
       onBuffer={() => {}}                
       onError={() => {}}
       resizeMode={'cover'}
       repeat={false}           
       style={styles.backgroundVideo} />

    </View>

  )
}

export default IntroVideoScreen2;

