import { Accordion, H1, Icon, Text, View } from 'native-base'
import React, { useEffect } from 'react'
import styles from './HomeView.css'

// TODO(developing): remove this row or add some comment on why this line is there
const s = styles

const Home = () => {
    useEffect(() => {
        document.title = 'Select login example'
    }, [])

    const dataArray = [
        {
            title: 'Finger print',
            icon: 'fingerprint',
            content: 'A screen that shows an example of a login using a finger on the screen'
        },
        {
            title: 'Pattern lock',
            icon: 'lock-pattern',
            content: 'A screen that shows an example of a login using a password for the figures of lines'
        },
        {
            title: 'Face recognition',
            icon: 'face-recognition',
            content: 'A screen that shows an example of a login using a face recognition'
        }
    ]

    const renderContent = (item) => {
        return (
            <View className="accordion-content">
                <Icon
                    name={item.icon}
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
