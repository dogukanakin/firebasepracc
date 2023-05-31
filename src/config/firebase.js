// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyC86TznDZTMUXEnDXeQRCQKwAoQgywjkF0',
  authDomain: 'firabaseprac.firebaseapp.com',
  projectId: 'firabaseprac',
  storageBucket: 'firabaseprac.appspot.com',
  messagingSenderId: '1027125698528',
  appId: '1:1027125698528:web:4f8bdddbc69e77552a9585',
  measurementId: 'G-E5Y4WR8243'
}

// Initialize Firebase

export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const db = getFirestore(app)
export const auth = getAuth(app)
