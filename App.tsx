import { Font } from 'expo'
import { Body, Button, Container, Content, Header, Icon, Left, Right, StyleProvider, Title, View } from 'native-base'
import React, { useEffect } from 'react'
import styles from './App.css'
import { Route, Router } from './src/Core/Routes'
import routes from './src/Core/Routes/AllRoutes'
import getTheme from './src/NativeBaseTheme/components'

// console.log(styles)
// TODO(developing): remove this row or add some comment on why this line is there
const s = styles

const App = () => {
  useEffect(() => {
    loadFonts()
  }, [])

  const loadFonts = async () => {
    await Font.loadAsync({
      // Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      // MaterialIcons: require('native-base/Fonts/MaterialIcons.ttf'),
      MaterialCommunityIcons: require('native-base/Fonts/MaterialCommunityIcons.ttf'),
    })
  }

  return (
    <StyleProvider style={getTheme()}>
      <Router>
        <Container style={{ height: '100%' }}>
          <Header>
            <Left>
              <Button transparent>
                <Icon name="chevron-left" />
              </Button>
            </Left>
            <Body>
              <Title>Logins sample</Title>
            </Body>
            <Right>
              <Button transparent>
                <Icon name="menu" />
              </Button>
            </Right>
          </Header>
          <Content>
            <View className="container">
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
          </Content>
        </Container>
      </Router>
    </StyleProvider >
  )
}

export default App
