import React from "react";
import Prismic from "prismic-javascript";
import { Date, Link, RichText } from "prismic-reactjs";
import config from "../../config/prismic-configuration";
import "./style.scss";
import Client from "../../config/PrismicApp";
import BlogNav from "./BlogNav";
import ContactSide from "components/ContactSide";
// function client() {}

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doc: null,
      notFound: false,
      posts: []
    };
    // this.fetchPage();
  }
  componentDidMount() {
    this.fetchPage(this.props);
  }
  // componentDidUpdate(prevProps) {
  //   // this.props.prismicCtx.toolbar();
  //   if (Client) {
  //     this.fetchPage();
  //   }
  // }
  fetchPage = async props => {
    const doc = await Client.getSingle("blog_home");
    if (doc) {
      this.setState({ doc });
      const posts = await Client.query(
        Prismic.Predicates.at("document.type", "post"),
        { orderings: "[my.post.date desc]" }
      );
      if (posts) {
        this.setState({
          posts: posts.results
        });
      }
    } else {
      this.setState({ notFound: !doc });
    }
  };

  firstParagraph = post => {
    let firstTextSlice = post.data.body.find(
      slice => slice.slice_type === "text"
    );
    if (firstTextSlice != null) {
      const textLimit = 240;
      let text = RichText.asText(firstTextSlice.primary.text);
      let limitedText = text.substring(0, textLimit);
      if (text.length > textLimit) {
        // Cut only up to the last word and attach '...' for readability
        return (
          <p className="blog-post-para">
            {limitedText.substring(0, limitedText.lastIndexOf(" ")) + "..."}
          </p>
        );
      } else {
        // If it's shorter than the limit, just show it normally
        return <p className="blog-post-para">{text}</p>;
      }
    } else {
      return null;
    }
  };
  blogPostsSection() {
    return (
      <div className="blog-main-bg">
      <div className="blog-main">
        <div className="blog-main-head">
          <h3>Latest Posts</h3>
        </div>
        {this.state.posts.map(post => {
          /* Store the date as a Date object so we can format it to whatever we need */
          let postDate = Date(post.data.date);
          /* Default title when post has no title set */
          const defaultTitle = (post.data.title.length !== 0 ? RichText.render(post.data.title, config.linkResolver) : <h1 key="title">Untitled</h1>);
          const titleChar = post.data.title[0].text.substring(0,1);
          return (
            <div className="blog-post" data-wio-id={post.id} key={post.id}>
              <a href={config.linkResolver(post)}>
                {/* We render a link to a particular post using the linkResolver for the url and its title */}
                  {defaultTitle}
              </a>
              <div className="post-letter">{titleChar}</div>
              <p className="blog-post-meta">
                <time className="created-at">
                  {/* Format the date to M d, Y */}
                  {postDate
                    ? new Intl.DateTimeFormat("en-US", {
                        month: "short",
                        day: "2-digit",
                        year: "numeric"
                      }).format(postDate)
                    : ""}
                </time>
              </p>
              {/* Renders a small preview of the post's text */}
              {this.firstParagraph(post)}
              <div className="blog-post-grp">
                
                  <a  className="btn read-on" href={config.linkResolver(post)}>Read On</a>
                
                
                  <a className="btn read-later" href={config.linkResolver(post)}>Read Later</a>
                
              </div>
            </div>
          );
        })}
      </div>
      </div>
    );
  }
  blogHomeHead() {
    const avatar = this.state.doc.data.image.url;
    return (
      <div className="blog__home">
        <div className="blog__home__container">
          <img className="blog-avatar" src={avatar} alt="bg"/>
          <div className="blog__home__container--content">
            <h1 className="blog-title">
              {RichText.asText(this.state.doc.data.headline)}
            </h1>
            <p className="blog-description">
              {RichText.asText(this.state.doc.data.description)}
            </p>
          </div>
        </div>
      </div>
    );
  }
  render() {

    return this.state.doc ? (
      <div className="blog">
        {/* <h1>{RichText.asText(this.state.doc.data.headline)}</h1> */}
        <BlogNav linkText="Home"/>
        {/* <ContactSide {...this.props}/> */}
        {this.blogHomeHead()}
        {this.blogPostsSection()}
      </div>
    ) : 'Loading....';
  }
}

export default Blog;
