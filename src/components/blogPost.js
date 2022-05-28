import React from "react";

const BlogPost = ({ site }) => {
	function getTwitterHandler(twitterURL) {//
		if (twitterURL && twitterURL.length > 0) {
			let handler = twitterURL.replace("https://www.twitter.com/", '');
			handler = handler.replace("https://twitter.com/", '')
			handler = handler.replace("http://www.twitter.com/", '');
			handler = handler.replace("http://twitter.com/", '')
			return "@" + handler
		} else {
			return ""
		}
	}

	const hasTwitterURL = site.twitter_url
	const twitterHandler = getTwitterHandler(site.twitter_url)
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
						href={site.site_url}
						target="_blank"
						rel="noreferrer"
					>
						{site.title}
					</a>
					{hasTwitterURL && hasTwitterURL.length > 0 &&
						<span>
							{" "} by {" "}
							<a class="link text-info link-hover" href={site.twitter_url} target="_blank" rel="noreferrer">{twitterHandler}</a>
						</span>
					}
					{" "}
					- Published{" "}
					{new Date(
						site.most_recent_article.published_date
					).toLocaleDateString("en-US", {
						weekday: "short",
						year: "numeric",
						month: "long",
						day: "numeric",
					})}
				</p>
				{/* </div> */}

			</div>
			<div class="divider"></div>
		</div>
	);
};

export default BlogPost;
