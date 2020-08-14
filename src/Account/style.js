import React from 'react'
import { StyleSheet} from 'react-native'

const style = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        height:'100%',
        width: '100%'
    },
    gif:{
        height:'60%',
        width:'100%',    
    },
    text:{
        color:'#4d8b84',
        fontSize:24,
        textAlign: 'center'
    },
    input:{
        backgroundColor:'#4D8B84',
        borderRadius:18,
        marginLeft: '10%',
        marginTop:25,
        padding:15,
        width:'80%'
    },
    button :{
        backgroundColor: '#9DB657',
        borderRadius:10,
        marginLeft:'10%',
        marginTop:15,
        padding:25,
        width:'80%'


    },
    textButton: {
       color:'white',
       fontSize: 20,
       fontWeight:'bold',
       textAlign:'center' 
    }
})

export default style