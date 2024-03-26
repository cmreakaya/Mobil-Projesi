import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import { Card} from '@rneui/themed';

export default function Piyano({navigation}) {
  

  return (
    <ScrollView style={styles.body}>
    <View style={styles.container}>
        
        <Card >
          <Card.Title> Akustik Duvar Piyanoları</Card.Title>
          <Card.Divider/>
          <Card.Image
            source={{
              uri:
                'https://data.do-re.com.tr/ProductCategoryPhoto/ac8e70227983936830d446b2b089a1ba.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 80,
            }}
          />
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("Akustik Duvar Piyanoları")}>Kategoriye Git</Text>
        </TouchableOpacity>
      </View>
        </Card>

        <Card >
          <Card.Title>Akustik Kuyruklu Piyanolar</Card.Title>
          <Card.Divider/>
          <Card.Image
            source={{
              uri:
                'https://data.do-re.com.tr/ProductCategoryPhoto/c29148fef88833fc1847d8249ab80164.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 80,
            }}
          />
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("Akustik Kuyruklu Piyanolar")}>Kategoriye Git</Text>
        </TouchableOpacity>
      </View>
        </Card>

        <Card >
          <Card.Title>Dijital Konsol Piyanolar</Card.Title>
          <Card.Divider/>
          <Card.Image
            source={{
              uri:
                'https://data.do-re.com.tr/ProductCategoryPhoto/44c89d9a758a9c09b1c63afcc96a519c.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 80,
            }}
          />
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("Dijital Konsol Piyanolar")}>Kategoriye Git</Text>
        </TouchableOpacity>
      </View>
        </Card>

        <Card >
          <Card.Title>Dijital Kuyruklu Piyanolar</Card.Title>
          <Card.Divider/>
          <Card.Image
            source={{
              uri:
'https://data.do-re.com.tr/ProductCategoryPhoto/9aaff3ba89d4e4382a4e5917e42e4c7e.jpg'
         }}
            style={{width: 150, 
            height: 150,
            marginLeft: 80,
            }}
          />
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("Dijital Kuyruklu Piyanolar")}>Kategoriye Git</Text>
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