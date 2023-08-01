import {React, useState} from 'react';
import { View, Text, Image, TouchableOpacity,FlatList, Linking, StyleSheet } from 'react-native';
import styles from '../../../styling/AllStyles'

// Sample data only for display -Testing purposes only 
let mSuccessMessage = [
  { id: 0, 
    name: 'Sasha',
    address: 'Russia',
    message1: 'Wow! You really know how to talk to a lady.',
    message2: 'Are you ready to take it to the next level and really talk to her?',
  },
  
];


function Passed1B() {

    // Sample data only for display -Testing purposes only 
    let [successMessage, setSuccessMessage] = useState(mSuccessMessage)
  
    return (
        // Passed Container White Background 
        <View style={styles.passedContainer}> 
    
        {/* Round Shape Girl Profile Picture with Red & white border */}
        <View style={styles.propicContainer}>
            <View style={{
              borderColor: '#89CFF0',
              borderWidth: 2.5,
              width: 155,
              height: 155, 
              borderRadius: 200 / 2,
            }}>
            <Image
          source={require('../../../assets/images/pic3.png')}
          style={styles.propic}
        />
            </View>

        </View>
    
    
    <FlatList
          numColumns={1}
          keyExtractor={(item) => (item.id)}
          data={successMessage}
          renderItem={({item}) => (
    
    <View>

         {/* Name and Address Container - Red */}
        <View style={styles.nameContainer}>
         <Text style={{
          fontSize: 40,
          color: '#89CFF0',
          fontWeight: 'bold',
         }}>{item.name}</Text>
         <Text style={{
          fontSize:19.5, 
          color: '#89CFF0'
         }}>{item.address}</Text> 
         </View>

          {/* Passed Result Message Box with Blue & White border */}
          <View style={styles.passedBorder3}>
                <View style={styles.passedBorder2}>
                  <View style={styles.passedBorder1}>
    
                      <View style={styles.passedResultContainer}>
                            
                          <View style={styles.resultContainer1}>
                           <Text style={styles.resultText1} > {item.message1} </Text>
                            </View>
                            
                            <View style={styles.resultContainer2} >
                           <Text style={styles.resultText2}> {item.message2} </Text>
                            </View>
                      
    
                      </View>
                  </View>
              </View>
          </View>
    </View>

          )} />
    
            {/* Button that will route to the Lady Profile 1stchoice website */}
            <TouchableOpacity 
            style={styles.passedButton}
            onPress={() => Linking.openURL('https://bumble.com/')}
            >
    
              <View style={styles.passedButtonBorder3}>
                    <View style={styles.passedButtonBorder2}>
                        <View style={styles.passedButtonBorder1}>
                            <Text style={styles.passedButtonText}>
                            START THE REAL CONVERSATION</Text>
                        </View>
                    </View> 
              </View>
         
            </TouchableOpacity>
   
      </View>
           
      );
    }

export default Passed1B;
