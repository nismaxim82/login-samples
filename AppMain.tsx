import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Header } from 'react-native-elements'
import { connect } from 'react-redux'
import { Link, NativeRouter, Route } from 'react-router-native'
import routes from './src/Core/Routes/AllRoutes'

class AppMain extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props)
    }

    public render() {
        return (
            <NativeRouter>
                <View style={styles.container}>
                    <Header
                        leftComponent={{ icon: 'home', color: '#fff' }}
                        rightComponent={{ icon: 'menu', color: '#fff' }}
                        centerComponent={{ text: 'Logins sample', style: { color: '#fff' } }}
                    />
                    <View style={styles.body}>
                        {
                            routes.map((route, i) =>
                                <Route
                                    key={i}
                                    exact={route.exact}
                                    path={route.path}
                                    component={route.component}
                                />)
                        }
                    </View>
                    <View style={styles.footer}>
                        <Link to="/FingerPrint">
                            <Image
                                source={require('./src/Images/fingerprint.png')}
                                style={styles.footer_image}
                            />
                        </Link>
                        <Link to="/PatternLock">
                            <Image
                                source={require('./src/Images/pattern_lock.png')}
                                style={styles.footer_image}
                            />
                        </Link>
                        <Link to="/FaceRecognition">
                            <Image
                                source={require('./src/Images/face_recognition.png')}
                                style={styles.footer_image}
                            />
                        </Link>
                    </View>
                </View >
            </NativeRouter>
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
        width: '100%',
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

const mapStateToProps = (state: any) => ({
})

const mapDispatchToProps = (dispatch: any) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(AppMain)
