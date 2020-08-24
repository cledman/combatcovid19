import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity , AsyncStorage } from 'react-native';
import battle from '../assets/battle.gif'
import Style from './style'
import style from './style';

function AcountPage({navigation}) {

    const [name, setName] = useState('')
    useEffect( () =>{
        async function handleUserNextScreen(){
          const getName = await AsyncStorage.getItem('@covid:name')

          if( getName != null || getName != "" || getName != [] || getName != undefined){
            navigation.navigate('HomePage', {name:getName})
          }
          else
          {
            navigation.navigate('CreateAccount')
          }
        }
    }, [])

    async function SetStorage(){
      if(!name || name==undefined){
        alert("Informe seu nome")
      }
      else{
        await AsyncStorage.setItem('@covid:name', name)
        await AsyncStorage.setItem('@covid:points', '0')
        navigation.navigate('HomePage',{name:name})
      }
    }

    return (
      <View style={Style.container}>
        <Image style={Style.gif} source={battle}></Image>
        <Text style={Style.text}>Combate ao covid-19</Text>
        <TextInput 
          style={Style.input}
          onChangeText ={(value) =>{setName(value)}}
          placeholder='Como devemos te chamar?'
          placeholderTextColor='white'
          value={name}
          >                
        </TextInput>
        <TouchableOpacity 
          style={Style.button}
          onPress={ ()=>SetStorage()}
        >            
          <Text style={Style.textButton}>
            Começar
          </Text>
        </TouchableOpacity>
      </View>

    );
  }
  

export default AcountPage  