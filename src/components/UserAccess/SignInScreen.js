import {config} from '../../config/default.js';
import React from 'react';
import { FirebaseAuth } from 'react-firebaseui';
import firebase from 'firebase';
import './firebaseui-overrides.global.css';
import './SignInScreen.css';

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
        <div className="wrapper">
          <div className="panel">
            <h1>Catalogue Music</h1>
            <div className="social">
              <FirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
            </div>
          </div>
          <div className="panel">
            <h2>Access</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus culpa numquam eius sed deserunt enim corporis natus repellendus animi tempora, nemo, quos illo adipisci eos aspernatur magnam beatae odit cupiditate?</p>
            <h2>Artists</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus culpa numquam eius sed deserunt enim corporis natus repellendus animi tempora, nemo, quos illo adipisci eos aspernatur magnam beatae odit cupiditate?</p>
            <h2>Technology</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus culpa numquam eius sed deserunt enim corporis natus repellendus animi tempora, nemo, quos illo adipisci eos aspernatur magnam beatae odit cupiditate?</p>
            <a href="https://github.com/wjsc" target="_blank">https://github.com/wjsc</a>
          </div>
        </div>
      );
  }
}

export default SignInScreen;