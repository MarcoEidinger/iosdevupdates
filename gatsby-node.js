const path = require("path");
const fs = require("fs");
const blogs = require("./content/blogs.json");

const POST_LIMIT = 60;

exports.onPostBuild = async () => {
  const buildDate = new Date();
  const filePath = path.resolve(__dirname, "./public/rss.xml");
  const blogList = blogs.sites?.slice(0, POST_LIMIT);

  // skip anything that doesn't have a valid link
  const filteredBlogList = blogList.filter((item) => {
    return /^http/.test(item.most_recent_article?.url?.trim());
  });

  // generate RSS
  const content = generateRSS(filteredBlogList, buildDate);

  // write to public folder
  fs.writeFileSync(filePath, content);
};

/**
 * RSS GENERATION
 */

// generate correct publication date format
function pubDate(date) {
  if (typeof date === "undefined") {
    date = new Date();
  }

  var pieces = date.toString().split(" "),
    offsetTime = pieces[5].match(/[-+]\d{4}/),
    offset = offsetTime ? offsetTime : pieces[5],
    parts = [
      pieces[0] + ",",
      pieces[2],
      pieces[1],
      pieces[3],
      pieces[4],
      offset,
    ];

  return parts.join(" ");
}

const generateRSS = (items, buildDate) => {
  const itemsRSS = items.map((item) => {
    return `
<item>
    <title><![CDATA[${item.most_recent_article?.title}]]></title>
    <description><![CDATA[${item.site_url}]]></description>
    <link><![CDATA[${item.most_recent_article?.url}]]></link>
    <guid isPermaLink="true"><![CDATA[${item.most_recent_article?.url}]]></guid>
    <pubDate>${pubDate(
      new Date(item.most_recent_article?.published_date)
    )}</pubDate>
</item>
`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:dc="http://purl.org/dc/elements/1.1/"
xmlns:content="http://purl.org/rss/1.0/modules/content/"
xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
<channel>
<title><![CDATA[iOSDevUpdates]]></title>
<description><![CDATA[The slightly different feed aggregator powered by the iOS Dev Directory]]></description>
<link>https://www.iosdevupdates.com/</link>
<lastBuildDate>${pubDate(buildDate)}</lastBuildDate>
${itemsRSS.join("")}
</channel>
</rss>`;
};
