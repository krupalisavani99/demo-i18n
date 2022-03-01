import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert  } from 'react-native';
import "./i18n.config";
import {useTranslation} from "react-i18next"
import LanguagePicker from "./LanguagePicker"

export default function App() {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <LanguagePicker />
      <Text style={styles.text}>{`${t("HELLO")}!`}</Text>
      <View style={styles.fixToText}>
        
      <Button 
        title={t("PRESS")} 
        onPress={() => Alert.alert(t("HELLO"))} 
      />

      <Button 
      title={t("ABOUT")} 
      onPress={() => Alert.alert(t("ABOUT"))} 
      />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  text: {
    fontSize: 50,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button:{
    size:52,
  }
});


