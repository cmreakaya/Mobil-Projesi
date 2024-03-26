import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import { Card} from '@rneui/themed';

export default function Dijital({navigation}) {
  

  return (
    <ScrollView style={styles.body}>
    <View style={styles.container}>

        <Card >
          <Card.Title>Yamaha CVP909GP-PE Kuyruklu Dijital Piyano (Parlak Siyah)</Card.Title>
          <Card.Divider/>
          <Card.Image
            source={{
              uri:
                'https://www.do-re.com.tr/yamaha-cvp909gp-pe-kuyruklu-dijital-piyano-parlak-siyah-38a5f5639672f756907b30134c9d000f-70aaf8ffa0a0d4aeb57f9b28651aa04d-large-pp.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 80,
            }}
          />
          <Text>950,400.00 TL</Text>
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("")}>Sepete Ekle</Text>
        </TouchableOpacity>
      </View>
        </Card>

        <Card >
          <Card.Title>Yamaha CLP765GP Dijital Kuyruklu Piyano (Beyaz)</Card.Title>
          <Card.Divider/>
          <Card.Image
            source={{
              uri:
                'https://www.do-re.com.tr/yamaha-clp765gp-dijital-kuyruklu-piyano-beyaz-896bbacdcc46770a4d228083ed658ebb-0836fa5b05deb96973fda1e3ab0d8345-large-pp.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 80,
            }}
          />
          <Text>284,888.00 TL</Text>
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("")}>Sepete Ekle</Text>
        </TouchableOpacity>
      </View>
        </Card>

        <Card >
          <Card.Title>Bolanshi BL-GP115BK Grand Dijital Piyano (Siyah)</Card.Title>
          <Card.Divider/>
          <Card.Image
            source={{
              uri:
                'https://www.do-re.com.tr/bolanshi-bl-gp115bk-grand-dijital-piyano-siyah-55c8bd2741b85e09e8e365e4a0f1ef04-0fe77a725d6c559637c57cb144ce12e9-large-pp.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 80,
            }}
          />
          <Text>76,870.00 TL</Text>
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("")}>Sepete Ekle</Text>
        </TouchableOpacity>
      </View>
        </Card>

        <Card >
          <Card.Title>Yamaha N3X Avantgrand Dijital Kuyruklu Piyano Parlak Siyah</Card.Title>
          <Card.Divider/>
          <Card.Image
            source={{
              uri:
                'https://www.do-re.com.tr/yamaha-n3x-avantgrand-dijital-kuyruklu-piyano-parlak-siyah-344fdabfc70fd729473b3ef5c169b3f1-acec4254097fd69249ed2dbb8d1a6a2b-large-pp.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 80,
            }}
          />
          <Text>1,319,071.00 TL</Text>
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