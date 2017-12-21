import React, { Component } from 'react';
import { UserDetails, About, UpdateStatus,AboutDetails } from './ProfileActions'
class Profile extends Component {
    render() {
        return (
            <div id="main">
                <div className="wrapper">


                    <section id="content">

                        <div className="container">
                            <div id="profile-page" className="section">
                                <UserDetails />


                                <div id="profile-page-content" className="row">
                                    <div id="profile-page-sidebar" className="col s12 m4">
                                        <About />
                                        <AboutDetails/>
                                    </div>
                                    <div >
                                        <UpdateStatus />
                                    </div>
                                </div>

                            </div>
                        </div>

                    </section>
                </div>
            </div>
        )
    }
}
export default (Profile)