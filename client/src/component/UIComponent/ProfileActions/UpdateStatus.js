import React, { Component } from 'react'



class UpdateStatus extends Component {
 constructor()
 {
     super()
     this.state={
        ActiveClass:"",
        isEnble:true
            }
 }
 active(isActive){
     debugger
     const val=document.getElementById("textarea").value
    // const val= this.state.ActiveClass

    if(isActive || val.lenght>0)
    {

     this.setState({
        ActiveClass:"active",
        isEnble:false
     })
    }
    // else if( isActive ){
    //     this.setState({
    //         ActiveClass:"active",
    //         isEnble:false
    //      })

    else{
        this.setState({
            ActiveClass:""
         })
         
    }
 }
   
    render(){
        return(
            <div id="profile-page-wall" className="col s12 m8">
            {/* <!-- profile-page-wall-share --> */}
            <div id="profile-page-wall-share" className="row">
              <div className="col s12">
                <ul className="tabs tab-profile z-depth-1 light-blue" style={{width: '100%'}}>
                  <li className="tab col s3"><a className="white-text waves-effect waves-light active" href="#UpdateStatus"><i className="mdi-editor-border-color"></i> Update Status</a>
                  </li>
                  <li className="tab col s3"><a className="white-text waves-effect waves-light" href="#AddPhotos"><i className="mdi-image-camera-alt"></i> Add Photos</a>
                  </li>
                  <li className="tab col s3"><a className="white-text waves-effect waves-light" href="#CreateAlbum"><i className="mdi-image-photo-album"></i> Create Album</a>
                  </li>                      
                <div className="indicator" style={{right: '648px' ,left:' 0px'}}></div></ul>
                {/* <!-- UpdateStatus--> */}
                <div id="UpdateStatus" className="tab-content col s12  grey lighten-4">
                  <div className="row">
                    <div className="col s2">
                      {/* <img src="images/avatar.jpg" alt="" className="circle responsive-img valign profile-image-post"> */}
                    </div>
                    <div className="input-field col s10">
                      <textarea id="textarea" row="2" className="materialize-textarea" onFocus={()=>{this.active(this.state.isEnble)}} ></textarea>
                      <label htmlFor="textarea" className={this.state.ActiveClass}>What's on your mind?</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s12 m6 share-icons">
                      <a href="#"><i className="mdi-image-camera-alt"></i></a>
                      <a href="#"><i className="mdi-action-account-circle"></i></a>
                      <a href="#"><i className="mdi-hardware-keyboard-alt"></i></a>
                      <a href="#"><i className="mdi-communication-location-on"></i></a>
                    </div>
                    <div className="col s12 m6 right-align">
                       {/* <!-- Dropdown Trigger --> */}
                        <a className="dropdown-button btn" href="#" data-activates="profliePost"><i className="mdi-action-language"></i> Public</a><ul id="profliePost" className="dropdown-content">
                          <li><a href="#!"><i className="mdi-action-language"></i> Public</a></li>
                          <li><a href="#!"><i className="mdi-action-face-unlock"></i> Friends</a></li>                              
                          <li><a href="#!"><i className="mdi-action-lock-outline"></i> Only Me</a></li>
                        </ul>

                        {/* <!-- Dropdown Structure --> */}
                        

                        <a className="waves-effect waves-light btn"><i className="mdi-maps-rate-review left"></i>Post</a>
                    </div>
                  </div>
                </div>
                {/* <!-- AddPhotos --> */}
                <div id="AddPhotos" className="tab-content col s12  grey lighten-4" style={{display: 'none'}}>
                  <div className="row">
                    <div className="col s2">
                      {/* <img src="images/avatar.jpg" alt="" className="circle responsive-img valign profile-image-post"> */}
                    </div>
                    <div className="input-field col s10">
                      <textarea id="textarea" row="2" className="materialize-textarea"></textarea>
                      <label htmlFor="textarea" className="">Share your favorites photos!</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s12 m6 share-icons">
                      <a href="#"><i className="mdi-image-camera-alt"></i></a>
                      <a href="#"><i className="mdi-action-account-circle"></i></a>
                      <a href="#"><i className="mdi-hardware-keyboard-alt"></i></a>
                      <a href="#"><i className="mdi-communication-location-on"></i></a>
                    </div>
                    <div className="col s12 m6 right-align">
                       {/* <!-- Dropdown Trigger --> */}
                        <a className="dropdown-button btn" href="#" data-activates="profliePost2"><i className="mdi-action-language"></i> Public</a><ul id="profliePost2" className="dropdown-content">
                          <li><a href="#!"><i className="mdi-action-language"></i> Public</a></li>
                          <li><a href="#!"><i className="mdi-action-face-unlock"></i> Friends</a></li>                              
                          <li><a href="#!"><i className="mdi-action-lock-outline"></i> Only Me</a></li>
                        </ul>

                        {/* <!-- Dropdown Structure --> */}
                        

                        <a className="waves-effect waves-light btn"><i className="mdi-maps-rate-review left"></i>Post</a>
                    </div>
                  </div>
                </div>
                {/* <!-- CreateAlbum --> */}
                <div id="CreateAlbum" className="tab-content col s12  grey lighten-4" style={{display: 'none'}}>
                  <div className="row">
                    <div className="col s2">
                      {/* <img src="images/avatar.jpg" alt="" className="circle responsive-img valign profile-image-post"> */}
                    </div>
                    <div className="input-field col s10">
                      <textarea id="textarea" row="2" className="materialize-textarea"></textarea>
                      <label htmlFor="textarea" className="">Create awesome album.</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s12 m6 share-icons">
                      <a href="#"><i className="mdi-image-camera-alt"></i></a>
                      <a href="#"><i className="mdi-action-account-circle"></i></a>
                      <a href="#"><i className="mdi-hardware-keyboard-alt"></i></a>
                      <a href="#"><i className="mdi-communication-location-on"></i></a>
                    </div>
                    <div className="col s12 m6 right-align">
                       {/* <!-- Dropdown Trigger --> */}
                        <a className="dropdown-button btn" href="#" data-activates="profliePost3"><i className="mdi-action-language"></i> Public</a><ul id="profliePost3" className="dropdown-content">
                          <li><a href="#!"><i className="mdi-action-language"></i> Public</a></li>
                          <li><a href="#!"><i className="mdi-action-face-unlock"></i> Friends</a></li>                              
                          <li><a href="#!"><i className="mdi-action-lock-outline"></i> Only Me</a></li>
                        </ul>

                        {/* <!-- Dropdown Structure --> */}
                        

                        <a className="waves-effect waves-light btn"><i className="mdi-maps-rate-review left"></i>Post</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--/ profile-page-wall-share -->

            <!-- profile-page-wall-posts --> */}
            <div id="profile-page-wall-posts" className="row">
              <div className="col s12">
                  {/* <!-- medium --> */}
                  <div id="profile-page-wall-post" className="card">
                    <div className="card-profile-title">
                      <div className="row">
                        <div className="col s1">
                          {/* <img src="images/avatar.jpg" alt="" className="circle responsive-img valign profile-post-uer-image">                         */}
                        </div>
                        <div className="col s10">
                          <p className="grey-text text-darken-4 margin">John Doe</p>
                          <span className="grey-text text-darken-1 ultra-small">Shared publicly  -  26 Jun 2015</span>
                        </div>
                        <div className="col s1 right-align">
                          <i className="mdi-navigation-expand-more"></i>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col s12">
                          <p>I am a very simple wall post. I am good at containing <a href="#">#small</a> bits of <a href="#">#information</a>.  I require little more information to use effectively.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card-image profile-medium">                          
                      {/* <img src="images/gallary/2.jpg" alt="sample" className="responsive-img profile-post-image profile-medium">                         */}
                      <span className="card-title">Card Title</span>
                    </div>
                    <div className="card-content">
                      <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div className="card-action row">
                      <div className="col s4 card-action-share">
                        <a href="#">Like</a>                          
                        <a href="#">Share</a>
                      </div>
                      
                      <div className="input-field col s8 margin">
                        <input id="profile-comments" type="text" className="validate margin"/>
                        <label htmlFor="profile-comments" className="">Comments</label>
                      </div>                        
                    </div>                        
                  </div>

                  {/* <!-- medium video --> */}
                  <div id="profile-page-wall-post" className="card">
                    <div className="card-profile-title">
                      <div className="row">
                        <div className="col s1">
                          {/* <img src="images/avatar.jpg" alt="" className="circle responsive-img valign profile-post-uer-image">                         */}
                        </div>
                        <div className="col s10">
                          <p className="grey-text text-darken-4 margin">John Doe</p>
                          <span className="grey-text text-darken-1 ultra-small">Shared publicly  -  26 Jun 2015</span>
                        </div>
                        <div className="col s1 right-align">
                          <i className="mdi-navigation-expand-more"></i>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col s12">
                          <p>I am a very simple wall post. I am good at containing <a href="#">#small</a> bits of <a href="#">#information</a>.  I require little more information to use effectively.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card-image profile-medium">
                      <div className="video-container no-controls">
                        <iframe width="640" height="360" src="https://www.youtube.com/embed/10r9ozshGVE" frameBorder="0" allowFullScreen=""></iframe>
                      </div>                          
                      <span className="card-title">Card Title</span>
                    </div>
                    <div className="card-content">
                      <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div className="card-action row">
                      <div className="col s4 card-action-share">
                        <a href="#">Like</a>                          
                        <a href="#">Share</a>
                      </div>
                      
                      <div className="input-field col s8 margin">
                        <input id="profile-comments" type="text" className="validate margin"/>
                        <label htmlFor="profile-comments" className="">Comments</label>
                      </div>                        
                    </div>                        
                  </div>                      

                  {/* <!-- small --> */}
                  <div id="profile-page-wall-post" className="card">
                    <div className="card-profile-title">
                      <div className="row">
                        <div className="col s1">
                          {/* <img src="images/avatar.jpg" alt="" className="circle responsive-img valign profile-post-uer-image">                         */}
                        </div>
                        <div className="col s10">
                          <p className="grey-text text-darken-4 margin">John Doe</p>
                          <span className="grey-text text-darken-1 ultra-small">Shared publicly  -  26 Jun 2015</span>
                        </div>
                        <div className="col s1 right-align">
                          <i className="mdi-navigation-expand-more"></i>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col s12">
                          <p>I am a very simple wall post. I am good at containing <a href="#">#small</a> bits of <a href="#">#information</a>.  I require little more information to use effectively.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card-image profile-small">
                      {/* <img src="images/gallary/1.jpg" alt="sample" className="responsive-img profile-post-image">                         */}
                      <span className="card-title">Card Title</span>
                    </div>
                    <div className="card-content">
                      <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div className="card-action row">
                      <div className="col s4 card-action-share">
                        <a href="#">Like</a>                          
                        <a href="#">Share</a>
                      </div>
                      
                      <div className="input-field col s8 margin">
                        <input id="profile-comments" type="text" className="validate"/>
                        <label htmlFor="profile-comments" className="">Comments</label>
                      </div>                        
                    </div>                        
                  </div>

                  {/* <!-- small --> */}
                  <div id="profile-page-wall-post" className="card">
                    <div className="card-profile-title">
                      <div className="row">
                        <div className="col s1">
                          {/* <img src="images/avatar.jpg" alt="" className="circle responsive-img valign profile-post-uer-image">                         */}
                        </div>
                        <div className="col s10">
                          <p className="grey-text text-darken-4 margin">John Doe</p>
                          <span className="grey-text text-darken-1 ultra-small">Shared publicly  -  26 Jun 2015</span>
                        </div>
                        <div className="col s1 right-align">
                          <i className="mdi-navigation-expand-more"></i>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col s12">
                          <p>I am a very simple wall post. I am good at containing <a href="#">#small</a> bits of <a href="#">#information</a>.  I require little more information to use effectively.</p>
                        </div>
                      </div>
                    </div>
                    <div className="card-image profile-large">
                      {/* <img src="images/gallary/3.jpg" alt="sample" className="responsive-img profile-post-image">                         */}
                      <span className="card-title">Card Title</span>
                    </div>
                    <div className="card-content">
                      <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div className="card-action row">
                      <div className="col s4 card-action-share">
                        <a href="#">Like</a>                          
                        <a href="#">Share</a>
                      </div>
                      
                      <div className="input-field col s8 margin">
                        <input id="profile-comments" type="text" className="validate"/>
                        <label htmlFor="profile-comments" className="">Comments</label>
                      </div>                        
                    </div>                        
                  </div>
              </div>                  
            </div>
            {/* <!--/ profile-page-wall-posts --> */}

          </div>
    
        )  
    }  
    
}

export default UpdateStatus;