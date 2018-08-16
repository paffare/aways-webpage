import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import 'font-awesome/css/font-awesome.min.css';
import video from "../img/video.mp4";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    return (
      <div className="section">
        <div className="container">
          <div className="landing-start">
            <h1 className="is-size-1 is-size-5-mobile has-text-centered">
              We are a scandinavian operations manager service for local outdoor
              professionals. We work to expand business possibilities and
              contribute to positive change
            </h1>
            <div className="level">
              <div className="level-item has-text-centered">
                <div className="field has-addons">
                  <p className="control has-icons-left">
                    <input
                      className="input is-medium"
                      type="text"
                      placeholder="Email"
                    />
                    <span className="icon is-small is-left">
                      <i className="fa fa-envelope" />
                    </span>
                  </p>
                  <p className="control">
                    <button className="button is-medium">Get started</button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="columns is-multiline">
            {posts.map(({ node: post }) => {
              return <GridItem className={"column image is-half"} {...post} />;
            })}
            <GridItem
              key={"own"}
              className={"column image is-half"}
              {...posts[0].node}
            />
            {posts.map(({ node: post }) => {
              return (
                <GridItem className={"column image is-one-third"} {...post} />
              );
            })}
            <GridItem
              key={"own1"}
              className={"column image"}
              {...posts[0].node}
            />
          </div>
        </div>
      </div>
    );
  }
}

const GridItem = post => {
  return (
    <div
      className={post.className}
      key={post.id}
      style={{ position: "relative" }}
    >
      <Link className="has-text-primary" to={post.fields.slug}>
        <div
          className="content-box"
          style={{ position: "absolute", bottom: 0, paddingTop: "10px" }}
        >
          {post.frontmatter.title}
        </div>
        <img src={post.frontmatter.thumbnail} style={{ objectFit: "cover" }} />
      </Link>
    </div>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            thumbnail
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
