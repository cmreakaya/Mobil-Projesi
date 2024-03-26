import React,{useState} from 'react';
import {SafeAreaView,Text,Button,TextInput,View,StyleSheet,TouchableOpacity,ImageBackground} from 'react-native';

const image = {uri: 'https://i.pinimg.com/564x/79/2a/79/792a798bc333e9101f2545adbd137a15.jpg'};


export default function Signin({navigation}) {


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');


  return (
    <View style={styles.container}>
   <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.logo}> Daha Fazla Müzik İçin 
      Kayıt Ol
      </Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Kullanıcı Adı"
          placeholderTextColor="#FEFBF6"
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Şifre"
          placeholderTextColor="#FEFBF6"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        
      </View>
       <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="E-Posta"
          placeholderTextColor="#FEFBF6"
          value={email}
          onChangeText={setEmail}
        />
      </View>       
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("Login")}>Geri Dön</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("Home")}>İleri</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 30,
    color: 'white',
    marginBottom: 40,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  inputView: {
    width: '80%',
    backgroundColor: '#27374D',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  button: {
    backgroundColor: '#27374D',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: '50%',
    marginRight:"10px"
  },
  buttonText: {
    color: 'white',
  },
});