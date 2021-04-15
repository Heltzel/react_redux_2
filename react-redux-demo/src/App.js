import './App.css'
import CakeContainer from './components/CakeContainer'
import store from './redux/Store'

import { Provider } from 'react-redux'
import HooksCakeContainer from './components/HooksCakeContainer'
import IcecreamContainer from './components/IcecreamContainer'
import NewCakeContainer from './components/NewCakeContainer'
import ItemContainer from './components/ItemContainer'
import UserContainer from './components/UserContainer'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake />
        <ItemContainer />
        <hr />
        <h6>Hook component</h6>
        <HooksCakeContainer />
        <hr />
        <h6>Standard component</h6>
        <CakeContainer />
        <hr />
        <IcecreamContainer />
        <hr />
        <NewCakeContainer />
        <hr />
        <UserContainer />
      </div>
    </Provider>
  )
}

export default App
