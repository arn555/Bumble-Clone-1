import {React, useState} from 'react'
import styles from '../../../styling/AllStyles'
import LinearGradient from 'react-native-linear-gradient';
import { Text, View, ImageBackground, FlatList, TouchableOpacity } from 'react-native'


// Sample data only for display -Testing purposes only 
let responseGirlOne = [
  {
    id: 0,
    a1: 'Great! I really want to know more about you.',
    a2: 'You seems to be materialistic person.',
    a3: 'You seem like too clingy person.',
    a4: `You're so sweet! `,
    
  },
  
];

function ResponseScreen1E({navigation}) {

  // Sample data only for display -Testing purposes only 
  let [rGirlOne, setRGirlOne] = useState(responseGirlOne)


  return (
    // ImageBackground of a girl
    <ImageBackground source={require('../../../assets/images/Korean.jpg')} style={styles.flexContainer}>

        <LinearGradient
        // Background Linear Gradient - white inside the Image Background
        colors={[ 'transparent', 'rgba(255,255,255,1)']}
        style={styles.whiteBackground}
        end={{ x: 0.5, y: 0.5 }}
      > 

      {/* Response Message inside the borderbox container - blue and white */}
      <FlatList
      numColumns={1}
      keyExtractor={(item) => (item.id)}
      data={rGirlOne}
      renderItem={({item}) => (
        
        <View style={styles.responseBorder3}>
          <View style={styles.responseBorder2}>
              <View style={styles.responseBorder1}>
                  <Text style={styles.responseText}>{item.a1}</Text>
              </View>
          </View>
        </View>

      )} />

          {/* Blue Button Text without color background if clicked it will route next screen */}
          <TouchableOpacity style={styles.responseButton} onPress={() => navigation.navigate('QuestionScreen20E')}>
                
                <View style={styles.reponseButtonContainer}>
                    <Text style={styles.responseButtonText}>NEXT</Text>
                </View>
                
          </TouchableOpacity>

      </LinearGradient>

    </ImageBackground>
  );
}

export default ResponseScreen1E;