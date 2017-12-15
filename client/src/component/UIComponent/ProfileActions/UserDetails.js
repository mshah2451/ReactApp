import React from 'react';
import { connect } from 'react-redux'
const UserDetails=(props)=> {
    if (props.user)   {
      
        return  ( 
                  <div id="profile-page-header" className="card">
                      <div className="card-image waves-effect waves-block waves-light">
                          {/* <img className="activator" src="" alt="user background" /> */}
                      </div>
                      <figure className="card-profile-image">
                          <img src={props.user.image.url} alt="profile images" className="circle z-depth-2 responsive-img activator"/>
                      </figure>
                      <div className="card-content">
                        <div className="row">                    
                          <div className="col s3 offset-s2">                        
                               <h4 className="card-title grey-text text-darken-4">{props.user.displayName}</h4>
                              <p className="medium-small grey-text">Project Manager</p>                        
                          </div>
                          <div className="col s2 center-align">
                              <h4 className="card-title grey-text text-darken-4">10+</h4>
                              <p className="medium-small grey-text">Work Experience</p>                        
                          </div>
                          <div className="col s2 center-align">
                              <h4 className="card-title grey-text text-darken-4">6</h4>
                              <p className="medium-small grey-text">Completed Projects</p>                        
                          </div>                    
                          <div className="col s2 center-align">
                              <h4 className="card-title grey-text text-darken-4">$ 1,253,000</h4>
                              <p className="medium-small grey-text">Busness Profit</p>                        
                          </div>                    
                          <div className="col s1 right-align">
                            <a className="btn-floating activator waves-effect waves-light darken-2 right">
                                <i className="mdi-action-perm-identity"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    
                  </div>
              )
   
    }
    return false;
}
const mapStateToProps = state => ({
    user: state.auth
})
export default connect(mapStateToProps) (UserDetails);