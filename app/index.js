import 'bootstrap/dist/css/bootstrap.min.css'

import debug from 'debug'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Main from 'components/Main'
import reducer from 'reducers'
import env from '../env.json';
import Parse from 'parse';

const log = debug('application:bootstrap')

log('initializing parse')
Parse.initialize(env.PARSE_APP_ID, env.PARSE_KEY);

log('creating application dom node')
const applicationNode = document.createElement('div')
applicationNode.className = 'container'
applicationNode.id = 'application'

log('adding application node to body')
document.body.appendChild(applicationNode)

let store = createStore(reducer)

const app = (
  <Provider store={ store }>
    <Main />
  </Provider>
)

render(app, applicationNode, () => {
  log('finished mounting application')
})
