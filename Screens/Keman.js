import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import { Card } from '@rneui/themed';

export default function Keman({navigation}) {
  

  return (
    <ScrollView style={styles.body}>
    <View style={styles.container}>
        <Card >
          <Card.Title>4/4 Keman Seti</Card.Title>
          <Card.Divider/>
          <Card.Image 
            source={{
              uri:
                'https://www.do-re.com.tr/eastar-eva-3-4-4-keman-seti-natural-69e5b3b8ef34e806e4fc59f0571c4879-aec1b2d23ed3b948afabff4a4a512eb4-max-pp.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 80,
            }}
          />
          <Text style={styles.fiyat}>4.500TL</Text>
          
          
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("")}>Sepete Ekle</Text>
        </TouchableOpacity>
      </View>
        </Card>

        <Card >
          <Card.Title>3/4 Keman Seti</Card.Title>
          <Card.Divider/>
          <Card.Image 
            source={{
              uri:
                'https://www.do-re.com.tr/eastar-eva-3-3-4-keman-seti-natural-8e4a98fee84fe8a45e1ae6a95af25e96-13b2f7497ff7eab58bf2ce0dc7242764-max-pp.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 80,
            }}
          />
          <Text style={styles.fiyat}>4.000TL</Text>
          
          
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("")}>Sepete Ekle</Text>
        </TouchableOpacity>
      </View>
        </Card>

         <Card >
          <Card.Title>2/4 Keman Seti</Card.Title>
          <Card.Divider/>
          <Card.Image 
            source={{
              uri:
                'https://www.do-re.com.tr/eastar-eva-3-3-4-keman-seti-natural-8e4a98fee84fe8a45e1ae6a95af25e96-13b2f7497ff7eab58bf2ce0dc7242764-max-pp.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 80,
            }}
          />
          <Text style={styles.fiyat}>3.000TL</Text>
          
          
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("")}>Sepete Ekle</Text>
        </TouchableOpacity>
      </View>
        </Card>

        <Card >
          <Card.Title>1/4 Keman Seti</Card.Title>
          <Card.Divider/>
          <Card.Image 
            source={{
              uri:
                'https://www.do-re.com.tr/eastar-eva-3-3-4-keman-seti-natural-8e4a98fee84fe8a45e1ae6a95af25e96-13b2f7497ff7eab58bf2ce0dc7242764-max-pp.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 80,
            }}
          />
          <Text style={styles.fiyat}>2.000TL</Text>
          
          
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
  fiyat: {
fontStyle: 'bold',
textAlign:'center',

  },
  });