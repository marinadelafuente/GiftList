import React from 'react';
import GiftIdea from './GiftIdea';

function Profile() {
    return (
        <React.Fragment>
            <h2>New Friend Page</h2>
            <form>
                <input type="text"></input>
            </form>
            <GiftIdea />
        </React.Fragment>
    )
}

export default Profile;