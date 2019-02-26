import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import styles from "./Account.module.css";

const AccountPage = () => (
    <AuthUserContext.Consumer>
        {authUser => (
            <div className={styles["container-account"]}>
                <div className={styles["wrap-account"]}>
                    <h1>Account Info</h1>
                    <p>Email: {authUser.email}</p>
                    {/*<PasswordForgetForm />*/}
                    <PasswordChangeForm />
                </div>
            </div>
        )}
    </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);