import {React, useState, useEffect} from 'react';
import { View, Text, Image, TouchableOpacity,FlatList, Linking, Modal, TouchableWithoutFeedback } from 'react-native';
import styles from '../../../styling/AllStyles'

// Sample data only for display -Testing purposes only 
let mSuccessMessage = [
    { id: 0, 
      name: 'Kamilla',
      address: 'Ukraine',
      message1: `Well that didn't go so well...`,
      message2: 'Try again and remember: Women appreciate a man who is respectful and decisive.',
    },
    
  ];


function Failed1({navigation}) {

    // Sample data only for display -Testing purposes only 
    let [successMessage, setSuccessMessage] = useState(mSuccessMessage)

    const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {

    setTimeout(() => {
      setModalVisible(true);
    }, 5000)

  },[]);

    
  
    return (
        // Passed Container White Background 
        <View style={styles.passedContainer}>
    
        {/* Round Shape Girl Profile Picture with Red & white border */}
        <View style={styles.propicContainer}>
            <View style={styles.propicBorder}>
            <Image
          source={require('../../../assets/images/pic.png')}
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
         <Text style={styles.textName}>{item.name}</Text>
         <Text style={styles.textAddress}>{item.address}</Text> 
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
    
            {/* Button that will route to the Random Lady Dialogue Screen for another 20 questions */}
            <TouchableWithoutFeedback 
            style={styles.passedButton}>
    
              <View style={styles.passedButtonBorder4}>
                    <View style={styles.passedButtonBorder2}>
                        <View style={styles.passedButtonBorder1}>
                            <Text style={styles.passedButtonText}>
                            TRY AGAIN</Text>
                        </View>
                    </View> 
              </View>
         
            </TouchableWithoutFeedback>

            {/* ---------------- MODAL (WILL BE SHOWN TIME DELAY AFTER 5 SECONDS) ------------------ */}
            <Modal
            animationType='slide'  
            transparent 
            visible={modalVisible}
            >

            <View style={styles.modalBlackOpacity}>
                <View style={styles.modalWhiteContainer}>

            {/* Button that will route to the official 1stchoice website */}
            <TouchableOpacity 
            style={styles.modalLinkOptions}
            onPress={() => Linking.openURL('https://1stchoicedating.com/')}>
    
              <View style={styles.modalBorder3}>
                    <View style={styles.modalBorder2}>
                        <View style={styles.modalBorder1}>
                            <Text style={styles.modalText}>
                            CHECK OUT THE SITE!</Text>
                        </View>
                    </View> 
              </View>
         
            </TouchableOpacity>

            {/* Button that will route to the Dialogue Screen another 20 questions for a random lady */}
            <TouchableOpacity 
            style={styles.modalLinkOptions2}
            onPress={() => Linking.openURL('https://1stchoicedating.com/women/info213393.htm')}
            >
              <View style={styles.modalBorder6}>
                    <View style={styles.modalBorder5}>
                        <View style={styles.modalBorder4}>
                            <Text style={styles.modalText2}>
                            TRY AGAIN</Text>
                        </View>
                    </View> 
              </View>
         
            </TouchableOpacity>

                </View>

            </View>

        </Modal>

   
      </View>
           
      );
    }

export default Failed1;
