import './App.css'
import { Provider } from 'react-redux'
import { store } from './store'
import { Auth } from './components/Auth'
import Tasklist from './components/Tasklist'

function App() {

  return (
    <Provider store={store}>
      <div className='app'>
        <Auth/>
        {/* <Tasklist/> */}
      </div>
    </Provider>
  )
}

export default App
