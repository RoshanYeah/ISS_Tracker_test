import * as React from "react"
import {Text, View, StyleSheet} from "react-native" 

export default class MeteorScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text} >Meteor Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#CAE7DF'
},
text:{
    alignItems:'center',
    marginTop:200,
    color:'black',
    fontSize:20
}
})