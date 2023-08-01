import { Text, View, ImageBackground, FlatList, TouchableOpacity} from 'react-native'
import {React, useState} from 'react'
import styles from '../../../styling/AllStyles'
import LinearGradient from 'react-native-linear-gradient';

// Sample data only for display -Testing purposes only
let surveyGirlLast = [
    {
      id:0,
      questions2: `If you could travel anywhere, right now, where would you go?`,
      b1: 'Switzerland',
      b2: 'Maldives',
      b3: 'Japan',
      b4: 'Dubai'
    },
  ];

function QuestionScreen20F({navigation}) {

    // Sample data only for display -Testing purposes only
    let [bGirlOne, setBGirlOne] = useState(surveyGirlLast)
  
  return (
    // ImageBackground of a girl
    <ImageBackground source={require('../../../assets/images/Russian.jpg')} style={styles.flexContainer}>
        
        {/* Page number - gray */}
        <View style={styles.PageContainer}>
        <Text style={{
          fontSize: 17,
          color: 'white',
          fontWeight: '400'
        }}>20/20</Text>
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
      data={bGirlOne}
      renderItem={({item}) => (
      
      <View style={styles.questionBorder3}>
            <View style={styles.questionBorder2}>
              <View style={styles.questionBorder1}>

                  <Text style={styles.questionText}>{item.questions2}</Text>

                  <View style={styles.choicesContainer}>

                  {/* Button that will route to ResponseScreen20A */}
                  <TouchableOpacity style={styles.buttonChoices} onPress={() => navigation.navigate('ResponseScreen20F') } >
                  <Text style={styles.textChoices}>{item.b1}</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={styles.buttonChoices} >
                  <Text style={styles.textChoices}>{item.b2}</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={styles.buttonChoices} >
                  <Text style={styles.textChoices}>{item.b3}</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={styles.buttonChoices} >
                  <Text style={styles.textChoices}>{item.b4}</Text>
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

export default QuestionScreen20F;