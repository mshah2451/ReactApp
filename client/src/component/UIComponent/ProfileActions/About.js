import { connect } from 'react-redux'
import React, { Component } from 'react';
import * as action from '../../../Action';
class About extends Component {
    constructor(props) {
        super(props)
        this.dataChanged = this.dataChanged.bind(this);
        //this.RenderValue=this.RenderValue.bind(this);
        this.state = {
            message: 'ReactInline demo',
            isEnble: false,
            btnEdit: 'Edit',
            textInput:''
        }
    }
    dataChanged(isEnble) {
        if (!this.state.isEnble) {
            debugger
            this.setState({
                isEnble: true,
                btnEdit: 'Update'
            })
this.props.ProfileGet(this.props.user.googleId);

        }
        else {
            this.setState({
                isEnble: false,
                btnEdit: 'Edit'
            })
            const userDetails = {

                UserId: this.props.user.googleId,
                About: this.state.textInput.value,
                Phone: '',
                Email: ''
            };
            this.props.ProfileUpdate(userDetails);
        }
    }

    RenderValue(isEnble) {
        if (isEnble) {
            debugger;
            return (<textarea ref={(input) => { this.state.textInput = input; }}></textarea>)
        }
        return (this.state.message);
    }

  

    render() {
        return (
            <div>
                <div id="profile-page-content" className="row">
                    <div id="profile-page-sidebar" className="col s12 m4">
                        <div className="card light-blue">
                            <div className="card-content white-text">
                                <span className="card-title">About Me!</span>
                                <button className="edit-btn-about" onClick={() => { this.dataChanged(this.state.isEnble) }}>{this.state.btnEdit}</button>
                                <p>
                                    {this.RenderValue(this.state.isEnble)}
                                </p>
                                <div className="card-action white-text">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }


}
const mapStateToProps = state => ({
    user: state.auth
})
export default connect(mapStateToProps, action)(About);