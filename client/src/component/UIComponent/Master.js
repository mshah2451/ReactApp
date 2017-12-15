import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Profile from './Profile';
import Landing from './Landing';
import { connect } from 'react-redux';
class Master extends Component {
    RenderComponets() {
        if (this.props.auth) {
            return (
               <div>
                    <Route exact path='/' component={Profile} />
                    <Route exact path='/profile' component={Profile} />
                    </div>
            )
        }
        else {
            return (
           
                    <Route exact path='/' component={Landing} />
          )
        }
    }
    render() {
        return (
            <BrowserRouter>
            <div>
              <Header key={0} />
              {this.RenderComponets()}
              <Footer />
              </div>
            </BrowserRouter>
        )
    }
}
function mapStateToProps ({auth}){
    return{auth};
    }
export default connect(mapStateToProps,null)(Master)