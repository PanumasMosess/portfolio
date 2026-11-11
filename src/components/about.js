import React, { Component } from "react";
import profilePic from '../Pic2.png';

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src={profilePic} alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{resumeData.aboutme}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{resumeData.name}</span>
                  <br />
                  <span>Address : {resumeData.address}</span>
                  <br />
                  <span>Contact : {resumeData.phone}</span>
                  <br />
                  <span>Email : {resumeData.email}</span>
                </p>
              </div>
              <div class="columns download">
                <p>
                  <a
                    href="https://drive.google.com/file/d/14s90vNK_mDYH4LBLJM7ZyEge2hKnhcHL/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="button"
                  >
                    <i class="fa fa-download" />Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
