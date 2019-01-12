import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from 'expo';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
  Rain: {
    colors:["#00c6fb", "#005bea"],
    title: "Raining like a MF",
    subTitle: "For moe info look outside",
    icon: 'weather-rainy'
  },
  Clear : {
    colors:["#fef253", "#ff7300"],
    title: "Sunny as Good",
    subTitle: "Go get your ass brunt",
    icon: 'weather-sunny'
  },
  Thunderstorm : {
    colors:["#00ecbc", "#007adf"],
    title: "Thunderstorm in the house",
    subTitle: "Actually, outside og the house",
    icon: 'weather-lightning'
  },
  Clouds : {
    colors:["#d7d2cc", "#304352"],
    title: "Clouds",
    subTitle: "boring",
    icon: 'weather-cloudy'
  },
   Snow : {
    colors:["#7de2fc", "#005bea"],
    title: "Cold as balls",
    subTitle: "Do you want build snowman",
    icon: 'weather-snowy'
  },
  Dizzle : {
    colors:["#00c6fb", "#005bea"],
    title: "Dizzle",
    subTitle: "but gay",
    icon: 'weather-hail'
  },
  Haze : {
    colors:["gray", "#eeeeee"],
    title: "Haze",
    subTitle: "but gay",
    icon: 'weather-fog'
  }
}

function Weather({temp, weatherName}) {
  return (
     <LinearGradient 
        colors={weatherCases[weatherName].colors} 
        style={styles.container}>
          <View style={styles.upper}>
            <MaterialCommunityIcons color="white" size={144} name={weatherCases[weatherName].icon} />
            <Text style={styles.temp}>{temp}˚</Text>
          </View>
          <View style={styles.lower}>
            <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
            <Text style={styles.subTitle}>{weatherCases[weatherName].subTitle}</Text>
          </View>
      </LinearGradient>
  )
}

Weather.prototypes = {
  temp: PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired
}

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  upper : {
    flex: 1,
    alignItems: "center",
    backgroundColor: "transparent",
    justifyContent: "center"
  },
  lower : {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25,
    marginTop: 10
  },
  temp : {
    fontSize: 38,
    backgroundColor: "transparent",
    color: "white",
  },
  title : {
    fontSize: 38,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 10,
    fontWeight: "300"
  },
  subTitle : {
    fontSize: 24,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 24
  }
})