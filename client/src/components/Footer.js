import React, { Component } from "react";
import { animateScroll as scroll } from "react-scroll";
export default class Footer extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
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
                      <a href={item.url}>
                        <i className={item.className} />
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div id="go-top">
            <p onClick={this.scrollToTop}>
              <i className="icon-up-open" />
            </p>
          </div>
        </div>
      </footer>
    );
  }
}
