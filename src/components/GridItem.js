import React from "react";
import Link from "gatsby-link";

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

export default GridItem;