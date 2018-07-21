import * as PropTypes from 'prop-types'
import * as React from 'react'
import * as CSSModules from 'react-css-modules'
const styles = require('./LoadingPage.scss')

interface Props {
  error: boolean
  timedOut: boolean
  pastDelay: boolean
}

const LoadingPage: React.StatelessComponent<Props> = ({ error, timedOut, pastDelay }: Props): JSX.Element => {
  let loadingText
  if (error) {
    loadingText = 'Error!'
  } else if (timedOut) {
    loadingText = 'Taking a long time...'
  } else if (pastDelay) {
    loadingText = 'Loading...'
  } else {
    return null
  }
  return (
    <div styleName='loadingPage'>
      {loadingText}
    </div>
  )
}

LoadingPage.propTypes = {
  error: PropTypes.bool,
  timedOut: PropTypes.bool,
  pastDelay: PropTypes.bool,
}

LoadingPage.defaultProps = {
  error: false,
  timedOut: false,
  pastDelay: false,
}

export default CSSModules(LoadingPage, styles)
