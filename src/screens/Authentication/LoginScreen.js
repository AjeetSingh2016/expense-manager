import {View, Text, StyleSheet, TouchableOpacity, Image, Alert} from 'react-native';
import welcomeIcon from '../../constants/image/welcome.png';
import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import axios from 'axios';


import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const socialService = {
  google: {
    title: 'Continue with Google',
    icon: 'https://img.icons8.com/color/48/null/google-logo.png',
  },
  facebook: {
    title: 'Continue with Facebook',
    icon: 'https://img.icons8.com/color/48/null/facebook-new.png',
  },
};

const SocialButton = ({data, func}) => (
  <TouchableOpacity
    style={{
      display: 'flex',
      flexDirection: 'row',
      width: '85%',
      height: 50,
      alignItems: 'center',
      backgroundColor: '#272727',
      borderRadius: 8,
      marginTop: 20,
    }}
    onPress={() => {
      func();
    }}>
    <Image
      style={styles.iconStyle}
      source={{
        uri: data.icon,
      }}
    />
    <Text style={{color: 'white'}}>{data.title}</Text>
  </TouchableOpacity>
);

const LoginScreen = ({navigation}) => {
  GoogleSignin.configure({
    webClientId:
      '336165505186-p3peehken02tnvf7roqsqj5hri0u090e.apps.googleusercontent.com',
  });
  
  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    await GoogleSignin.signOut();
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    const userSiginIn = auth().signInWithCredential(googleCredential);
    userSiginIn
      .then( async user => {

        if(user.additionalUserInfo.isNewUser){
          const userData = {
            username: user.user.displayName,
            email: user.user.email,
            photoUrl: user.user.photoURL
          };
          const response = await axios.post("https://bewildered-jade-antelope.cyclic.app/register",userData)
  
          console.log(response);

        }
        else{
          console.log("Old user")
        }
    

      })
      .catch(error => {
        console.log(error);
      });
  }



  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={welcomeIcon} />
        <Text style={styles.title}>Hey! Welcome</Text>
        <Text style={styles.subTitle}>
          We are committed to provide accurate and unbiased reaserches &
          resources to our users
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <SocialButton data={socialService.google} func={onGoogleButtonPress} />
        <SocialButton data={socialService.facebook} func={()=>{
          Alert.alert("Please try with Google, Facebook service is not available!")
        }}/>
      </View>

      <View style={{height: '10%', paddingBottom: 15}}>
        <Text
          style={{
            fontSize: 12,
            color: "#74858C",
            textAlign: 'center',
          }}>
          On continuing you are accepting our T&C and Privacy Policy.
        </Text>
        <Text
          onPress={() =>
            navigation.navigate('Web', {
              name: 'Terms & Conditions',
              path: 'App/T&C.html',
            })
          }
          style={styles.terms_text}>
          Read T&C and Privacy Policy.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    flex: 7,
  },
  image: {
    aspectRatio: 1,
    height: '70%',
  },
  imageContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '65%',
    // backgroundColor: "red",
    paddingVertical: 5,
  },
  title: {
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
  },
  subTitle: {
    alignItems: 'center',
    textAlign: 'center',
    // fontWeight: 'bold',
    fontSize: 14,
    color: "#74858C",
    marginTop: 5,
    paddingHorizontal: 20,
  },
  iconStyle: {
    // width: '80%',
    height: 25,
    aspectRatio: 1,
    marginRight: 8,
    marginLeft: 8,
  },
  buttonContainer: {
    display: 'flex',
    width: '100%',
    height: '29%',
    alignItems: 'center',
  },
  terms_text: {
    color: 'blue',
    fontSize: 13,
    textAlign: 'center',
  },
});

export default LoginScreen;



// npx react-native-rename@latest "new_name" "com.ajeetsingh.expensemanager2024"

// com.ajeet.expensemanager2024

// ajeet.expensemanager2024

// SHA1: 5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25 
//          SHA256: FA:C6:17:45:DC:09:03:78:6F:B9:ED:E6:2A:96:2B:39:9F:73:48:F0:BB:6F:89:9B:83:32:66:75:91:03:3B:9C