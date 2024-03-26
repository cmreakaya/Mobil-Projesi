import React from 'react';
import { View, ScrollView, StyleSheet, Image,TouchableOpacity  } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';


export default function Kategori({navigation}) {


return (
  
    <ScrollView style={styles.body}>
      <View style={styles.container}>
      </View>  
      
        <Card >
          <Card.Title>Keman</Card.Title>
          <Card.Divider/>
          <Card.Image
            source={{
              uri:
                'https://www.do-re.com.tr/fenix-fv34-keman-3-4-6400563b7261a28c1e21776c1f97b793-177810e4a30851654e45af565607c3e7-large-pp.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 80,
            }}
          />
          
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("Keman")}>Kategoriye Git</Text>
        </TouchableOpacity>
      </View>
        </Card>

        <Card >
          <Card.Title>Gitar</Card.Title>
          <Card.Divider/>
          <Card.Image
            source={{
              uri:
                'https://www.do-re.com.tr/prs-se-silver-sky-elektro-gitar-piano-black-27cb446952f524300385e5bcaa3095ca-19d2145fd1f9956ed911923377710617-mid-pp.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 80,
            }}
          />
          
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("Gitar")}>Kategoriye Git</Text>
        </TouchableOpacity>
      </View>
        </Card>

        <Card >
          <Card.Title>Piyano</Card.Title>
          <Card.Divider/>
          <Card.Image
            source={{
              uri:
                'https://www.do-re.com.tr/yamaha-cfiiis-concert-grand-konser-kuyruklu-piyano-parlak-siyah-9b921cdca84ec7ca5e8a0247bd30d115-a9c77a2d3d93fec41be97fa48a80c810-mid-pp.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 80,
            }}
          />
          
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("Piyano")}>Kategoriye Git</Text>
        </TouchableOpacity>
      </View>
        </Card>

        <Card >
          <Card.Title>Nefesliler</Card.Title>
          <Card.Divider/>
          <Card.Image
            source={{
              uri:
                'https://www.do-re.com.tr/jinbao-jbcl-570-mi-bemol-klarnet-8dacb8011a66d845c29a49f9271e687e-5de5d472f762245b5bde98a995c4a61a-large-pp.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 80,
            }}
          />
          
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("Nefesliler")}>Kategoriye Git</Text>
        </TouchableOpacity>
      </View>
        </Card>

        <Card >
          <Card.Title>Bateri</Card.Title>
          <Card.Divider/>
          <Card.Image
            source={{
              uri:
                'https://www.do-re.com.tr/jinbao-jbp1211a-bl-5-parca-cocuk-davul-seti-tabure-ve-ziller-dahil-762f63acdb73e4b4ba5fce6d38cb8092-8d3a827934480ac12dcf5dfdf0a34015-mid-pp.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 80,
            }}
          />
          
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("Bateri")}>Kategoriye Git</Text>
        </TouchableOpacity>
      </View>
        </Card>

    </ScrollView>

    
    
  
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#27374D',
},
body: {
  backgroundColor:'#27374D',
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
