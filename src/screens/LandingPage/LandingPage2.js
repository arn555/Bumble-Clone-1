import React from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Linking, Image } from 'react-native';
import styles from '../../styling/AllStyles'

function LandingPage2({navigation}) {
  
    return (    
    // 1stChoice LandingPage Image Background
    <ImageBackground style={styles.LPContainer} source={require('../../assets/images/home-screen.png')} >

    {/* 1stChoiceLogo - if clicked it will route to the 1stchoice website */}
    <TouchableOpacity 
    onPress={() => Linking.openURL('https://bumble.com/')} >
        <Image
          style={{
            position: 'relative',
            top:180,
            width: 260,
            height: 150,
          }}
          source={require('../../assets/images/bumble-logo.png')}
        />
    </TouchableOpacity>
    
      {/* LandingPage - Blue button and if clicked it will route to the girl profile */}
      <TouchableOpacity style={styles.LPButton} onPress={() => navigation.navigate('QuestionScreen1A')} >

              <View style={{marginTop: 200 }}>
                    <View style={{
                      alignContent: 'center', 
                      justifyContent: 'center', 
                      backgroundColor: '#12B9F6', 
                      paddingTop: 12,
                      paddingLeft: 27,
                      paddingRight: 27,
                      paddingBottom: 12,
                      borderRadius: 50
                    }}>
                        <Text style={{
                          textAlign: 'center', 
                          color: 'white', 
                          fontSize: 15.7,
                          fontWeight: '400'
                        }}>
                            START THE CONVERSATION
                        </Text>
                    </View>
              </View>

        </TouchableOpacity>

    </ImageBackground>

  );
}

export default LandingPage2;
