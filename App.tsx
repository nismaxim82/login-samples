import { Font } from 'expo'
import { Button, Container, Content, Footer, FooterTab, StyleProvider, Thumbnail } from 'native-base'
import React, { useEffect } from 'react'
import styles from './App.css'
import PartHeader from './src/Components/Parts/PartHeader'
import { Route, Router } from './src/Core/Routes'
import routes from './src/Core/Routes/AllRoutes'
import getTheme from './src/NativeBaseTheme/components'

// TODO(developing): remove this row or add some comment on why this line is there
const s = styles

const App = () => {
  useEffect(() => {
    loadFonts()
  }, [])

  const loadFonts = async () => {
    await Font.loadAsync({
      // Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto.ttf'),
      // MaterialIcons: require('native-base/Fonts/MaterialIcons.ttf'),
      MaterialCommunityIcons: require('native-base/Fonts/MaterialCommunityIcons.ttf'),
    })
  }

  return (
    <StyleProvider style={getTheme()}>
      <Router>
        <Container style={{ height: '100%' }}>
          <PartHeader />
          <Content>
            {
              routes.map((route, i) =>
                <Route
                  key={i}
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                />)
            }
          </Content>
          <Footer>
            <FooterTab>
              <Button>
                <Thumbnail square
                  source={{ uri: require('./src/Images/fingerprint.png') }}
                  className="footer__icon"
                />
              </Button>
              <Button>
                <Thumbnail square
                  source={{ uri: require('./src/Images/pattern_lock.png') }}
                  className="footer__icon"
                />
              </Button>
              <Button>
                <Thumbnail square
                  source={{ uri: require('./src/Images/face_recognition.png') }}
                  className="footer__icon"
                />
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </Router>
    </StyleProvider >
  )
}

export default App
