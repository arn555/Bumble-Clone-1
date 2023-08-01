import React from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Linking, Image } from 'react-native';
import styles from '../../styling/AllStyles'

function LandingPage({navigation}) {
  
    return (    
    // 1stChoice LandingPage Image Background
    <ImageBackground style={styles.LPContainer} source={require('../../assets/images/LandingPageImage.png')} >

    {/* 1stChoiceLogo - if clicked it will route to the 1stchoice website */}
    <TouchableOpacity 
    onPress={() => Linking.openURL('https://1stchoicedating.com/')} >
        <Image
          style={styles.LPImgLogo}
          source={require('../../assets/images/logo.png')}
        />
    </TouchableOpacity>
      
      {/* Border Color: Blue, White, Blue and TextBox with Text - Intro Message */}
      <View style={styles.LPborder4}>
            <View style={styles.LPborder3}>
                <View style={styles.LPborder2}>
                  <View style={styles.LPborder1}>
    
                  <View style={styles.LPmessageBox1}>
                  <Text style={styles.LPText1} > When you're comfortable enought with the Sim, you can send express mail and really get the conversation started! </Text>
                  </View>
                  

                  </View>
              </View>
            </View>
      </View>
    
      {/* LandingPage - Blue button and if clicked it will route to the girl profile */}
      <TouchableOpacity style={styles.LPButton} onPress={() => navigation.navigate('QuestionScreen1')} >

              <View style={styles.LPButtonContainer}>
                    <View style={styles.LPButtonStyles}>
                        <Text style={styles.LPButtonText}>
                            START THE CONVERSATION
                        </Text>
                    </View>
              </View>

        </TouchableOpacity>

    </ImageBackground>

  );
}

export default LandingPage;
