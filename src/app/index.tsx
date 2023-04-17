import { Router } from '~pages'

import { Toaster } from '~shared/ui'

import { withProviders } from './providers'
import { AppProps } from './types'


import './index.scss'


function App() {
  return (
    <>
      <Router />
      <Toaster />
    </>
  )
}

const ProvidedApp: React.FC<AppProps> = withProviders(App);

export { ProvidedApp as App };
