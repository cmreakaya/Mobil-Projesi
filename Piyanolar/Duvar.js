import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import { Card} from '@rneui/themed';

export default function Duvar({navigation}) {
  

  return (
    <ScrollView style={styles.body}>
    <View style={styles.container}>
        
        <Card >
          <Card.Title>Pearl River UP115M5 Akustik Duvar Piyanosu (Parlak Siyah)</Card.Title>
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
          <Text>113,520.00 TL</Text>
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("")}>Sepete Ekle</Text>
        </TouchableOpacity>
      </View>
        </Card>

        <Card >
          <Card.Title>Pearl River UP115 M5 Akustik Duvar Piyanosu (Parlak Beyaz)</Card.Title>
          <Card.Divider/>
          <Card.Image
            source={{
              uri:
                'https://www.do-re.com.tr/pearl-river-up115-m5-akustik-duvar-piyanosu-parlak-beyaz-2989de7c689c04c122201f39690fe6d2-5fb80917c79396a29b192af1ebc9e64b-large-pp.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 80,
            }}
          />
          <Text>120,506.00 TL</Text>
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("")}>Sepete Ekle</Text>
        </TouchableOpacity>
      </View>
        </Card>

        <Card >
          <Card.Title>Pearl River UP118M Akustik Duvar Piyanosu (Parlak Beyaz)</Card.Title>
          <Card.Divider/>
          <Card.Image
            source={{
              uri:
                'https://www.do-re.com.tr/pearl-river-up118m-akustik-duvar-piyanosu-parlak-beyaz-3c8c16fb1485858b0a8fed506c6a30b3-f550e7277c24983753737768a01b754b-large-pp.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 80,
            }}
          />
          <Text>127,492.00 TL</Text>
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