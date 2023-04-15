import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCJpaDZ6KH3MQmjpyznuKL40JGWlIGFMc0',
  authDomain: 'pokemon-app-5c6a3.firebaseapp.com',
  projectId: 'pokemon-app-5c6a3',
  storageBucket: 'pokemon-app-5c6a3.appspot.com',
  messagingSenderId: '29714065266',
  appId: '1:29714065266:web:8ecd80e4a13f4d30705feb'
}
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export const getTeams = callback => {
  const q = query(collection(db, 'teams'), orderBy('name', 'asc'))
  onSnapshot(q, snapshot => {
    let teams = []
    snapshot.forEach(doc => {
      teams.push({ id: doc.id, ...doc.data() })
    })
    callback(teams)
  })
}

export const addTeam = team => {
  addDoc(collection(db, 'teams'), team)
}

export const updateTeam = team => {
  updateDoc(doc(db, 'teams', team.id), team)
}

export const deleteTeam = team => {
  deleteDoc(doc(db, 'teams', team.id))
}
