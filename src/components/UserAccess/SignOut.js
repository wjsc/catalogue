import React from 'react';
import { Link } from 'react-router-dom'
import {userLink} from '../userLink';

class SignOut extends React.Component {
     
    render() {
        return (
            <Link to="/logout"><span onClick={userLink.signOut}>SignOut</span></Link>
        );
    }
  }
  
  export default SignOut;