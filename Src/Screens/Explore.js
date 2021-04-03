import React from 'react'
import { View, Text, StyleSheet, ImageBackground, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native'
import BottomNav from '../Component/BottomNav';
import Header from '../Component/Header';
const width = Dimensions.get('screen').width
//console.log(width)

//importing all image here
const india = require('../Assets/category/india.png')
const business = require('../Assets/category/business.png')
const entertainment = require('../Assets/category/entertainment.png')
const politics = require('../Assets/category/politics.png')
const science = require('../Assets/category/sci.png')
const sport = require('../Assets/category/sport.png')
const startup = require('../Assets/category/startup.png')
const tech = require('../Assets/category/tech.png')
const world = require('../Assets/category/world.png')

const Explore = ({ navigation }) => {
    return (
        <View style={{ flex: 1,backgroundColor:'#B1C5C5' }}>
            <Header title="Instant Explore" />
            <Text style={styles.Trend}>Trending Topics</Text>
            <View style={{ height: 180, width: '100%' }}>
                <ScrollView showsHorizontalScrollIndicator={true} horizontal={true} style={{ flex: 1, flexDirection: 'column', flexWrap: 'wrap' }}>
                    <View style={styles.tpbanr}>
                        <ImageBackground style={{ width: '100%', height: '100%', overflow: 'hidden', borderRadius: 20 }} source={{ uri: 'https://www.businessinsider.in/photo/74895012/3-others-tested-corona-positive-in-rajasthan-tally-rises-to-69-official.jpg' }} />
                        <View style={styles.overlay}>
                            <Text style={styles.txtobnr}>Covid-19 Pandemic</Text>
                        </View>
                    </View>
                    <View style={styles.tpbanr}>
                        <ImageBackground style={{ width: '100%', height: '100%', overflow: 'hidden', borderRadius: 20 }} source={{ uri: 'https://www.businessinsider.in/photo/74895012/3-others-tested-corona-positive-in-rajasthan-tally-rises-to-69-official.jpg' }} />
                        <View style={styles.overlay}>
                            <Text style={styles.txtobnr}>Covid-19 Pandemic</Text>
                        </View>
                    </View>
                    <View style={styles.tpbanr}>
                        <ImageBackground style={{ width: '100%', height: '100%', overflow: 'hidden', borderRadius: 20 }} source={{ uri: 'https://www.businessinsider.in/photo/74895012/3-others-tested-corona-positive-in-rajasthan-tally-rises-to-69-official.jpg' }} />
                        <View style={styles.overlay}>
                            <Text style={styles.txtobnr}>Covid-19 Pandemic</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <Text style={styles.Trend}>All Categories</Text>
            <View style={styles.CategoryContainer}>
                <TouchableOpacity style={styles.subcontainer}>
                    <Image style={styles.subcontainerimg} 
                        source={india} />
                    <Text style={{fontSize:15,textAlign:'center', fontWeight:'bold',}}>India</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subcontainer}>
                    <Image style={styles.subcontainerimg} 
                        source={business} />
                    <Text style={{fontSize:15,textAlign:'center', fontWeight:'bold'}}>Business</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subcontainer}>
                    <Image style={styles.subcontainerimg} 
                        source={entertainment} />
                    <Text style={{fontSize:15,textAlign:'center', fontWeight:'bold'}}>Entertain</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subcontainer}>
                    <Image style={styles.subcontainerimg} 
                        source={world} />
                    <Text style={{fontSize:15,textAlign:'center', fontWeight:'bold'}}>World</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subcontainer}>
                    <Image style={styles.subcontainerimg} 
                        source={politics} />
                    <Text style={{fontSize:15,textAlign:'center', fontWeight:'bold'}}>Politics</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subcontainer}>
                    <Image style={styles.subcontainerimg} 
                        source={science} />
                    <Text style={{fontSize:15,textAlign:'center', fontWeight:'bold'}}>Science</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subcontainer}>
                    <Image style={styles.subcontainerimg} 
                        source={sport} />
                    <Text style={{fontSize:15,textAlign:'center', fontWeight:'bold'}}>Sports</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subcontainer}>
                    <Image style={styles.subcontainerimg} 
                        source={tech} />
                    <Text style={{fontSize:15,textAlign:'center', fontWeight:'bold'}}>Tech</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subcontainer}>
                    <Image style={styles.subcontainerimg} 
                        source={startup} />
                    <Text style={{fontSize:15,textAlign:'center', fontWeight:'bold'}}>StartUp</Text>
                </TouchableOpacity>
                
                
            </View>

            <BottomNav active="explore"
                goHome={() => navigation.navigate('Home')}
                goExplore={() => navigation.navigate('Explore')}
                goSetting={() => navigation.navigate('Setting')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    Trend: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 10,
        fontFamily: 'KaushanScript-Regular'
    },
    tpbanr: {
        margin: 10,
        width: 350,
        height: 150,
    },
    txtobnr: {
        position: 'absolute',
        bottom: 0,
        marginLeft: 20,
        color: '#fff',
        fontFamily: 'LeagueSpartan-Bold',
        marginBottom: 20
    },
    overlay: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(169,169,169,0.5)',
        position: 'absolute',
        borderRadius: 20
    },
    CategoryContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical:10,
        paddingHorizontal:13,
    },
    subcontainer:{
        borderWidth:2, 
        width:85, 
        height:85, 
        borderRadius:12,
        marginHorizontal:5,
        marginBottom:10,
        backgroundColor:'#CCCED2'
    },
    subcontainerimg:{
        width:60, 
        height:55,
        borderRadius:12, 
        overflow:'hidden',
        alignSelf:'center',
        resizeMode:'center'
    }
});

export default Explore
