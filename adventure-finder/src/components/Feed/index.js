import React, { Component } from 'react';
import styles from './Feed.module.css';

const FeedPage = () => (
    <div className={styles["container-feed"]}>
        <div className={styles["wrap-feed"]}>
            <Feed />
        </div>
    </div>
);

const INITIAL_STATE = {
    posts: [],
    reversed: false
};

class Feed extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    componentDidMount() {
        fetch('http://localhost:3001/users/posts')
            .then(res => res.json())
            .then(posts => this.setState({ posts }));
        console.log(this.state.posts);
    };

    render() {
        return (
            <div>
                {!this.state.reversed && this.state.posts.reverse().map(post =>
                    <div>
                        {this.state.reversed = true}
                        <Post {...post}/>
                    </div>
                ) || this.state.reversed && this.state.posts.map(post =>
                    <Post {...post}/>)}
            </div>
        );
    }
}

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
});

const Post = (post) => (
    <div className={styles.post} key={post.id}>
        <h4 className={styles.title}>{post.title}</h4>
        <div class="row">
            <div class="col-sm-6">
                <div className={styles["image-cropper"]}>
                    <img className={styles.img} src={post.image_url} alt="post image" />
                </div>
            </div>
            <div class="col-sm-6">
                <div className={styles.stats}>
                    <p><b>Adventure Stats</b></p>
                    <p>Cost: {formatter.format(post.cost)}</p>
                    <p>Location: {post.place}</p>
                    <div className={styles["short-separator"]} />
                    <p>{post.description}</p>
                </div>
            </div>
        </div>
        <div className={styles.separator} />
    </div>
);

export default FeedPage;

export { Feed };