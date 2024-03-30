import { Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import Profile from "./assets/images/profile.png"
import { Ionicons } from '@expo/vector-icons';
import Background from './assets/images/background.jpg'
import validation from './assets/images/validation.png'
import FirstImage from './assets/images/architecture/1.jpg'
import SecondImage from './assets/images/architecture/2.jpg'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App() {

  const Tab = createBottomTabNavigator();

  return (
    <>
      <ImageBackground source={Background} style={styles.BackgroundImage}>

        <View style={styles.all} >
          {/* set a profile  */}
          <View style={styles.iconProfile}>
            <Image source={Profile} style={styles.img} />
            <View style={styles.textImg} >
              <Ionicons name="call-outline" color="purple" size={30}></Ionicons>
              <Text style={styles.FirstText}>Mary Smith</Text>
            </View>
          </View>
          {/* set 2 blocks */}
          <View style={styles.block}>

            <View style={styles.firstBlock}>
              <Text style={styles.textFirstBlock}>2</Text>
              <Text style={styles.textFirstBlock}>Unclaimed</Text>

            </View>
            <View style={styles.secondBlock}>
              <Text style={styles.textSecondBlock}>$2,880</Text>
              <Text style={styles.textSecondBlock}>Monthly Earn</Text>
            </View>
          </View>

          <View style={styles.contentFirst}>
            <Text style={styles.FirstTextContent}>Action Requiered</Text>
            <View style={styles.circle}>
              <Text style={styles.SecondTextContent}>18</Text>
            </View>
          </View>

          <View style={styles.FirstCard}>
            <View>
              <Image source={validation} style={styles.IconValid} />
            </View>
            <View>
              <Text>Verify Art Profile</Text>
              <Text>now art piece profile requires your verification</Text>
            </View>
          </View>

          <View style={styles.contentSecond}>
            <Text style={styles.FirstSecondContent}>Gallery</Text>
            <Text style={styles.SecondSecondTextContent}>18</Text>
          </View>



          {/* card */}

          <View style={styles.cards}>
            <View style={styles.FirstCards}>
              <Image source={FirstImage} style={styles.imageA} />
              <Text style={styles.cardText}>Slouching towards</Text>
              <Text style={styles.Body}>Slouching towards</Text>
              <Button title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button" style={styles.btnBuy} />

            </View>

            <View style={styles.FirstCards}>
              <Image source={SecondImage} style={styles.imageA} />
              <Text style={styles.cardText}>Slouching towards</Text>
              <Text style={styles.Body}>Slouching towards</Text>
              <Button title="Buy Now" size={40} />

            </View>


          </View>



        </View>

      </ImageBackground>

    </>
  );
}

const styles = StyleSheet.create({
  BackgroundImage: {
    flex: 1,
    resizeMode: 'cover',

  }
  ,
  all: {
    padding: 50

  },

  iconProfile: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },

  img:
  {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  textImg: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 25
  },
  FirstText: {
    fontSize: 30,
    fontWeight: "bold",


  },


  block: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    alignContent: "center",
    marginTop: 50
  }
  ,
  firstBlock: {
    backgroundColor: "purple",
    width: 140,
    height: 100,
    borderRadius: 20
  },
  secondBlock: {
    backgroundColor: "black",
    width: 140,
    height: 100,
    borderRadius: 20
  },
  textFirstBlock: {
    color: "#fff",
    textAlign: "center",
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 16
  },
  textSecondBlock: {
    color: "#fff",
    textAlign: "center",
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 16

  },
  contentFirst: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 35
  },
  circle: {
    backgroundColor: "black",
    width: 30,
    height: 30,
    borderRadius: 50,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  FirstTextContent: {
    fontWeight: "bold",
    fontSize: 17
  },
  SecondTextContent: {
    color: "#fff",
    textAlign: "center",

  }
  ,
  FirstCard: {
    backgroundColor: "white",
    width: "auto",
    height: 65,
    marginTop: 30,
    borderRadius: 12,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.50,
    shadowRadius: 5.62,
    elevation: 7,
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    padding: 10

  },
  IconValid: {
    width: 35,
    height: 35
  },
  contentSecond: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 21,
  },
  FirstSecondContent: {
    fontWeight: "600",
    fontSize: 18
  },
  cards: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 15
  },
  FirstCards:
  {
    backgroundColor: "white",
    width: "50%",
    height: 170,
    borderRadius: 14

  },
  imageA: {
    width: 130,
    height: 120,
    resizeMode: 'cover',
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 14
  },
  cardText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15
  },
  Body: {
    fontWeight: "500",
    textAlign: "center",
    fontSize: 12,
    color: "purple"
  },
  btnBuy: {
    width: 50,
    backgroundColor: "black"
  },
  button: {
    backgroundColor: 'blue', // Couleur de fond du bouton
    color: 'white', // Couleur du texte du bouton
    paddingVertical: 10, // Espacement vertical
    paddingHorizontal: 20, // Espacement horizontal
    borderRadius: 5, // Bord arrondi
  },



});


