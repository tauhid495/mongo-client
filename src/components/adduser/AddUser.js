import React from 'react';

const AddUser = () => {

    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;

        const user = { name, email };
        //send data to the server


    }

    return (
        <div>
            <h2>Please add a new user</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' required placeholder='Your Name' /> <br />
                <input type="email" name='email' required placeholder='Your email' />
                <br /> <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default AddUser;