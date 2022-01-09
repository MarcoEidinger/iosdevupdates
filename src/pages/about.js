import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Seo from "../components/seo"

const About = ({ data }) => (
	<main class="flex flex-col h-screen justify-between">
		<Seo title="About" />
		<div>
			<Navbar class="grow-0"/>
			<div class="px-16 text-center flex-grow">
				<h1 class="text-2xl font-extrabold pt-8">Motivation <span class="text-lg font-bold text-primary">&</span> Purpose</h1>
				<div class="p-2">
					<p>I personally was overwhelmed with the sheer amount of iOS Dev Blogs created by amazing people. A comprehensive list of blogs covering iOS development is the <a class="link text-info" href="https://iosdevdirectory.com/" target="_blank" rel="noreferrer">iOS Dev Directory</a>. It was originally put together, and is maintained by <a class="link text-info" href="https://twitter.com/daveverwer" target="_blank" rel="noreferrer">Dave Verwer</a>. Adding a site is easy and well explained <a class="link text-info" href="https://iosdevdirectory.com/contributing/" target="_blank" rel="noreferrer">here</a>.</p>
					<br></br>
					<p>I wondered how many blogs are active, and I wanted to get an overview of the most recent blogs. </p>
					<br></br>
					<p>Hence I created this website. The list of blogs is sourced from the iOS Dev Directory. There are other feed aggregator sites which are powered by the iOS Dev Directory. But iOSDevUpdate.com is a little bit different.</p>
					<br></br>					<p>First and foremost: <strong>Each blog, written in the English language, will be listed only once with its most recent article.</strong></p>
					<br></br>			<p>This mechanism keeps the list relatively small as not all blog posts for all blogs are shown. It allows the curious person to see which blogs published their last article when. This hopefully makes it more likely that non-professional blogs (i.e. without full time commitment and publishing every day) can be discovered as those are not buried at the very end of the list.</p>
					<br></br>	<p>Also some stats are presented how many blogs are listed in the iOS Dev Directory and how many are active in which timeframe. This might not be of interest for everone.</p>
				</div>
			</div>
		</div>
		<Footer class="grow-0"/>
	</main>
);

export default About;
