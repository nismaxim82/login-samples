import { Accordion, H1, Text, Thumbnail, View } from 'native-base'
import React, { useEffect } from 'react'
import styles from './HomeView.css'

const s = styles

const Home = () => {
    useEffect(() => {
        document.title = 'Select login example'
    }, [])

    const dataArray = [
        {
            title: 'Finger print',
            icon: require('../../../Images/fingerprint.png'),
            content: 'A screen that shows an example of a login using a finger on the screen'
        },
        {
            title: 'Pattern lock',
            icon: require('../../../Images/pattern_lock.png'),
            content: 'A screen that shows an example of a login using a password for the figures of lines'
        },
        {
            title: 'Face recognition',
            icon: require('../../../Images/face_recognition.png'),
            content: 'A screen that shows an example of a login using a face recognition'
        }
    ]

    const renderContent = (item) => {
        return (
            <View className="accordion-content">
                <Thumbnail square
                    source={{ uri: item.icon }}
                    className="accordion-content__icon"
                />
                <Text className="accordion-content__text">
                    {item.content}
                </Text>
            </View>
        )
    }

    return (
        <View>
            <H1 className="home-title">Select login example from the list below, or from the footer menu</H1>
            <Accordion
                dataArray={dataArray}
                expanded={0}
                icon="chevron-down"
                expandedIcon="chevron-up"
                renderContent={renderContent}
            />
        </View>
    )
}

export default Home
