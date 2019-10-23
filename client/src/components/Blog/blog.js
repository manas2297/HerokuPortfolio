import React from "react";
import Prismic from "prismic-javascript";
import { Date, Link, RichText } from "prismic-reactjs";
import config from "../../config/prismic-configuration";
import "../../assets/blog.css";
import Client from "../../config/PrismicApp";
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
      const textLimit = 100;
      let text = RichText.asText(firstTextSlice.primary.text);
      let limitedText = text.substring(0, textLimit);
      if (text.length > textLimit) {
        // Cut only up to the last word and attach '...' for readability
        return (
          <p>
            {limitedText.substring(0, limitedText.lastIndexOf(" ")) + "..."}
          </p>
        );
      } else {
        // If it's shorter than the limit, just show it normally
        return <p>{text}</p>;
      }
    } else {
      return null;
    }
  };
  blogPostsSection() {
    return (
      <div className="blog-main">
        {/* Working from the array of all blog posts, we process each one */}
        {this.state.posts.map(post => {
          /* Store the date as a Date object so we can format it to whatever we need */
          let postDate = Date(post.data.date);
          /* Default title when post has no title set */
          const defaultTitle = [<h1 key="title">Untitled</h1>];
          return (
            <div className="blog-post" data-wio-id={post.id} key={post.id}>
              <h2>
                {/* We render a link to a particular post using the linkResolver for the url and its title */}
                <a href={config.linkResolver(post)}>
                  {post.data.title.length !== 0
                    ? RichText.render(post.data.title, config.linkResolver)
                    : defaultTitle}
                </a>
              </h2>
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
            </div>
          );
        })}
      </div>
    );
  }
  blogHomeHead() {
    // Using the queried blog_home document data, we render the top section
    const avatar = {
      backgroundImage: "url(" + this.state.doc.data.image.url + ")"
    };
    return (
      <div className="home">
        <div className="blog-avatar" style={avatar}></div>
        <h1 className="blog-title">
          {RichText.asText(this.state.doc.data.headline)}
        </h1>
        <p className="blog-description">
          {RichText.asText(this.state.doc.data.description)}
        </p>
      </div>
    );
  }
  render() {
    console.log(this.state.doc);

    return this.state.doc ? (
      <div>
        {/* <h1>{RichText.asText(this.state.doc.data.headline)}</h1> */}

        {this.blogHomeHead()}
        {this.blogPostsSection()}
      </div>
    ) : null;
  }
}

export default Blog;
