import React,{useState,useEffect} from 'react'
import { View, Text,StyleSheet, ScrollView,Image,Dimensions, Alert } from 'react-native'
import Header from '../Component/Header'
import BottomNav from '../Component/BottomNav';
import NewsCard from '../Component/NewsCard';
import { DeckSwiper, } from 'native-base';
const height = Dimensions.get('screen').height
import {BaseURL} from '../Constants/AppDetails';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoaderHere from '../Component/LoaderHere';

const Home = ({navigation}) => {
  const [index, setindex] = useState(0)
  const [loader, setloader] = useState(false)
  const [page, setpage] = useState(1)
  const [newsData, setnewsData] = useState([])

  const getData = async (name) => {
   // setloader(true)
    try {
      const value = await AsyncStorage.getItem(name)
      if(value !== null) {
        return value
      }
    } catch(e) {
      console.log(e)
    }
  }

  useEffect(() => {
    console.log("page:", page)
    const fetchRandomNews = async() =>{
      setloader(true)
      const token = await getData('token')
       fetch(BaseURL+`getRandomNews/${page}`, {
        method: 'GET',
        headers: {
          'Authorization':'Bearer ' +token,
          'Content-Type': 'application/json'
        },
      }).then((res)=>res.json())
      .then((data)=>{
        if(data.status){
          if(newsData.length == 0){
            setnewsData(data.data)
            setindex(0)
          }
          else{
            setnewsData(data.data)
            setindex(0)
          }
          
         // console.log("My Data", data.data)
        }else{
          Alert.alert("Something went wrong", data.msg)
        }
      }).finally(()=>{
        setloader(false)
      })
    }
    fetchRandomNews()
  }, [page])

  const GetMoredata = () => {
    if(index == newsData.length-1){
      // console.log(newsData)
      setpage(page+1)
    }
    setindex(index+1)
  }

  const postDislike = async(postid) => {
    const token = await getData('token')
    fetch(BaseURL+'disLike',{
      method:'put',
      headers: {
        'Authorization':'Bearer ' +token,
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        news_id:postid
      })
    }).then((res)=>res.json())
    .then((data)=>{
      if(data.status){
        console.log(data.msg)
      }else{
        Alert.alert("Some connection problem")
      }
    })
  }

  const postLike = async(postid) =>{
    const token = await getData('token')
    fetch(BaseURL+'like',{
      method:'put',
      headers: {
        'Authorization':'Bearer ' +token,
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        news_id:postid
      })
    }).then((res)=>res.json())
    .then((data)=>{
      if(data.status){
        console.log(data.msg)
      }else{
        Alert.alert("Some connection problem")
      }
    })
  }
    return (
        <View style={{flex:1, backgroundColor:'#B1C5C5'}}>
            <View style={{flex:1}}>
                <Header bookmark title="Instant News" />
                <LoaderHere distance={0} visible={loader} />
                <View style={{height:height}}>
                  {newsData.length >0 ?<DeckSwiper
                    onSwipeRight={()=>GetMoredata()}
                    onSwipeLeft={()=>GetMoredata()}
                    looping={true}
                    dataSource={newsData}
                    renderItem={item =>
                        <NewsCard data={item} postDislike={()=>postDislike(item.id)} postLike={()=>postLike(item.id)} />
                    }
                  />:<View></View>} 
                </View>
            </View>
            <BottomNav active="home" 
                goHome={()=>navigation.navigate('Home')}
                goExplore={()=>navigation.navigate('Explore')}
                goSetting={()=>navigation.navigate('Setting')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    
});
export default Home
