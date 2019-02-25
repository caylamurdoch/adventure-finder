import React from 'react';
import styles from '../Navigation/Navigation.module.css';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
    <button className={styles.navSignOut} type="button" onClick={firebase.doSignOut}>
        Sign Out
    </button>
);

export default withFirebase(SignOutButton);