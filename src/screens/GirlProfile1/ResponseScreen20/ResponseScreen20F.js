import {React, useState} from 'react'
import styles from '../../../styling/AllStyles'
import LinearGradient from 'react-native-linear-gradient';
import { Text, View, ImageBackground, FlatList, TouchableOpacity } from 'react-native'


// Sample data only for display -Testing purposes only 
let responseLastGirlOne = [
    {
        id: 0,
        b1: `Cool, I can't wait to go there with you `,
        b2: 'You seems to be materialistic person.',
        b3: 'You seem like too clingy person.',
        b4: `Your'e so sweet! `,
    },

];

function ResponseScreen20F({navigation}) {

  // Sample data only for display -Testing purposes only 
  let [reGirlOne, setREGirlOne] = useState(responseLastGirlOne)


  return (
    // ImageBackground of a girl
    <ImageBackground source={require('../../../assets/images/Russian.jpg')} style={styles.flexContainer}>

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
      data={reGirlOne}
      renderItem={({item}) => (
        
        <View style={styles.responseBorder3}>
          <View style={styles.responseBorder2}>
              <View style={styles.responseBorder1}>
                  <Text style={styles.responseText}>{item.b1}</Text>
              </View>
          </View>
        </View>

      )} />

          {/* Button that will route to Passed1/Failed1 total points Screen (GirlProfile1) */}
          <TouchableOpacity style={styles.responseButton} onPress={() => navigation.navigate('Passed1B')}>
                
                <View style={styles.reponseButtonContainer}>
                    <Text style={styles.responseButtonText}> SEE HOW YOU DID! </Text>
                </View>
                
          </TouchableOpacity>

      </LinearGradient>

    </ImageBackground>
  );
}

export default ResponseScreen20F;