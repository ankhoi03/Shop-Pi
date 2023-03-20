import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import React from 'react'

const ProductDetail = (props) => {
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
                <TouchableOpacity onPress={goBack}>
                    <Image source={require('../images/back.png')}></Image>
                </TouchableOpacity>
                <Text style={styles.titleScreen}>Product Detail</Text>
                <TouchableOpacity>
                    <Image source={require('../images/More2.png')}></Image>
                </TouchableOpacity>
            </View >


            <ScrollView showsVerticalScrollIndicator={false}>
                <Image style={styles.banner} source={require('../images/sony.jpg')} />
                <Text style={styles.text}>Sony Xperia 1 IV</Text>
                <Text style={styles.cost}>$1299,99</Text>
                <View style={styles.discount}>
                    <Text style={styles.oldCost}>$1599,99</Text>
                    <Text style={styles.sale}>24% off</Text>
                </View>
                <Text style={[styles.text, { fontSize: 18 }]}>Specification</Text>

                <View style={styles.infoView}>
                    <View style={styles.rowCenterView}>
                        <Text style={styles.titleText}>Screen:</Text>
                        <Text style={styles.infoText}>OLED 4K 120Hz, 6.5", 21:9</Text>
                    </View>
                    <View style={styles.rowCenterView}>
                        <Text style={styles.titleText}>Operating system:</Text>
                        <Text style={styles.infoText}>Android 12</Text>
                    </View>
                    <View style={styles.rowCenterView}>
                        <Text style={styles.titleText}>Rear Camera:</Text>
                        <Text style={styles.infoText}>Main 12MP & Sub 2x12MP</Text>
                    </View>
                    <View style={styles.rowCenterView}>
                        <Text style={styles.titleText}>Front Camera</Text>
                        <Text style={styles.infoText}>12MP</Text>
                    </View>
                    <View style={styles.rowCenterView}>
                        <Text style={styles.titleText}>Chip:</Text>
                        <Text style={styles.infoText}>Snapdragon 8 Gen 1</Text>
                    </View>
                    <View style={styles.rowCenterView}>
                        <Text style={styles.titleText}>RAM:</Text>
                        <Text style={styles.infoText}>12GB</Text>
                    </View>
                    <View style={styles.rowCenterView}>
                        <Text style={styles.titleText}>Storage capacity:</Text>
                        <Text style={styles.infoText}>512GB</Text>
                    </View>
                    <View style={styles.rowCenterView}>
                        <Text style={styles.titleText}>SIM:</Text>
                        <Text style={styles.infoText}>1 Nano SIM & 1 eSIM, 5G Support</Text>
                    </View>
                    <View style={styles.rowCenterView}>
                        <Text style={styles.titleText}>Rechargeable batteries:</Text>
                        <Text style={styles.infoText}>5000mAh, 30w</Text>
                    </View>
            
                  
                </View>

                <TouchableOpacity style={styles.btn} >
                    <Text style={styles.btnText}>Add to Cart</Text>
                </TouchableOpacity>


            </ScrollView>
        </View>
    )
}

export default ProductDetail

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
    infoView: {
        marginTop: 20,
        height: 310,
        backgroundColor: '#F7F7F9',
        paddingStart: 16,
        paddingTop: 10,
        borderWidth: 1,
        borderColor: '#EBF0FF',
        borderRadius: 5,
        elevation: 1,
    },
    titleScreen: {
        fontFamily: 'Raleway',
        fontSize: 22,
        fontWeight: '700',
        color: '#2B2B2B'
    },
    banner: {
        width: Dimensions.get('window').width - 60,
        height: 360,
        alignSelf: 'center',
        marginTop: 20
    },
    text: {
        color: '#223263',
        fontFamily: 'Poppins',
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 6,
        marginTop: 15,
    },
    cost: {
        color: '#40BFFF',
        fontFamily: 'Poppins',
        fontSize: 20,
        fontWeight: '700',
        marginTop: 6
    },
    oldCost: {
        textDecorationLine: 'line-through',
        marginEnd: 4,
        fontSize: 20,
    },
    discount: {
        flexDirection: 'row',
        marginTop: 6
    },
    sale: {
        color: '#FB7181',
        fontFamily: 'Poppins',
        fontSize: 20,
        fontWeight: '700',

    },
    rowCenterView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 315,
        height: 32
    },
    titleText: {
        color: '#9098B1',
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '400',
    },
    infoText: {
        color: '#223263',
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '500',
    },
    btn: {
        backgroundColor: '#40BFFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        height: 57,
        marginTop: 20,
        marginBottom:20
    },
    btnText: {
        color: '#FFFFFF',
        fontFamily: 'Poppins',
        fontSize: 20,
        fontWeight: '700',
    },
})