import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import { Card } from '@rneui/themed';

export default function Elektro({navigation}) {
  

  return (
    <ScrollView style={styles.body}>
    <View style={styles.container}>
         <Card >
          <Card.Title>Donner DJP-1000 Semi-Hollow Elektro Gitar (Siyah)</Card.Title>
          <Card.Divider/>
          <Card.Image
            source={{
              uri:
                'https://www.do-re.com.tr/donner-djp-1000-semi-hollow-elektro-gitar-siyah-08b56f76234a6379d251b90ea57d74fe-30eca1c45c16d5453e31ef7d4e1bb6de-large-pp.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 80,
            }}
          />
          <Text>12,694.00 TL</Text>
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("Elektro")}>Sepete Ekle</Text>
        </TouchableOpacity>
      </View>
        </Card>       

        <Card >
          <Card.Title>Yamaha Pacifica Standard Plus Elektro Gitar (Ash Pink)</Card.Title>
          <Card.Divider/>
          <Card.Image
            source={{
              uri:
                'https://www.do-re.com.tr/yamahapacifica-standard-plus-elektro-gitar-ash-pink-1ba03a154bc512e4293a97f27f3f1368-4361ee71d9683afe075ac8451d7e7ea6-large-pp.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 80,
            }}
          />
          <Text>61,108.00 TL</Text>
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("Elektro")}>Sepete Ekle</Text>
        </TouchableOpacity>
      </View>
        </Card>

        <Card >
          <Card.Title>PRS SE CE24 Elektro Gitar (Black Cherry)</Card.Title>
          <Card.Divider/>
          <Card.Image
            source={{
              uri:
                'https://www.do-re.com.tr/prs-se-ce24-elektro-gitar-black-cherry-9792978dcb3febb8644cfed54247009a-8639d6480c156cf75df20302b3a80233-large-pp.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 80,
            }}
          />
          <Text>34,661.00 TL</Text>
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("Elektro")}>Sepete Ekle</Text>
        </TouchableOpacity>
      </View>
        </Card> 

        <Card >
          <Card.Title>PRS SE Silver Sky Elektro Gitar (Piano Black)</Card.Title>
          <Card.Divider/>
          <Card.Image
            source={{
              uri:
                'https://www.do-re.com.tr/prs-se-silver-sky-elektro-gitar-piano-black-27cb446952f524300385e5bcaa3095ca-19d2145fd1f9956ed911923377710617-large-pp.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 80,
            }}
          />
          <Text>40,537.00 TL</Text>
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("Elektro")}>Sepete Ekle</Text>
        </TouchableOpacity>
        </View>
        </Card>  

         <Card >
          <Card.Title>PRS S2 Satin Standard 24 Elektro Gitar (McCarty Tobacco Sunburst)</Card.Title>
          <Card.Divider/>
          <Card.Image
            source={{
              uri:
                'https://www.do-re.com.tr/prs-s2-satin-standard-24-elektro-gitar-mccarty-tobacco-sunburst-d46960ff29196fed1b764115fd7db3e5-4ddb58afe0233b4353b1f4a11f247eb4-large-pp.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 80,
            }}
          />
          <Text>85,332.00 TL</Text>
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("Elektro")}>Sepete Ekle</Text>
        </TouchableOpacity>
        </View>
        </Card>

        <Card >
          <Card.Title>Gibson Slash "Victoria" Les Paul Elektro Gitar (Goldtop)</Card.Title>
          <Card.Divider/>
          <Card.Image
            source={{
              uri:
                'https://www.do-re.com.tr/gibson-slash-victoria-les-paul-elektro-gitar-goldtop-16fe010043f84e18b28b55fb5a9cc250-381a832b0a9ee53aff82755310a8de9f-large-pp.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 80,
            }}
          />
          <Text>176,783.00 TL</Text>
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("Elektro")}>Sepete Ekle</Text>
        </TouchableOpacity>
        </View>
        </Card>

        <Card >
          <Card.Title>Schecter Solo-II Supreme Elektro Gitar (Black Cherry)</Card.Title>
          <Card.Divider/>
          <Card.Image
            source={{
              uri:
                'https://www.do-re.com.tr/schecter-solo-ii-supreme-elektro-gitar-black-cherry-74dd08c78f26fae01d9d8d365cc99363-c3d331303068c8841d455cc010766ee3-large-pp.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 80,
            }}
          />
          <Text>65,152.00 TL</Text>
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("Elektro")}>Sepete Ekle</Text>
        </TouchableOpacity>
        </View>
        </Card> 

        <Card >
          <Card.Title>Schecter V-1 Apocalypse Elektro Gitar (Red Reign)</Card.Title>
          <Card.Divider/>
          <Card.Image
            source={{
              uri:
                'https://www.do-re.com.tr/schecter-v-1-apocalypse-elektro-gitar-red-reign-e4172ad7f3a0360c97ef3d7ebf2f4213-7ff313d4bc206283737318ca46ec3800-large-pp.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 80,
            }}
          />
          <Text>52,875.00 TL</Text>
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("Elektro")}>Sepete Ekle</Text>
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