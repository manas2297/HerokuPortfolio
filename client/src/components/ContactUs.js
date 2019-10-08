import React, { Component } from "react";
import axios from "axios";
export default class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      title: "",
      message: "",
      success:false
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  };
  handleSubmit = async e => {
    e.preventDefault();
    console.log(this.state);
    try {
      let result = await axios.post(
        "http://localhost:5000/api/email",
        this.state
      );
      if(result.status===200){
        this.setState({
          success:true
        })
      }else{
        this.setState({
          success:false
        })
      }
    } catch (err) {
      console.log(err);
      this.setState({
        email: "",
        title: "",
        message: ""
      });
    }
  };
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="five columns">
            <p className="lead">
              Feel free to contact me for any work or suggestions below
            </p>
            <h4>Linked in :{resumeData.linkedinId}</h4>
          </div>
          <div className="seven columns">
            <h2>Contact Me:</h2>
            <form onSubmit={this.handleSubmit}>
              <input
                className="full-width"
                type="email"
                name="email"
                required
                id="email"
                onChange={this.handleChange}
                placeholder="Your Email"
              />
              <input
                className="full-width"
                type="text"
                name="title"
                id="tittle"
                required
                onChange={this.handleChange}
                placeholder="Title"
              />

              <textarea
                name="message"
                id="message"
                required
                placeholder="enter you message here"
                onChange={this.handleChange}
              />
              {this.state.success?<p>Mail Sent</p>:null}
              <button type="submit" className="full-width">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}
