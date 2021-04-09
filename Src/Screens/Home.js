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

  const postBookmark = async(postid) => {
    const token = await getData('token')
    fetch(BaseURL+'bookmark',{
      method:'post',
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
        const settet1 =  storeData(postid)
        console.log(settet1)
      }else{
        Alert.alert("Some connection problem")
      }
    })
  }

  const storeData = async (value) => {
    const bookids = []
    const isdata = await getData('bookmark_id')
    if(isdata == undefined){
      try {
        bookids.push(value)
        const bookids1 = JSON.stringify(bookids)
        await AsyncStorage.setItem('bookmark_id', bookids1)
      } catch (e) {
        console.log(e)
      }
    }else{
      var n = isdata.includes(value)
      if(!n){
        var xyz = JSON.parse(isdata);
        xyz.push(value)
        console.log(xyz)
        var isdata1 = JSON.stringify(xyz)
        try {
          await AsyncStorage.setItem('bookmark_id', isdata1)
        } catch (e) {
          console.log(e)
        }
      }
    }
    console.log(isdata1, " ", bookids)
    // 
    return true
  }

  const postUnBookmark = async(postid) =>{
    const token = await getData('token')
    fetch(BaseURL+'unBookmark',{
      method:'post',
      headers: {
        'Authorization':'Bearer ' +token,
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        news_id:postid
      })
    }).then((res)=>res.json())
    .then(async(data)=>{
      if(data.status){
        const settet1 = await removeData(postid)
        console.log("jahskalsj",settet1)
      }else{
        Alert.alert("Some connection problem")
      }
    })
  }

  const removeData = async (value) => {
    const isdata = await getData('bookmark_id')
    const bookids1 = JSON.parse(isdata)
    console.log(bookids1,"Checkinr")
    if(bookids1.length == 1){
      try {
        await AsyncStorage.removeItem('bookmark_id')
      } catch (e) {
        console.log(e)
      }
    }else{
      var n = bookids1.indexOf(value);
      console.log("n", n)
  
        if (xyz > -1) {
          bookids1.splice(n, 1);
        }
        var xyz = JSON.stringify(bookids1);
        
        try {
          await AsyncStorage.setItem('bookmark_id', xyz)
        } catch (e) {
          console.log(e)
        }
    
    }
    console.log(bookids1, " ", value, "bookdata and value")
    // 
    return true
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
                    looping={false}
                    
                    dataSource={newsData}
                    renderItem={item =>
                        
                        <NewsCard 
                          data={item} 
                          postDislike={()=>postDislike(item.id)} 
                          postLike={()=>postLike(item.id)} 
                          postBookmark={()=>postBookmark(item.id)}
                          postUnBookmark={()=>postUnBookmark(item.id)}
                        />
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
