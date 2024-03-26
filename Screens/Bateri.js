import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import { Card } from '@rneui/themed';

export default function Bateri({navigation}) {
  

  return (
    <ScrollView style={styles.body}>
    <View style={styles.container}>
       <Card >
          <Card.Title>'Donner DDS-520 5-Parça 22" Akustik Davul (Siyah)'</Card.Title>
          <Card.Divider/>
          <Card.Image
            source={{
              uri:
                'https://www.do-re.com.tr/donner-dds-520-5-parca-22-akustik-davul-siyah-471a67d393789ec0bc74cb64b216829d-e4eb094fd40cde4503fcaaa41808b0df-large-pp.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 80,
            }}
          />
          <Text>24,598.00 TL</Text>
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("")}>Sepete Ekle</Text>
        </TouchableOpacity>
      </View>
        </Card>

        <Card >
          <Card.Title>'Eastar EDS-480MBE 22" 5-Parça Akustik Davul (Metallic Blue)'</Card.Title>
          <Card.Divider/>
          <Card.Image
            source={{
              uri:
                'https://www.do-re.com.tr/eastar-eds-480mbe-22-5-parca-akustik-davul-metallic-blue-cfc3001fbbfbabb7a4b2291759fdcd8b-c638b082a14c321cd1183cf38f8646ce-large-pp.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 80,
            }}
          />
          <Text>14,584.00 TL</Text>
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("")}>Sepete Ekle</Text>
        </TouchableOpacity>
      </View>
        </Card>

        <Card >
          <Card.Title>'Jinbao JBP1211A-BL 5-Parça Çocuk Davul Seti (Tabure ve Ziller Dahil)'</Card.Title>
          <Card.Divider/>
          <Card.Image
            source={{
              uri:
                'https://www.do-re.com.tr/jinbao-jbp1211a-bl-5-parca-cocuk-davul-seti-tabure-ve-ziller-dahil-762f63acdb73e4b4ba5fce6d38cb8092-8d3a827934480ac12dcf5dfdf0a34015-large-pp.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 80,
            }}
          />
          <Text>17,850.00 TL</Text>
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("")}>Sepete Ekle</Text>
        </TouchableOpacity>
      </View>
        </Card>

        <Card >
          <Card.Title>'E-Force F30 Ultra Hybrid Elektronik - Akustik Davul Seti '</Card.Title>
          <Card.Divider/>
          <Card.Image
            source={{
              uri:
                'https://www.do-re.com.tr/e-forcef30-ultra-hybrid-elektronik-akustik-davul-seti-76e757140109dfe0aaf41aec0b2730ee-96bd7ab32d09e518812bdc9fd0a2dd49-large-pp.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 80,
            }}
          />
          <Text>40,906.00 TL</Text>
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("")}>Sepete Ekle</Text>
        </TouchableOpacity>
      </View>
        </Card>

        <Card >
          <Card.Title>'E-Force F20 9 Parça Elektro Davul'</Card.Title>
          <Card.Divider/>
          <Card.Image
            source={{
              uri:
                'https://www.do-re.com.tr/e-force-f20-9-parca-elektro-davul-f8ace40e30467a5f370df44bf8514b86-778337aa373f7788e5298829d6932486-large-pp.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 80,
            }}
          />
          <Text>18,428.00 TL</Text>
          <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={()=>navigation.navigate("")}>Sepete Ekle</Text>
        </TouchableOpacity>
      </View>
        </Card>

        <Card >
          <Card.Title>'Carlsbro CSD35M Elektro Davul Seti (CSS1 + DCN2)'</Card.Title>
          <Card.Divider/>
          <Card.Image
            source={{
              uri:
                'https://www.do-re.com.tr/carlsbro-csd35m-elektro-davul-seti-css1-dcn2-903291b3551c86889857210e7a6408b9-0da2b3a114064a9022e3f315b5c46ca3-large-pp.jpg', 
            }}
            style={{width: 150, 
            height: 150,
            marginLeft: 80,
            }}
          />
          <Text>27,576.00 TL</Text>
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