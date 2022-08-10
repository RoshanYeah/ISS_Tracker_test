import * as React from "react"
import {Text, 
    View, 
    StyleSheet, 
    SafeAreaView, 
    Platform, 
    StatusBar, 
    Image, 
    ImageBackground} from "react-native" 
import  axios  from "axios"
import MapView,{Marker} from "react-native-maps"

export default class ISSScreen extends React.Component{
    constructor(){
    super()
    this.state={
        location:{},

        }
    }

GetISSLocation=()=>{
axios.get("https://api.wheretheiss.at/v1/satellites/25544").then((response)=>{
    this.setState({
        location:response.data
    })
}).catch((error)=>{
alert(error.message)
})
}

componentDidMount(){
this.GetISSLocation()
}

    render(){
        if(Object.keys(this.state.location).length === 0){
            return(
                <View style={styles.container}>
                    <Text style={styles.text} >Loading</Text>
                </View>
            )
        }
        else{
            return(
                <View style={styles.container}>
                    <SafeAreaView style={styles.droidSafeArea} />
                    <ImageBackground style={styles.backgroundImage} source={require("../assets/assets/bg_image.png")}>
                    <View style={styles.titleContainer}>

                    </View>
                    <View style={styles.mapContainer}>
                    <MapView style={styles.map} region={{latitude:this.state.location.latitude, longitude:this.state.location.longitude, latitudeDelta:100, longitudeDelta:100}}>
                    <Marker coordinate={{latitude:this.state.location.latitude, longitude:this.state.location.longitude}}>
                    <Image source={require("../assets/assets/iss_icon.png")} style={{height:50, width:50}}>

                    </Image>
                    </Marker>
                    </MapView>
                    </View>
                    </ImageBackground>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: { flex: 1 }, droidSafeArea: { marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }, backgroundImage: { flex: 1, resizeMode: 'cover', }, titleContainer: { flex: 0.1, justifyContent: "center", alignItems: "center" }, titleText: { fontSize: 30, fontWeight: "bold", color: "white" }, mapContainer: { flex: 0.7 }, map: { width: "100%", height: "100%" },
    infoContainer: { flex: 0.2, backgroundColor: 'white', marginTop: -10, borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 30 }, infoText: { fontSize: 15, color: "black", fontWeight: "bold" }
})