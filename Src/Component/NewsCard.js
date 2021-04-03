import React,{useEffect} from 'react'
import { View, Text, StyleSheet, Image, Dimensions, Touchable, TouchableOpacity } from 'react-native'
const height = Dimensions.get('screen').height
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
console.log(Dimensions.get('screen').height)
const NewsCard = (props) => {
    const {data,postLike,postDislike} = props
    const [inter, setinter] = React.useState(false)
    const [totlikes, settotlikes] = React.useState(0)
    useEffect(()=>{
        console.log(data.imgsrc)
        setinter(data.userLiked)
        settotlikes(data.likes)
    },[data])

    const runlike = () => {
        postLike()
        setinter(true)
        settotlikes(totlikes+1)
    }

    const rundislike = () => {
        postDislike()
        setinter(false)
        settotlikes(totlikes-1)
    }

    return (
        <View style={styles.container}>
            <Image 
                style={styles.imagePost} 
                source={{uri:data.imgsrc}} />
            <TouchableOpacity style={{marginHorizontal:15}}>
                <Text style={{
                    fontSize:20,
                    fontWeight:'bold',
                    fontFamily:'KaushanScript-Regular', 
                    marginTop:3
                }}>
                    {data.title}
                </Text>
            </TouchableOpacity> 
            <View style={{paddingHorizontal:10,flexDirection:'column',marginHorizontal:5,}}>
                <Text style={{fontSize:15,}}>
                    {data.content}
                </Text>
            </View>
            <View style={{marginHorizontal:15,flexDirection:'row',flexWrap:'wrap', marginVertical:3}}>
                <Text>{data.category}</Text> 
                <Text>{` - `}</Text>
                <Text>{data.postedAt}</Text>
                {/* <Text>{` by`}</Text> */}
            </View>
            <View style={{position: 'absolute',bottom: 0,width:'100%'}}>
                <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'flex-start', marginLeft:10}}>
                    <Text style={{
                        marginHorizontal:5,
                        fontSize:15
                    }}>{totlikes}</Text><Text style={{fontFamily:'LeagueSpartan-Bold'}}>LIKES</Text>
                </View>
            <View style={{marginVertical:2, opacity:0.6,borderWidth:1,borderColor:'#B1C5C5'}} />
                <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around', marginVertical:10,}}>
                    {!inter?<AntDesign onPress={()=>runlike()} name="like2" size={25} />
                        :
                    <AntDesign onPress={()=>rundislike()} name="like1" size={25} />} 
                    <AntDesign name="sharealt" size={25} />
                    <FontAwesome name="bookmark-o" size={25} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:height-200,
        backgroundColor:'#CCCED2',
        elevation:7
    },
    imagePost:{
        width:'100%',
        height:height-(height-200),
        resizeMode:'stretch'
    }
});

export default NewsCard
