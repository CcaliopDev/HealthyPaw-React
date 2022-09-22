import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyDKk4NeQVYCH-kZ96moy4dSCgy1YJPC_l0',
  authDomain: 'healthypaw-react.firebaseapp.com',
  projectId: 'healthypaw-react',
  storageBucket: 'healthypaw-react.appspot.com',
  messagingSenderId: '27371388974',
  appId: '1:27371388974:web:51d3d50257d74c96821fbf',
}

// Initialize Firebase
initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <App />
  </>,
)
