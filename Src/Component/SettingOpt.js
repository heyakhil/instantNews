import React from 'react'
import { View, Text,StyleSheet,Dimensions, TouchableOpacity } from 'react-native'
import {Appname} from '../Constants/AppDetails';
//const width = Dimensions.get('screen').width
const SettingOpt = (props) => {
    const {btntitle, msg, title, onPress} = props
    return (
        <View style={styles.container}>
            <Text style={{marginLeft:10,fontFamily:'KaushanScript-Regular',fontSize:20}}>{title}</Text>
            <View style={{width:'100%', padding:10,backgroundColor:'#B1C5C5'}}>
                <Text>{msg}</Text>
            </View>
            <TouchableOpacity 
                onPress={onPress}
                style={{marginVertical:10,alignItems:'center'}}>
                <Text style={{color:'#54B0F3', fontFamily:'LeagueSpartan-Bold'}}>
                    {btntitle.toUpperCase()}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        backgroundColor:'#F2F6FC',
        marginBottom:10
    }
});

export default SettingOpt
