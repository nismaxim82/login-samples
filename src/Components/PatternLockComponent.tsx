import { Svg } from 'expo'
import React from 'react'
import { StyleSheet, View } from 'react-native'

// https://github.com/AudyOdi/react-native-android-pattern-lock-screen/blob/master/src/PatternLockScreen.js
const { Line, Circle } = Svg
const DEFAULT_DOT_RADIUS = 5
const SNAP_DOT_RADIUS = 10
const SNAP_DURATION = 100

interface IPatternLockState {
    width: number,
    height: number,
}

class PatternLockComponent extends React.Component<{}, IPatternLockState> {
    private _dots = [
        { x: 65, y: 65 },
        { x: 130, y: 65 },
        { x: 185, y: 65 },
        { x: 65, y: 130 },
        { x: 130, y: 130 },
        { x: 185, y: 130 },
        { x: 65, y: 185 },
        { x: 130, y: 185 },
        { x: 185, y: 185 }
    ]

    constructor(props: any) {
        super(props)

        this.state = {
            width: 0,
            height: 0,
        }
    }

    public render() {
        return (
            <View
                style={styles.container}
                onLayout={this.onPageLayout}>
                <Svg width={this.state.width} height={this.state.height}>
                    <Line
                        // ref={node => (this._line = node)}
                        x1="50" // start coordinate x
                        y1="50" // start coordinate y
                        x2="150" // end coordinate x
                        y2="50" // end coordinate y
                        stroke="red"
                        strokeWidth="2"
                    />
                </Svg>
            </View>
        )
    }

    private onPageLayout = (event) => {
        const { width, height } = event.nativeEvent.layout
        console.log(width, height)
        this.setState({ width, height })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
})

export default PatternLockComponent
