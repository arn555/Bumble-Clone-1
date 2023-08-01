import { Text, View, ImageBackground, FlatList, TouchableOpacity} from 'react-native'
import {React, useState} from 'react'
import styles from '../../../styling/AllStyles'
import LinearGradient from 'react-native-linear-gradient';

// Sample data only for display -Testing purposes only
let surveyGirlOne = [
  { id: 0, 
    questions1: 'What Does a Healthy Relationship Look Like?',
    a1: 'Trust each other',
    a2: 'Respect your boundaries',
    a3: 'Lack of trust',
    a4: 'Inability to resolve conflict', 
  },

];


function QuestionScreen1A({navigation}) {

  let [sGirlOne, setSGirlOne] = useState(surveyGirlOne)
  
  
  return (
    // ImageBackground of a girl
    <ImageBackground source={require('../../../assets/images/Korean.jpg')} style={styles.flexContainer}>
        
        {/* Page number - gray */}
        <View style={styles.PageContainer}>
        <Text style={styles.PageText}>1/20</Text>
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

                  <Text style={styles.questionText}>{item.questions1}</Text>

                  <View style={styles.choicesContainer}>

                  {/* Button that will route to ResponseScreen1A */}
                  <TouchableOpacity style={styles.buttonChoices} onPress={() => navigation.navigate('ResponseScreen1E') } >
                  <Text style={styles.textChoices}>{item.a1}</Text>
                  </TouchableOpacity>
                  {/* Button that will route to ResponseScreen2B */}
                  <TouchableOpacity style={styles.buttonChoices} onPress={() => navigation.navigate('ResponseScreen2F') } >
                  <Text style={styles.textChoices}>{item.a2}</Text>
                  </TouchableOpacity>
                  {/* Button that will route to ResponseScreen3C */}
                  <TouchableOpacity style={styles.buttonChoices} onPress={() => navigation.navigate('ResponseScreen3G') } >
                  <Text style={styles.textChoices}>{item.a3}</Text>
                  </TouchableOpacity>
                  {/* Button that will route to ResponseScreen4D */}
                  <TouchableOpacity style={styles.buttonChoices} onPress={() => navigation.navigate('ResponseScreen4H') } >
                  <Text style={styles.textChoices}>{item.a4}</Text>
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

export default QuestionScreen1A;