import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Header } from 'react-native-elements'

export default class AppMain extends React.Component {
    public render() {
        return (
            <View style={styles.container}>
                <Header
                    leftComponent={{ icon: 'home', color: '#fff' }}
                    rightComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'Logins sample', style: { color: '#fff' } }}
                />
                <View style={styles.body}>
                    <Text>Click on the menu icon in the bottom to select login case</Text>
                </View>
                <View style={styles.footer}>
                    <Image
                        source={require('./src/Images/fingerprint.png')}
                        style={styles.footer_image}
                    />
                    <Image
                        source={require('./src/Images/pattern_lock.png')}
                        style={styles.footer_image}
                    />
                    <Image
                        source={require('./src/Images/face_recognition.png')}
                        style={styles.footer_image}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    body: {
        flex: 1,
        padding: 20,
    },
    footer: {
        width: '100%',
        height: 30,
        backgroundColor: '#9E9E9E',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    footer_image: {
        width: 25,
        height: 25,
        marginLeft: 20,
        marginRight: 20,
    },
})
