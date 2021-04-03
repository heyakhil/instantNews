import React,{useState, useEffect} from 'react'
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const BottomNav = (props) => {
    const [menu, setmenu] = useState("")
    const {active, goHome, goExplore, goSetting} = props

    useEffect(()=>{
        setmenu(active)
    },[])

    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                <TouchableOpacity onPress={goHome} style={styles.Menubot}>
                    {menu != "home"?<Ionicons name="home-outline" size={25} />:<Ionicons name="home" size={25} />}
                </TouchableOpacity>
                <TouchableOpacity onPress={goExplore} style={styles.Menubot}>
                    {menu != "explore"?<Ionicons name="md-compass-outline" size={25} />:<Ionicons name="md-compass" size={25} />}
                </TouchableOpacity>
                <TouchableOpacity onPress={goSetting} style={styles.Menubot}>
                    {menu != "setting"?<Ionicons name="settings-outline" size={25} />:<Ionicons name="settings" size={25} />}   
                </TouchableOpacity>           
            </View>
        </View>
    )
}
 
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-end',
        position:'absolute',
        bottom:0,
        backgroundColor:'#54B0F3',
        width:'100%',
        paddingVertical:10,
    },
    Menubot:{
        justifyContent:'center',
        alignItems:'center',
    }
});

export default BottomNav
