import {config} from '../../config/default.js';
import React from 'react';
import { FirebaseAuth } from 'react-firebaseui';
import firebase from 'firebase';
import {Translate} from '../lang/Translate';
import {userLink} from '../userLink';
import './firebaseui-overrides.global.css';
import './UserAccess.css';

// Configure Firebase.
firebase.initializeApp(config.firebase);

class SignInScreen extends React.Component {
  
  uiConfig = {
    signInFlow: 'redirect',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: userLink.signInSuccessCallback
    }
  };
  
  render() {
      return (
        <div className="wrapper">
          <div className="panel">
            <h1><Translate word='APP_NAME'/></h1>
            <div className="social">
              <FirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
            </div>
          </div>
          <div className="panel">
            <h2><Translate word='FIRST_TITLE'/></h2>
            <p><Translate word='FIRST_PARAGRAPH'/></p>
            <h2><Translate word='SECOND_TITLE'/></h2>
            <p><Translate word='SECOND_PARAGRAPH'/></p>
            <h2><Translate word='THIRD_TITLE'/></h2>
            <p><Translate word='THIRD_PARAGRAPH'/></p>
            <a href="https://github.com/wjsc" rel="noopener noreferrer" target="_blank">https://github.com/wjsc</a>
          </div>
        </div>
      );
  }
}

export default SignInScreen;