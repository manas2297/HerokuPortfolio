import React from "react";
import Prismic from "prismic-javascript";
import { Date, Link, RichText } from "prismic-reactjs";
import config from "../../config/prismic-configuration";
function client() {}

class Blog extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     doc: null,
  //     notFound: false,
  //     posts: []
  //   };
  //   if (props.prismicCtx) {
  //     this.fetchPage(props);
  //   }
  // }

  // // componentDidUpdate() {
  // //   this.props.prismicCtx.toolbar();
  // //   if (!prevProsp.prismicCtx) {
  // //     this.fetchPage(this.props);
  // //   }
  // // }
  // fetchPage = props => {
  //   return this.props.prismicCtx.api.getSingle("blog_home").then(doc => {
  //     if (doc) {
  //       this.setState({ doc });
  //       this.props.prismicCtx.api.query(
  //         Prismic.Predicates.at("document.type", "post"),
  //         { orderings: "[my.post.date desc]" }.then(res => {
  //           this.setState({ posts: res.results });
  //         })
  //       );
  //     } else {
  //       this.setState({ notFound: !doc });
  //     }
  //   });
  // };
  render() {
    const { linkResolver } = config.linkResolver;
    return (
      <React.Fragment>
        <h1>Coming Soon....</h1>
      </React.Fragment>
    );
  }
}
export default Blog;
