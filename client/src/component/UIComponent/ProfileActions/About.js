import { connect } from 'react-redux'
import React, { Component } from 'react';
import * as action from '../../../Action';
class About extends Component {
    constructor(props) {
        super(props)
    
this.dataChanged = this.dataChanged.bind(this);
this.state = {
    message: '',
    isEnble: false,
    btnEdit: 'Edit',
    textInput: ''
}
}

componentDidMount() {
    const text = {
        UserId: this.props.user.googleId
    }
    this.props.ProfileGet(text.UserId)

}
async dataChanged(isEnble, e) {
    e.preventDefault();
    if (!this.state.isEnble) {
        const text = {
            UserId: this.props.user.googleId
        }
        this.props.ProfileGet(text.UserId)
        this.setState({
            isEnble: true,
            btnEdit: 'Update'
        })
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
        const text = {
            UserId: this.props.user.googleId
        }
        const data = await this.props.ProfileUpdate(userDetails);
        this.setState({ message: this.props.update.About })
    }
}

RenderValue(isEnble) {

    if (isEnble) {

        return (<textarea defaultValue={this.props.update.About} ref={(input) => { this.state.textInput = input; }}></textarea>)
    }
    return this.props.update != null ? this.props.update.About : (false);
    // : 
}
    render() {
        return (
      
                        <div className="card light-blue">
                            <div className="card-content white-text">
                                <span className="card-title">About Me!</span>
                                <button className="edit-btn-about" onClick={(e) => { this.dataChanged(this.state.isEnble,e) }}>{this.state.btnEdit}</button>
                                <p>
                                    {this.RenderValue(this.state.isEnble)}
                                </p>
                                <div className="card-action white-text">
                                </div>
                            </div>
                        </div>
                   
        )

    }


}
const mapStateToProps = state => ({
    user: state.auth,
    update: state.updateProfile
})
export default connect(mapStateToProps, action)(About);