import React from 'react';
import { FirebaseAuth } from 'react-firebaseui';
import firebase from 'firebase';
import {config} from '../../config/default.js';

// Configure Firebase.
firebase.initializeApp(config.firebase);

class SignInScreen extends React.Component {
  
  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    // redirect || popup
    signInFlow: 'redirect',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID
    ],
    // Sets the CatalogueApp `signedIn` state property to `true` once signed in.
    callbacks: {
      signInSuccess: this.props.signInSuccessCallback
    }
  };
  
  render() {
      return (
        <div>
          <h1>Catalogue Music</h1>
          <FirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
      );
  }
}

export default SignInScreen;