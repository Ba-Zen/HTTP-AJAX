import React from 'react';
import './FriendsList.css';

const FriendsList = props => {
    console.log(props)
    return(
        <div>{props.friends.map(friend => (
            <div className="friend-card-container">
                <div className="friend-card">
            <h3>Name: {friend.name}</h3>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
            </div>
            </div>
            ))}
            <form className="form">
                <h2>Friend Form</h2>
                <h3>Name</h3>
                <input className="input" placeholder="Name"/>
                <h3>Age</h3>
                <input className="input" placeholder="Age"/>
                <h3>Email</h3>
                <input className="input" placeholder="Email"/>
                <div className="submit-div">
                <button className="submit-btn">Submit</button>
                </div>
            </form>
            </div>
    )
}

export default FriendsList;