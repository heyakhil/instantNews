import React from 'react'
import { View, Text, ScrollView,StyleSheet } from 'react-native'
import BottomNav from '../Component/BottomNav';
import Header from '../Component/Header';
import SettingOpt from '../Component/SettingOpt';


const Setting = ({navigation}) => {
    return (
        <View style={{flex:1, backgroundColor:'#B1C5C5'}}>
            <Header title="Settings" />
            <ScrollView style={{marginBottom:50}}>
                <SettingOpt 
                    onPress={()=>console.log('Hello')} 
                    title="Share Instant News" 
                    msg="Share this app with you friends and help to spread knowledge!" 
                    btntitle="Share with friends" />
                <SettingOpt 
                    title={`News Notification: ${`ON`}`}
                    msg="You will receive the notification of some important news" 
                    btntitle="Share with friends"
                    />
                <SettingOpt 
                    title="Rate US" 
                    msg="Whatever you liked about use please like a comment about it, and help us to improve ourselves" 
                    btntitle="Rate Instant News" />
                <SettingOpt 
                    title="Join Us! Become News Writer and Earn" 
                    msg="Write small post for the app and Earn money, Make it in you confort zone and earn according to your Hard work" 
                    btntitle="Join Instant News" />
                <SettingOpt 
                    title="Contact Us" 
                    msg="Any Feedback and/or suggestion is appreciated! You can contact us on luvprogramming@gmail.com" 
                    btntitle="Contact Us" />
                <SettingOpt 
                    title="Privacy Policy" 
                    msg="Here is our privacy policy you can read the policy and we are very strict with our policy so please don't do any misleneous activity" 
                    btntitle="Privacy Policy" />
                
                <View style={{alignItems:'center'}}>
                    <Text style={{fontSize:30, color:'#54B0F3', fontFamily:'KaushanScript-Regular'}}>Instant News</Text>
                    <Text style={{fontSize:15, color:'#B1C5C5', fontFamily:'KaushanScript-Regular'}}>v.0.0.1</Text>
                </View>
            </ScrollView>

            <BottomNav active="setting" 
                goHome={()=>navigation.navigate('Home')}
                goExplore={()=>navigation.navigate('Explore')}
                goSetting={()=>navigation.navigate('Setting')}    
            />
        </View>
    )
}

const styles = StyleSheet.create({
    
});

export default Setting
