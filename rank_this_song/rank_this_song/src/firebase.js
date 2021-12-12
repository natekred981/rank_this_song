import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase";


const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCJSFpxlh7JNCSAiq7c9lSsi-20hiWCbPA",
    authDomain: "song-bracket.firebaseapp.com",
    databaseURL: "https://song-bracket.firebaseio.com",
    projectId: "song-bracket",
    storageBucket: "song-bracket.appspot.com",
    messagingSenderId: "731167469343",
    appId: "1:731167469343:web:eb53b8a059e1c2ef678a2a",
    measurementId: "G-1DH5J9B0EP"
  });

const db = firebaseConfig.firestore();
const firestore_fields = db.collection('bands').doc('band_stats');

export const GetArtist_Firestore = async (band_name) => {
  const get_firestore_fields = await firestore_fields.get();
  let artist_object = get_firestore_fields.data().artists

  if (band_name in artist_object){
    artist_object[band_name] += 1;
  }
  else {
    artist_object[band_name] = 1;
  }
  const update_artist = await firestore_fields.update({artists: artist_object});
  return (update_artist,artist_object[band_name]);
};

export const GetWinner_Firestore = async (winner) => {
  const get_firestore_fields = await firestore_fields.get();
  const winnerObject = get_firestore_fields.data().Winners;
  if (!winner){
    return
  }
  if (winner in winnerObject){
    winnerObject[winner] += 1;
  }
  else {
    winnerObject[winner] = 1;
  }
  const update_winner = await firestore_fields.update({Winners: winnerObject});
  return update_winner
};

 
 
        