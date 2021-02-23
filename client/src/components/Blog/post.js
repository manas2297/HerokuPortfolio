import React from "react";
import Prismic from "prismic-javascript";
import { Date, Link, RichText } from "prismic-reactjs";
import Client from "../../config/PrismicApp";
import ImageCaption from "../slices/ImageCaption";
import Text from "../slices/Text";
import Quote from "../slices/Quote";
import config from "../../config/prismic-configuration";
import BlogNav from "./BlogNav";
class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doc: null,
      notFound: false
    };
    if (Client) {
      this.fetchPage(props);
    }
  }
  fetchPage = async props => {
    const doc = await Client.getByUID("post", props.match.params.uid);
    if (doc) {
      console.log(doc);
      this.setState({ doc });
    } else {
      this.setState({ notFound: !doc });
    }
  };
  renderSliceZone = sliceZone => {
    return sliceZone.map((slice, index) => {
      switch (slice.slice_type) {
        case "image_with_caption":
          return <ImageCaption slice={slice} key={"slice-" + index} />;
        case "quote":
          return <Quote slice={slice} key={"slice-" + index} />;
        case "text":
          return (
            <Text
              slice={slice}
              key={"slice-" + index}
              prismicCtx={this.props.prismicCtx}
            />
          );
        default:
          return null;
      }
    });
  };
  render() {
    console.log(this.props);
    let titled = this.state.doc ? this.state.doc.data.title.length !== 0 : null;
    return this.state.doc ? (
      <div className="post-main">
        <div className="post-nav">
          <BlogNav linkText="Blogs List" linkTo="/blog"/>
        </div>
        <div className="post-wrapper">
          <div className="post-wrapper-card">
            <div className="post-wrapper-card-heading">
              <h1 data-wio-id={this.state.doc.id}>
                {titled ? RichText.asText(this.state.doc.data.title) : "Untitled"}
              </h1>
            </div>
            <div className="post-wrapper-card-content">
              {this.renderSliceZone(this.state.doc.data.body)}
            </div>
          </div>
        </div>
          
        
        {/* <div className="outer-container">
          <div className="back">
            <a href="/blog">back to list</a>
          </div> */}
      </div>
    ) : null;
  }
}
export default Post;
