import React,{useState,useEffect} from 'react'
import { View, Text, Modal, Dimensions,StyleSheet,Image } from 'react-native'
const height = Dimensions.get('screen').height
const LoaderHere = (props) => {
    const {distance, visible} = props
    //const [modalVisible, setModalVisible] = useState(visible);    
    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={[styles.modalContainer,{marginTop:height-(height/2)+distance}]}>
                    <Image 
                        style={{height:50,width:50, resizeMode:'center'}} 
                        source={require('../Assets/loader.gif')} 
                    />
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    modalContainer:{
        justifyContent:'center',
        alignSelf: "center",
        height: 80,
        width:80 ,
        
    }
});


export default LoaderHere
