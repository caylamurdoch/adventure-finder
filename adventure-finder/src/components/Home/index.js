import React from 'react';

import { withAuthorization } from '../Session';
import FeedPage from "../Feed";

const HomePage = () => (
    <div>
        <FeedPage/>
    </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);