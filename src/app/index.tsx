import { Router } from '~pages'

import { withProviders } from './providers'
import { AppProps } from './types'

import './index.scss'


function App() {
  return (
    <Router />
  )
}

const ProvidedApp: React.FC<AppProps> = withProviders(App);

export { ProvidedApp as App };
