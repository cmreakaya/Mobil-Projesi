import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import { Card} from '@rneui/themed';

export default function Konsol({navigation}) {
  

  return (
    <ScrollView style={styles.body}>
    <View style={styles.container}>

        <Card >
          <Card.Title>Casio AP270BK Celviano Dijital Piyano (Siyah)</Card.Title>
          <Card.Divider/>
          <Card.Image
            source={{
              uri:
                'https://www.do-re.com.tr/casio-ap270bk-celviano-dijital-piyano-siyah-3b8be8304dd2d468bc765ef925c71f02-eb551cd6daefccc7a82294241f2a2af8-large-pp.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 80,
            }}
          />
          <Text>1,094,310.00 TL</Text>
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("")}>Sepete Ekle</Text>
        </TouchableOpacity>
      </View>
        </Card>


        <Card >
          <Card.Title>Pearl River V-05 Dijital Piyano (Beyaz)</Card.Title>
          <Card.Divider/>
          <Card.Image
            source={{
              uri:
                'https://www.do-re.com.tr/pearl-river-v-05-dijital-piyano-beyaz-67c47c041184dca521864cd1a911f991-f7a30e8a3b9ffba300bfb411563813c2-large-pp.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 80,
            }}
          />
          <Text>26,804.00 TL</Text>
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("")}>Sepete Ekle</Text>
        </TouchableOpacity>
      </View>
        </Card>


        <Card >
          <Card.Title>Pearl River GP1100 Baby Grand Dijital Piyano (Beyaz)</Card.Title>
          <Card.Divider/>
          <Card.Image
            source={{
              uri:
                'https://www.do-re.com.tr/pearl-river-up115m5-akustik-duvar-piyanosu-parlak-siyah-050443e509634c8f99d4ace18763189f-7b393abe67c72649c1ca814a35250191-large-pp.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 80,
            }}
          />
          <Text>133,506.00 TL</Text>
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("")}>Sepete Ekle</Text>
        </TouchableOpacity>
      </View>
        </Card>

        

      </View>
      </ScrollView>

      

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#27374D',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',

  },
  button: {
    backgroundColor: '#526D82',
    borderRadius: 30,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
    marginRight:"10px"
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  });