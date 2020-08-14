import React, {useState, useEffect} from 'react'
import {View, Text, AsyncStorage, SafeAreaView, Image } from 'react-native'
import doctors from '../assets/doctors.gif'
import style from './style'
import { TouchableOpacity } from 'react-native-gesture-handler'

function HomePage({route, navigation} ) {

    const [name, setName] = useState('')
    const [points, setpoints] = useState('')    
    
    async function getPointsAndName(){
        setName(route.params.name)
        let value = await AsyncStorage.getItem('@covid:points')
        setpoints(value)
        console.log(points)
    }

    useEffect( () =>{
        navigation.addListener('focus', () =>{
            getPointsAndName()
        })

    },[navigation])

    return (
        <SafeAreaView style={style.container}>
            <View style={style.space}>
                <Text style={style.text}>Olá, {name}!</Text>
                <View style={[style.points, {backgroundColor: points < 0 ?"#DE6D6D" : "#9DB657" }]}>
                    <Text style={style.pointsText}>{points} pontos</Text>
                </View>  
            </View>      
            <Image source={doctors} style={style.gif}/>        
            <Text style={style.doctorText}>Lembre-se de que os profissionais de saúde estão lutando por nós!
                <Text style={{color:'#9DB657'}}>Fique em casa</Text>
            </Text>
            <Text style={style.motivation}>Vamos aumentar sua pontuação hoje?</Text>
            <TouchableOpacity 
                style={style.button}
                onPress={ () =>{
                    navigation.navigate("QuestionsPage")
                }}
            >
                <Text style={style.textButton}> 
                    Vamos lá!
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default HomePage