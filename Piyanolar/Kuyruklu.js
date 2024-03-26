import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import { Card} from '@rneui/themed';

export default function Kuyruklu({navigation}) {
  

  return (
    <ScrollView style={styles.body}>
    <View style={styles.container}>

        <Card >
          <Card.Title>Johannes Seiler Model 160TW Traditio Akustik Kuyruklu Piyano (Beyaz)</Card.Title>
          <Card.Divider/>
          <Card.Image
            source={{
              uri:
'https://www.do-re.com.tr/johannes-seiler-model-160tw-traditio-akustik-kuyruklu-piyano-beyaz-d54d695e931a6158362b2ef8a0802aac-45d225019d8177b2db00c4e5346d997a-large-pp.jpg   '
         }}
            style={{width: 150, 
            height: 150,
            marginLeft: 80,
            }}
          />
          <Text>889,674.00 TL</Text>
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("")}>Sepete Ekle</Text>
        </TouchableOpacity>
      </View>
        </Card>

        <Card >
          <Card.Title>Yamaha GC1 Akustik Kuyruklu Piyano (Parlak Siyah)</Card.Title>
          <Card.Divider/>
          <Card.Image
            source={{
              uri:
                'https://www.do-re.com.tr/yamaha-gc1-akustik-kuyruklu-piyano-parlak-siyah-9177d14bac41027121b1d5ba97a063b1-5f82350bd5e7835fb905ee58886f462a-large-pp.jpg', 
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