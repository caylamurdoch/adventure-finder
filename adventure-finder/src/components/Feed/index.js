import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { PasswordForgetLink } from '../PasswordForget';
import { SignUpLink } from '../SignUp';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import styles from '../SignIn/SignIn.module.css';

const FeedPage = () => (
    <div className={styles["container-login"]}>
        <div className={styles["wrap-login"]}>
            <h1>FeedPage</h1>
            <Feed />
        </div>
    </div>
);

const INITIAL_STATE = {
    posts: []
};

class Feed extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    componentDidMount() {
        fetch('/users/posts')
            .then(res => res.json())
            .then(posts => this.setState({ posts }));
        console.log(this.state.posts);
    }

    render() {
        return (
            <div>
                <h1>Feed</h1>
                {this.state.posts.map(post => <div key={post.id}><h3>{post.title}</h3></div>)}
            </div>
        );
    }
}

export default FeedPage;

export { Feed };