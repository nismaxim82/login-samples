import { Svg } from 'expo'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const { Line } = Svg

interface IPatternLockState {
    width: number,
    height: number,
}

class PatternLockComponent extends React.Component<{}, IPatternLockState> {
    constructor(props: any) {
        super(props)

        this.state = {
            width: 0,
            height: 0,
        }
    }
    public onPageLayout = (event) => {
        const { width, height } = event.nativeEvent.layout
        console.log(width, height)
        this.setState({ width, height })
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
        )//
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
})

export default PatternLockComponent
