import * as React from 'react'
import * as Loadable from 'react-loadable'
import { Redirect, Route, Switch } from 'react-router-dom'

import LoadingPage from './components/LoadingPage/LoadingPage'

interface LoadableRoute {
  path: string
  loader: () => Promise<any>
}

const routes: LoadableRoute[] = [
  {
    path: '/',
    loader: (): Promise<any> => import('./components/LandingPage/LandingPage'),
  },
]

const Routes = (
  <Switch>
    {routes.map(({ path, loader }: LoadableRoute) => (
      <Route
        key={path}
        exact={true}
        path={path}
        component={
          Loadable({
            loader,
            loading: LoadingPage,
            delay: 1000, // 1 second
            timeout: 5000, // 5 seconds
          })
        } />
    ))}
    <Route
      path='/*'
      render={(): JSX.Element => <Redirect to='/'/>} />
  </Switch>
)

export default Routes
