import React from "react";

const BlogPost = ({ site }) => {
  return (
    <div>
      <div>
        <h3 class="text-xl pb-4">
          <div class="text-left">
            <a
              class="link link-hover"
              href={site.most_recent_article.url}
              target="_blank"
              rel="noreferrer"
            >
              {site.most_recent_article.title}{" "}
            </a>
          </div>
        </h3>
        <p class="text-sm text-left">
          {/* <div class="text-left"> */}
            <a
              class="link link-hover"
              href={site.feed_url}
              target="_blank"
              rel="noreferrer"
            >
              {site.title}
            </a>{" "}
            - Published{" "}
            {new Date(
              site.most_recent_article.published_date
            ).toLocaleDateString("en-US", {
              weekday: "short",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          {/* </div> */}
        </p>
      </div>
      <div class="divider"></div>
    </div>
  );
};

export default BlogPost;
