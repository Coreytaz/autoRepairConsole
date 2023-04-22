
import { Router } from '~pages'

import { Toaster } from '~shared/ui'

import { AuthProvider } from '~shared/lib/auth'

import { withProviders } from './providers'
import { AppProps } from './types'


import './index.scss'


function App() {
  return (
    <AuthProvider
      authType="cookie"
      authName="_auth"
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https:"}>
      <Router />
      <Toaster />
    </AuthProvider>
  )
}

const ProvidedApp: React.FC<AppProps> = withProviders(App);

export { ProvidedApp as App };
