import React from 'react'
import {Welcome, WelcomeOptions} from '../components/Home/WelcomeNew';
import WelcomeUser from '../components/Home/WelcomeUser';


const Home = ({ user }) => {

    if (user) {
        return (
            <div className="">
                <WelcomeUser />
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