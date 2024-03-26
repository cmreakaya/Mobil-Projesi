import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import { Card } from '@rneui/themed';

export default function Gitar({navigation}) {
  

  return (
    <ScrollView style={styles.body}>
    <View style={styles.container}>
         <Card >
          <Card.Title>Elektro Gitarlar</Card.Title>
          <Card.Divider/>
          <Card.Image
            source={{
              uri:
                'https://data.do-re.com.tr/ProductCategoryPhoto/b15cd85a2bab5271230923d3c51a8995.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 80,
            }}
          />
          
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("Elektro Gitar")}>Kategoriye Git</Text>
        </TouchableOpacity>
      </View>
        </Card>

         <Card >
          <Card.Title>Klasik Gitarlar</Card.Title>
          <Card.Divider/>
          <Card.Image
            source={{
              uri:
                'https://data.do-re.com.tr/ProductCategoryPhoto/f263c696c17da8a02dca010599d69a64.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 80,
            }}
          />
          
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("Klasik Gitar")}>Kategoriye Git</Text>
        </TouchableOpacity>
      </View>
        </Card>

         <Card >
          <Card.Title>Akustik Gitarlar</Card.Title>
          <Card.Divider/>
          <Card.Image
            source={{
              uri:
                'https://data.do-re.com.tr/ProductCategoryPhoto/f264105a113d48d220b5fe86b4e93d79.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 80,
            }}
          />
          
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("Akustik Gitar")}>Kategoriye Git</Text>
        </TouchableOpacity>
      </View>
        </Card>

         <Card >
          <Card.Title>Bas Gitarlar</Card.Title>
          <Card.Divider/>
          <Card.Image
            source={{
              uri:
                'https://data.do-re.com.tr/ProductCategoryPhoto/7e08756e1973a640184915ac723c5568.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 80,
            }}
          />
          
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("Bas Gitar")}>Kategoriye Git</Text>
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