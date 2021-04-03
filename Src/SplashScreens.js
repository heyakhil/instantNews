import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ImageBackground, Dimensions, Animated, Button, Alert } from 'react-native'
const image = require('./Assets/Splash.png');
const height = Dimensions.get("screen").height;
import LoaderHere from './Component/LoaderHere';
import { BaseURL } from './Constants/AppDetails';
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreens = ({ navigation }) => {
    const [SlideInLeft, setSlideInLeft] = useState(new Animated.Value(300))
    const [loader, setloader] = useState(false)
    useEffect(() => {
        StartAnimation()
        RegisterDevice()
    }, [])

    const RegisterDevice = () => {
        var unique_DeviceId = DeviceInfo.getUniqueId()
        setloader(true)
        fetch(BaseURL + 'register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: unique_DeviceId
            })
        }).then((res) => res.json())
            .then(async (data) => {
                const storing = await storeData(data.token)
                if (storing) {
                    setloader(false)
                    navigation.navigate('Home')
                } else {
                    Alert.alert("Something went wrong")
                }
            }).catch((err) => {
                setloader(false)
                console.log("Error:", err)
            })
    }

    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('token', value)
        } catch (e) {
            Alert.alert(e)
        }
        return true
    }

    const StartAnimation = () => {
        Animated.timing(SlideInLeft, {
            toValue: 0,
            duration: 2500,
            useNativeDriver: true
        }).start(() => {
            //navigation.navigate("Home")
        })
    }
    const animatedStyles = {
        transform: [
            {
                translateX: SlideInLeft
            }
        ]
    }

    return (
        <View style={styles.container}>
            <LoaderHere distance={80} visible={loader} />
            <ImageBackground source={image} style={styles.image}>
                <Animated.View style={[styles.TextNews, animatedStyles]}>
                    <Text style={{ fontSize: 50, fontFamily: 'LeagueSpartan-Bold' }}>News</Text>
                </Animated.View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
    },
    TextNews: {
        position: 'absolute',
        left: height / 3.5,
        bottom: height / 3.5
    }
});


export default SplashScreens
