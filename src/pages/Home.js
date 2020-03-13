import React from 'react'
import {Welcome, WelcomeOptions} from '../components/Home/WelcomeNew';
import {UserHome, UserHomeOptions} from '../components/Home/WelcomeUser';


const Home = ({ user }) => {

    if (user) {
        return (
            <div className="">
                <UserHome />
                <UserHomeOptions />
            </div>
        )
    }
    return (
        <div className="">
            <Welcome />
            <WelcomeOptions />
        </div>
    )
}

export default Home