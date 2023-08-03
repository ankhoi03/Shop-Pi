import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'

const Profile = (props) => {
    const { navigation } = props;
    const goBack = () => {
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle={'dark-content'}
                translucent={true}
                backgroundColor={'transparent'}
            ></StatusBar>

            <View style={styles.headerView}>
                <TouchableOpacity onPress={goBack} style={styles.headerButton}>
                    <Image source={require('../images/back.png')}></Image>
                </TouchableOpacity>
                <Text style={styles.titleScreen}>Profile</Text>
                <TouchableOpacity style={styles.headerButton}>
                    <Image source={require('../images/More2.png')}></Image>
                </TouchableOpacity>
            </View >
            <Image style={styles.img} source={require('../images/LineProfile.png')} />
            <View style={styles.avatarView}>
                <Image style={styles.avatar} source={require('../images/pinterest2.jpg')} />
                <View style={styles.nameView}>
                    <Text style={styles.nameText}>Tô An Khôi</Text>
                    <Text style={styles.tagText}>@khoikz</Text>
                </View>
            </View>

            <View style={styles.inputView}>
                <View style={styles.rowSpaceBetweenView}>
                    <Image source={require('../images/Gender2.png')}></Image>
                    <Text style={styles.keyText}>Gender</Text>
                </View>
                <View style={styles.rowSpaceBetweenView}>
                    <Text style={styles.valueText}>Male</Text>
                    <TouchableOpacity>
                        <Image source={require('../images/Right.png')}></Image>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.inputView}>
                <View style={styles.rowSpaceBetweenView}>
                    <Image source={require('../images/Date2.png')}></Image>
                    <Text style={styles.keyText}>Birthday</Text>
                </View>
                <View style={styles.rowSpaceBetweenView}>
                    <Text style={styles.valueText}>03-10-2003</Text>
                    <TouchableOpacity>
                        <Image source={require('../images/Right.png')}></Image>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.inputView}>
                <View style={styles.rowSpaceBetweenView}>
                    <Image source={require('../images/Message2.png')}></Image>
                    <Text style={styles.keyText}>Email</Text>
                </View>
                <View style={styles.rowSpaceBetweenView}>
                    <Text style={styles.valueText}>khoikz@icloud.com</Text>
                    <TouchableOpacity>
                        <Image source={require('../images/Right.png')}></Image>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.inputView}>
                <View style={styles.rowSpaceBetweenView}>
                    <Image source={require('../images/Phone2.png')}></Image>
                    <Text style={styles.keyText}>Phone number</Text>
                </View>
                <View style={styles.rowSpaceBetweenView}>
                    <Text style={styles.valueText}>0338265040</Text>
                    <TouchableOpacity>
                        <Image source={require('../images/Right.png')}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        paddingStart: 20,
        paddingEnd: 20,
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    headerView: {
        marginTop: 32,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleScreen: {
        fontFamily: 'Raleway',
        fontSize: 22,
        fontWeight: '700',
        color: '#2B2B2B'
    },
    headerButton:{
        width:26,
        height:26,
        justifyContent:'center',
        alignItems:'center'
    },
    img: {
        width: Dimensions.get('window').width - 40,
        marginTop: 32,
        height: 2
    },
    avatarView: {
        flexDirection: 'row',
        marginTop: 24,
        marginBottom:32
    },
    avatar: {
        width: 72,
        height: 72,
        borderRadius: 99
    },
    nameView: {
        marginStart: 15,
        justifyContent: 'center',
       
    },
    nameText: {
        color: '#223263',
        fontFamily: 'Poppins',
        fontSize: 20,
        fontWeight: '700',
    },
    tagText: {
        color: '#9098B1',
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '500',
        marginTop: 5
    },
    inputView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height:54,
        
    },
    rowSpaceBetweenView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
       
    },
    keyText:{
        color: '#223263',
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '700',
        marginStart:15
    },
    valueText:{
        color: '#9098B1',
        fontFamily: 'Poppins',
        fontSize: 15,
        fontWeight: '500',
        marginEnd:15
    }
})