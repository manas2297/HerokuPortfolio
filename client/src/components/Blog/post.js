import React from "react";
import Prismic from "prismic-javascript";
import { Date, Link, RichText } from "prismic-reactjs";

class Post extends React.Component {
  fetchData = async () => {
    const apiEndPoint = "https://ContentRepo.cdn.prismic.io/api/v2";
    const Client = Prismic.client(apiEndPoint);
    const res = await Client.query(
      Prismic.Predicates.at("document.type", "post")
    );
    await console.log(res);
  };
  componentDidMount() {
    this.fetchData();
  }
  render() {
    return <div>hello</div>;
  }
}
export default Post;
