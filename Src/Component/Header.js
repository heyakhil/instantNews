import React from 'react'
import { View, Text,StyleSheet,Image} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import PushNotification from "react-native-push-notification";

const Header = (props) => {
    const {title, bookmark} = props

    const CheckNotifi = () =>{
        // try {
        //     console.log("hhhghgh")
        //     PushNotification.localNotification({    
        //     title: "My Notification Title", // (optional)
        //     message: "Hehe Working", // (required)
        //     })
        // } catch (error) {
        // console.log(error) 
        // }
        
        //console.log("Hhe hehe Working")
    }

    return (
        <View style={styles.container}>
            <Ionicons 
                name="newspaper-outline" 
                size={25}
                style={{marginRight:8}}
            />
            <Text style={{fontSize:20, fontFamily:'LeagueSpartan-Bold'}}>{` `+title}</Text>
            
            {bookmark?<View style={{alignItems:'center', position:'absolute',right:0}}>
            <Ionicons 
                onPress={()=>CheckNotifi()}
                name="bookmarks-outline" 
                size={25}
                style={{marginRight:8}}
            /></View>:<View></View>}
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#54B0F3',
        paddingVertical:20,
        paddingLeft:10,
        flexDirection:'row',
        alignItems:'center'
    },
    
});


export default Header
