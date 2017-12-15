import React,{Component} from 'react';
import {connect} from 'react-redux'
//import { BrowserRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
 class Header extends Component{
  renderdocumnent(){
    switch(this.props.auth){
      case null:return 'Not Found';
      case false: return <li key="0"><a href="/auth/google">Login With Google</a></li>;
      default:
    return[<li key="1"><a href="/api/logout">Logout</a></li>];
    }
  }
  render(){
        return(
            <nav>
            <div className="nav-wrapper">
            <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="left brand-logo"
          >
          Logo
          </Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
               {this.renderdocumnent()}
              </ul>
            </div>
          </nav>     
        )
    }
}
function mapStateToProps ({auth}){
return{auth};
}
export default connect(mapStateToProps)(Header);
