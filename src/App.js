import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Main from './components/index'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store'

function App() {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Main />
                </BrowserRouter>
            </Provider>
        </>
    )
}

export default App
