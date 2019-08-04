import { Font } from 'expo'
// import { Provider } from 'mobx-react'
import { Container, Content, StyleProvider } from 'native-base'
import React, { useEffect } from 'react'
import styles from './App.css'
import PartFooter from './src/Components/Parts/PartFooter'
import PartHeader from './src/Components/Parts/PartHeader'
import { Route, Router } from './src/Core/Routes'
import routes from './src/Core/Routes/AllRoutes'
// import stores from './src/Core/Store'
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
      {/* <Provider {...stores}> */}
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
          <PartFooter />
        </Container>
      </Router>
      {/* </Provider> */}
    </StyleProvider >
  )
}

export default App
