import './App.css'
import CakeContainer from './components/CakeContainer'
import store from './redux/Store'

import { Provider } from 'react-redux'
import HooksCakeContainer from './components/HooksCakeContainer'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h6>Hook component</h6>
        <HooksCakeContainer />
        <hr />
        <h6>Standard component</h6>
        <CakeContainer />
      </div>
    </Provider>
  )
}

export default App
