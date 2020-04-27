import React, { Component } from 'react';
import firebase from 'firebase';
import { Alert } from 'reactstrap';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import '../css/Login.css';
import { ROFLIX_APP_LOGGEDIN } from '../utils/helpers';
// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,

    ],
    callbacks: {
        signInSuccessWithAuthResult : () => {
            console.log('connexion reussie');
            localStorage.setItem(ROFLIX_APP_LOGGEDIN, true);
            return true;
        }
    }
};
class Login extends Component {
    render() {
        return (
            <div className='login'>
                <Alert color="primary">
                    <h3>VOUS DEVEZ VOUS CONNECTER</h3>
                </Alert>
                <StyledFirebaseAuth
                    uiConfig={uiConfig}
                    firebaseAuth={firebase.auth()}
                    uiCallback={ui => ui.disableAutoSignIn()}
                />
            </div>
        )
    }
}

export { Login };