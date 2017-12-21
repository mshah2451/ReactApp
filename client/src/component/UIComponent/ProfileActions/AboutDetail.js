import React,{Component}from 'react';
import  BtnEditUpdate from './Actions/BtnEditUpdate'

class AboutDetails extends Component{
    btnEditUpdate(key)
    {
        return <BtnEditUpdate key={key}/>
    }
    render(){
        return(
            <ul id="profile-page-about-details" className="collection z-depth-1">
            <li className="collection-item">
              <div className="row">
                <div className="col s5 grey-text darken-1"><i className="mdi-action-wallet-travel"></i> Project</div>
                <div className="col s7 grey-text text-darken-4 right-align">ABC Name {this.btnEditUpdate('Project')} </div>
                
              </div>
            </li>
            <li className="collection-item">
              <div className="row">
                <div className="col s5 grey-text darken-1"><i className="mdi-social-poll"></i> Skills</div>
                <div className="col s7 grey-text text-darken-4 right-align">HTML, CSS{this.btnEditUpdate('Skills')}</div>
              </div>
            </li>
            <li className="collection-item">
              <div className="row">
                <div className="col s5 grey-text darken-1"><i className="mdi-social-domain"></i> Lives in</div>
                <div className="col s7 grey-text text-darken-4 right-align">NY, USA {this.btnEditUpdate('Lieves')}</div>
              </div>
            </li>
            <li className="collection-item">
              <div className="row">
                <div className="col s5 grey-text darken-1"><i className="mdi-social-cake"></i> Birth date</div>
                <div className="col s7 grey-text text-darken-4 right-align">18th June, 1991 {this.btnEditUpdate('DOB')}</div>
              </div>
            </li>
          </ul>
        )
    }
}
export default AboutDetails