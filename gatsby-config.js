module.exports = {
	siteMetadata: {
		url: "https://www.iosdevupdates.com",
		siteUrl: "https://www.iosdevupdates.com",
		title: "iOS Dev Updates",
		description: "The slightly different feed aggregator powered by the iOS Dev Directory",
		twitterUsername: "@MarcoEidinger"
	},
	plugins: [
		"gatsby-plugin-postcss",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sitemap",
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				icon: `src/images/icon.png`,
			},
		},
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: 'https://www.iosdevupdates.com',
				sitemap: 'https://www.iosdevupdates.com/sitemap.xml',
				policy: [{ userAgent: '*', allow: '/' }]
			}
		},
		'gatsby-plugin-cname',
	],
};
