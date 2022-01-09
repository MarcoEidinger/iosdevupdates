<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://user-images.githubusercontent.com/4176826/148683827-6e8094a9-82a0-4198-babc-fa1190de7057.png" />
  </a>
</p>
<h1 align="center">
  The slightly different feed aggregator powered by the <a href="https://iosdevdirectory.com/">iOS Dev Directory</a>


</h1>

## About

**Each blog, written in the English language, will be listed only once with its most recent article.**

This mechanism keeps the list relatively small as not all blog posts for all blogs are shown. It allows the curious person to see which blogs published their last article when. This hopefully makes it more likely that non-professional blogs (i.e. without full time commitment and publishing every day) can be discovered as those are not buried at the very end of the list.

## Technical details

I use [GatsbyJS](https://www.gatsbyjs.com/) to generate this static site.

I use [GitHub Pages](https://pages.github.com/) to host this static site for free.

I use [my very own command-line tool](https://github.com/MarcoEidinger/OsmiumAtlas), written with Swift, to get the latest posts from blogs listed on the iOS Dev Directory.

## Local Testing

Run the following command in your terminal.

```shell
npm run develop
```

The site is now running at http://localhost:8000!

Edit `src/pages/index.js` and see updates in real-time!
