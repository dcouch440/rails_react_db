import React from 'react'
import ReactDOM from 'react-dom'
import App from '../src/App'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import {ContextProvider as Provider} from '../src/Context'




document.addEventListener(
  'DOMContentLoaded', () => {

    const setRoot = () => {
      const root = document.createElement('div');
      root.id = 'root';
      return root;
    }
    ReactDOM.render(
      <Provider>
        <Router>
          <Route path='/' component={App} />
        </Router>
      </Provider>,
      document.body.appendChild(setRoot())
    )
  }
)

