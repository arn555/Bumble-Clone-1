import { StyleSheet} from 'react-native';

export const stylesAndroid = StyleSheet.create({
    
    // App.js / Flex to all 
    flexContainer: {
      flex: 1,
    },

    // ---------------- LandingPage ---------------

    // SplashScreen
    splashContainer: {
        flex:1,
        backgroundColor: '#0083CC',
        alignItems: 'center',
        justifyContent: 'center',
      },
    splashLogo: {
        marginTop: 25, 
        width: 300, 
        height: '10%'
    },

    // IntroVideoScreen
    backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    },

    // LandingPageScreen
      LPContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'cover',
        height: '100%',
        maxWidth: '100%',
      },
      LPImgLogo: {
        marginTop: 110, 
        width: 240, 
        height: '21%'
      },
      LPborder4: {
        marginLeft: 80,
        marginRight: 80,
        marginTop: 315,
        borderColor: 'white',
        borderWidth:1.7,
        borderRadius: 2
      },
      LPborder3: {
        borderColor: '#89CFF0',
        borderWidth:2.2,
        borderRadius: 2
      },
      LPborder2: {
        borderColor: 'white',
        borderWidth:2.4,
        borderRadius: 2
      },
      LPborder1: {
        borderColor: '#89CFF0',
        borderRadius: 2,
        borderWidth: 2.2,
        paddingTop: 15,
        paddingBottom:15,
      },
      LPmessageBox1: {
        paddingLeft: 8,
        paddingRight: 8,
      },  
      LPText1: {
        color: 'white',
        fontSize: 15,
        fontWeight: '400',
        textAlign: 'center'
      },
      LPButton: {
        flex:1, 
        alignContent: 'center', 
        justifyContent: 'center', 
        flexDirection: 'column',
      },
      LPButtonContainer: {
        marginBottom: 35,
      },
      LPButtonStyles: {
        alignContent: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#12B9F6', 
        paddingTop: 12,
        paddingLeft: 27,
        paddingRight: 27,
        paddingBottom: 12,
        borderRadius: 50
      },
      LPButtonText: {
        textAlign: 'center', 
        color: 'white', 
        fontSize: 15.7,
        fontWeight: '400'
      },


      // ------------ GirlProfile1 ---------------

    // Navigation ----> QuestionScreen1
    headerQuestionScreen1: {
      marginLeft:40, 
      width: 190, 
      height: 48,
    },

    // Navigation ----> ResponseScreen1/ Reusable components
    headerResponseScreen1: {
      marginLeft:43, 
      width: 190, 
      height: 48,
    },

    // Screens ---> QuestionScreen1 Section

    // Page number
    PageContainer: {
        marginTop: 20,
        marginRight: 10,
        flexDirection: 'column',
        alignItems: 'flex-end'
      },
    PageText: {
        fontSize: 17,
        color: 'gray',
        fontWeight: '400'
      },

    // Background Linear Gradient - white inside the Image Background
    whiteBackground: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom:0,
      height: 340,
    },
    
    // Container Box inside the questions - blue & white
    questionBorder3: {
      marginLeft: 20,
      marginRight: 20,
      marginTop: 40,
      borderColor: '#89CFF0',
      borderWidth:2.2,
    },
    questionBorder2: {
      borderColor: 'white',
      borderWidth:2.4,
    },
    questionBorder1: {
      borderColor: '#89CFF0',
      borderWidth: 2.2,
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 9,
      backgroundColor: 'white',
      paddingBottom: 10
    },
    questionText: {
      color: '#89CFF0',
      fontSize: 18,
      fontWeight: '700',
      textAlign: 'center'
    },
    choicesContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonChoices: {
      backgroundColor: '#89CFF0',
      borderRadius: 4,
      justifyContent: 'center',
      alignItems: 'center',
      width: 300,
      height: 40,
      margin: 6
    },
    textChoices: {
      color: 'white',
      fontSize: 17,
      fontWeight: '600',
    },

    // Screens ---> ResponseScreen1 Section / Reusable components
    responseBorder3: {
      marginLeft: 70,
      marginRight: 70,
      marginTop: 180,
      borderColor: '#89CFF0',
      borderWidth:2.2,
    },
    responseBorder2: {
      borderColor: 'white',
      borderWidth:2.4,
    },
    responseBorder1: {
      borderColor: '#89CFF0',
      borderWidth: 2.2,
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 13,
      backgroundColor: 'white',
      paddingBottom: 14
    },
    responseText: {
      color: '#89CFF0',
      fontSize: 18,
      fontWeight: '700',
      textAlign: 'center'
    },
    responseButton: {
      alignItems:'center', 
      justifyContent:'center'
    },
    reponseButtonContainer: {
      marginBottom: 38
    },
    responseButtonText: {
      color: '#89CFF0', 
      fontSize: 18.7, 
      fontWeight: '400'
    },

    // Screens ---> Passed1/Failed1 Section
    passedContainer: {
      flex: 1, 
      backgroundColor: 'white'
    },
    propicContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      paddingTop: 60,
      marginBottom: 58,
    },
    propicBorder: {
      borderColor: '#FF2400',
      borderWidth: 2.5,
      width: 155,
      height: 155, 
      borderRadius: 200 / 2,
    },
    propic: {
      width: 150, 
      height: 150, 
      borderRadius: 200 / 2, 
      borderColor: 'white',
      borderWidth: 2.5,
    },
    nameContainer: {
      flex:1, 
      justifyContent: 'center', 
      alignItems: 'center'
    },
    textName: {
      fontSize: 40,
      color: '#FF2400',
      fontWeight: 'bold',
    },
    textAddress:{
      fontSize:19.5, 
      color: '#FF2400'
    },
    passedBorder3: {
      marginLeft: 80,
      marginRight: 80,
      marginTop: 46,
      borderColor: '#89CFF0',
      borderWidth:2.2,
      marginBottom:25,
    },
    passedBorder2: {
      borderColor: 'white',
      borderWidth:2.4,
    },
    passedBorder1: {
      borderColor: '#89CFF0',
      paddingTop: 15,
      borderWidth: 2.2,
      backgroundColor: 'white',
      paddingBottom: 15
    },
    passedResultContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    resultContainer1: {
      paddingLeft: 25,
      paddingRight: 25,
      marginBottom: 10,
    },  
    resultText1: {
      color: '#89CFF0',
      fontSize: 18.5,
      fontWeight: '800',
      textAlign: 'center'
    },
    resultContainer2: {
      paddingLeft: 25,
      paddingRight: 25,
    },
    resultText2: {
      color: '#89CFF0',
      fontSize: 18.5,
      fontWeight: '800',
      textAlign: 'center'
    },


    // Failed1/Passed1 Screen - Button "TRY AGAIN" (Disabled)
    passedButton: {
      flex:1, 
      alignContent: 'center', 
      justifyContent: 'center', 
      flexDirection: 'column',
      marginBottom: 40,
    },
    passedButtonBorder4: {
      borderColor: '#89CFF0', 
      borderWidth: 2.2,
      marginLeft: 120,
      marginRight: 120,
      marginBottom: 55
    },
    passedButtonBorder3: {
      borderColor: '#89CFF0', 
      borderWidth: 2.2,
      marginLeft: 80,
      marginRight: 80,
    },
    passedButtonBorder2: {
      borderColor: 'white', 
      borderWidth: 2.4
    },
    passedButtonBorder1: {
      alignContent: 'center', 
      justifyContent: 'center', 
      backgroundColor: '#89CFF0', 
      maxWidth: '100%',
      height: 50
    },
    passedButtonText: {
      textAlign: 'center', 
      color: 'white', 
      fontSize: 14.5,
      fontWeight: '400'
    },

    // ----------------- SCREENS ( FAILED1) ------------------
    //  --- > MODAL (TRY AGAIN / CHECK OUT THE SITE BUTTON) 

    // CHECK OUT THE SITE BUTTON
    modalLinkOptions: {
      alignContent: 'center', 
      justifyContent: 'center', 
      flexDirection: 'column',
      marginTop: 31,
    },
    modalBorder3: {
      borderColor: '#89CFF0', 
      borderWidth: 2.2,
      marginLeft: 45,
      marginRight: 45,
    },
    modalBorder2: {
      borderColor: 'white', 
      borderWidth: 2.4
    },
    modalBorder1: {
      alignContent: 'center', 
      justifyContent: 'center', 
      backgroundColor: '#89CFF0', 
      maxWidth: '100%',
      height: 45
    },
    modalText: {
      textAlign: 'center', 
      color: 'white', 
      fontSize: 14.5,
      fontWeight: '500'
    },

    //   TRY AGAIN BUTTON
    modalLinkOptions2: { 
      alignContent: 'center', 
      justifyContent: 'center', 
      flexDirection: 'column',
      marginTop: 15,
    },
    modalBorder6: {
      borderColor: '#89CFF0', 
      borderWidth: 2.2,
      marginLeft: 45,
      marginRight: 45,
    },
    modalBorder5: {
      borderColor: 'white', 
      borderWidth: 2.4
    },
    modalBorder4: {
      alignContent: 'center', 
      justifyContent: 'center', 
      backgroundColor: '#89CFF0', 
      maxWidth: '100%',
      height: 45
    },
    modalText2: {
      textAlign: 'center', 
      color: 'white', 
      fontSize: 14.5,
      fontWeight: '500'
    },
    modalBlackOpacity: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.7)',
      justifyContent: 'center',
      alignItems: 'center'
    },
    modalWhiteContainer: {
      width: '95%',
      height: '22%',
      backgroundColor: '#fff',
      borderRadius: 12
    }


});

 const stylesIOS = StyleSheet.create({ 
    
 });

export default styles = Platform.OS === 'ios' ? stylesIOS : stylesAndroid;