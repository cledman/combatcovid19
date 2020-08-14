import React from 'react'
import { StyleSheet} from 'react-native'

const style = StyleSheet.create({
    container:{
        alignItems:'center',
        backgroundColor:'#fff',
        flexDirection:'column',
        height:'100%',
        width: '100%'
    },
    space:{
        alignSelf:'center',
        justifyContent:'space-evenly',
        flexDirection:'row',
    },

    gif:{
        height:'40%',
        width:'80%',    
    },

    doctorText:{
      color:'#4D8BB4', 
      fontSize:28,
      marginTop:-10,
      paddingLeft:'10%',
      paddingRight:'10%',
    },

    motivation:{
        color: '#4D8B84',
        fontSize:24,
        fontWeight:'bold',
        marginTop:30,
        paddingLeft:'10%',
        paddingRight:'10%',
        textAlign:'center'        
    },

    text:{

        fontSize:20,
        fontWeight: '600',
        marginTop:50
    },

    points:{
        backgroundColor: '#9DB657',
        borderRadius:20,
        padding:5,
        paddingLeft:20,
        paddingRight:20,
        marginLeft:'10%',
        marginTop:50,
    },

    pointsText:{
    color: '#ffffff',
    },

    button :{
        alignItems:'center',
        backgroundColor: '#9DB657',
        borderRadius:10,
        marginTop:'3%',
        padding:20,
        textAlign:'center',
        width:'75%'


    },
    textButton: {
       color:'white',
       fontSize: 20,
       fontWeight:'bold',
       textAlign:'center' 
    }
})

export default style