import React, { Component } from 'react';
import {UserDetails,About} from './ProfileActions'
class Profile extends Component {
    render() {
        return (
            <section id="content">

                <div className="container">
                    <div id="profile-page" className="section">
                        <UserDetails />
                        <About/>
                    </div>
                </div>
            </section>
        )
    }
}
export default (Profile)