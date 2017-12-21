import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../../../Action';
class BtnEditUpdate extends Component {
  constructor(props){
      super();
//       debugger
// console.log(this.props)
//   }
// btnCall(value)
// {
//     debugger
// console.log(value)
// }

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
    return (<div>{this.RenderValue()}
    <span className="edit badge" onClick={() => { this.btnCall(this.props) }}>edit</span>
    </div>
)
}
}
const mapStateToProps = state => ({
    user: state.auth,
    update: state.updateProfile
})

export default  connect(mapStateToProps, action)(BtnEditUpdate)
