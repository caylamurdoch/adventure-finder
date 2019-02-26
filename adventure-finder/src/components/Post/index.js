import React, { Component } from 'react';
import './Post.css';
import styles from './Post.module.css';
import * as ROUTES from "../../constants/routes";
import {withRouter} from "react-router-dom";
import {withFirebase} from "../Firebase";

const AddPostPage = () => (
    <div className={styles["container-add"]}>
        <div className={styles["wrap-add"]}>
            <h1>Add Adventure</h1>
            <PostForm />
        </div>
    </div>
);

const INITIAL_STATE = {
    displayErrors: '',
    title: '',
    description: '',
    imageURL: '',
    cost: '',
    location: '',
    likes: 0
};

class RoutePostForm extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = { ...INITIAL_STATE };
    }

    onSubmit(event) {
        if (!event.target.checkValidity()) {
            this.setState({ displayErrors: true });
            return;
        }
        this.setState({ displayErrors: false });
        this.setState({ ...INITIAL_STATE });

        const post = {
            uuid: '',
            title: this.state.title,
            description: this.state.description,
            image_url: this.state.imageURL,
            cost: this.state.cost,
            place: this.state.location,
            likes: 0
        };
        console.log("making post request with val: ",post);

        //put in database
        fetch('http://localhost:3001/users/posts', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log("made post request");
        this.props.history.push(ROUTES.HOME);
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { displayErrors, title, imageURL, cost, location, description } = this.state;

        return (
            <form
                onSubmit={this.onSubmit}
                className={displayErrors ? 'displayErrors' : ''}
                noValidate
            >
                <input
                    id="title"
                    name="title"
                    type="text"
                    value={title}
                    placeholder="Title"
                    onChange={this.onChange}
                    required
                />
                <input
                    id="imageURL"
                    name="imageURL"
                    type="url"
                    value={imageURL}
                    placeholder="Image URL"
                    onChange={this.onChange}
                    required
                />
                <input
                    id="cost"
                    name="cost"
                    type="number"
                    value={cost}
                    placeholder="Cost"
                    data-parse="cost"
                    onChange={this.onChange}
                    required
                />
                <input
                    id="location"
                    name="location"
                    type="text"
                    value={location}
                    placeholder="Location"
                    onChange={this.onChange}
                    required
                />
                <input
                    id="description"
                    name="description"
                    type="text"
                    value={description}
                    placeholder="Description"
                    onChange={this.onChange}
                    required
                />
                <button>Add Post</button>
            </form>
        );
    }
}

const PostForm = withRouter(withFirebase(RoutePostForm));
export default AddPostPage;
export { PostForm };
