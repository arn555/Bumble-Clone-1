import { Text, View, ImageBackground, FlatList, TouchableOpacity} from 'react-native'
import {React, useState} from 'react'
import styles from '../../../styling/AllStyles'
import LinearGradient from 'react-native-linear-gradient';

// Sample data only for display -Testing purposes only
let surveyGirlOne = [
  { id: 0, 
    questions2: 'What qualities is most attractive to you in a partner?',
    a1: 'Commitment and never give up',
    a2: 'Just buy her stuff',
    a3: 'Making time with her regularly',
    a4: 'Cooking with her', 
  },

];


function QuestionScreen1B({navigation}) {

  let [sGirlOne, setSGirlOne] = useState(surveyGirlOne)
  
  
  return (
    // ImageBackground of a girl
    <ImageBackground source={require('../../../assets/images/Russian.jpg')} style={styles.flexContainer}>
        
        {/* Page number - gray */}
        <View style={styles.PageContainer}>
        <Text style={{
          fontSize: 17,
          color: 'white',
          fontWeight: '400'
        }}>1/20</Text>
        </View>
        
        <LinearGradient
        // Background Linear Gradient - white inside the Image Background
        colors={[ 'transparent', 'rgba(255,255,255,1)']}
        style={styles.whiteBackground}
        end={{ x: 0.5, y: 0.5 }} > 
        
      {/* Questions inside the box with choices - color blue and white */}
      <FlatList
      numColumns={1}
      keyExtractor={(item) => (item.id)}
      data={sGirlOne}
      renderItem={({item}) => (
      
      <View style={styles.questionBorder3}>
            <View style={styles.questionBorder2}>
              <View style={styles.questionBorder1}>

                  <Text style={{
                    color: '#89CFF0',
                    fontSize: 18,
                    fontWeight: '700',
                    textAlign: 'center'
                  }}>What qualities is most attractive to you in a partner?</Text>

                  <View style={styles.choicesContainer}>

                  {/* Button that will route to ResponseScreen1A */}
                  <TouchableOpacity style={styles.buttonChoices} onPress={() => navigation.navigate('ResponseScreen1J') } >
                  <Text style={styles.textChoices}>Sense of humor</Text>
                  </TouchableOpacity>
                  {/* Button that will route to ResponseScreen2B */}
                  <TouchableOpacity style={styles.buttonChoices} onPress={() => navigation.navigate('ResponseScreen2K') } >
                  <Text style={styles.textChoices}>Maturity</Text>
                  </TouchableOpacity>
                  {/* Button that will route to ResponseScreen3C */}
                  <TouchableOpacity style={styles.buttonChoices} onPress={() => navigation.navigate('ResponseScreen3L') } >
                  <Text style={styles.textChoices}>Physical Appearance</Text>
                  </TouchableOpacity>
                  {/* Button that will route to ResponseScreen4D */}
                  <TouchableOpacity style={styles.buttonChoices} onPress={() => navigation.navigate('ResponseScreen4M') } >
                  <Text style={styles.textChoices}>Intelligent</Text>
                  </TouchableOpacity>

                  </View>
              </View>
          </View>
      </View>
         
      )} />
        
        </LinearGradient>    

    </ImageBackground>
  )
}

export default QuestionScreen1B;