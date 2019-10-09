import React from "react";
import Prismic from "prismic-javascript";
import { Date, Link, RichText } from "prismic-reactjs";

function client() {}

class Blog extends React.Component {
  fetchData = async () => {
    const apiEndPoint = "https://ContentRepo.cdn.prismic.io/api/v2";
    const Client = Prismic.client(apiEndPoint);
    const res = await Client.query(
      Prismic.Predicates.at("document.type", "blog_home")
    );
    await console.log(res);
  };
  componentDidMount() {
    this.fetchData();
  }
  render() {
    return (
      <React.Fragment>
        <h1>Hello</h1>
      </React.Fragment>
    );
  }
}
export default Blog;
