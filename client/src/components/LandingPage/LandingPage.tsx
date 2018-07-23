import * as React from 'react'
import * as CSSModules from 'react-css-modules'
const styles = require('./LandingPage.scss')

class LandingPage extends React.Component<{}, {}> {
  render() {
    return (
      <div styleName='landingPage'>
        ParkBnb
      </div>
    )
  }
}

export default CSSModules(LandingPage, styles)
