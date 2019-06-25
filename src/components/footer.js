import React, { Component } from "react";

export default class footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              {resumeData.socialLinks &&
                resumeData.socialLinks.map(item => {
                  return (
                    <li>
                      <a href={item.url} target="_blank" without rel="noopener noreferrer">
                        <i className={item.className} />
                      </a>
                    </li>
                  );
                })}
            </ul>
            <ul className="copyright">            
                <h5 className="textColor">
                  Create By{" "}
                  <img
                    alt=""
                    src="images/react.png"
                    className="imgCreate"
                  />{" "}React
                </h5>
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
