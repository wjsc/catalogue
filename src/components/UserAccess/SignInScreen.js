import {config} from '../../config/default.js';
import React from 'react';
import { FirebaseAuth } from 'react-firebaseui';
import firebase from 'firebase';
import {userLink} from '../userLink';
import './firebaseui-overrides.global.css';
import './UserAccess.css';

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
      signInSuccess: userLink.signInSuccessCallback
    }
  };
  
  render() {
      return (
        <div className="wrapper">
          <div className="panel">
            <h1>Catalogue Music</h1>
            <div className="social">
              <FirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
            </div>
          </div>
          <div className="panel">
            <h2>Access</h2>
            <p>Log in with your social network of choice and start playing with zero cost from now and forever.</p>
            <h2>Artists</h2>
            <p>We are working to involve the artists and collaborate with them in reaching their audience. We believe in the possibility of a self-sustainable platform and in the commitment between users and musicians.</p>
            <h2>Technology</h2>
            <p>Our goal is to offer a premium quality service with minimum latency and cutting-edge technology.</p>
            <a href="https://github.com/wjsc" rel="noopener noreferrer" target="_blank">https://github.com/wjsc</a>
          </div>
        </div>
      );
  }
}

export default SignInScreen;