import './App.css';
import blogs from './blogs.json'
import React from 'react';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = { startElement: 0, endElement: 30, showInfoBar: true };
	}

	hideInfoBar = () => {
		this.setState(prevState => ({
			startElement: prevState.startElement,
			endElement: prevState.endElement,
			showInfoBar: false
		}));
	}

	previousPage = () => {
		if (this.state.startElement === 0) {
			return
		}
		this.setState(prevState => ({
			startElement: prevState.startElement - 30,
			endElement: prevState.endElement - 30,
			showInfoBar: prevState.hideInfoBar
		}));
		window.scrollTo(0, 0)
	}

	nextPage = () => {
		if (this.state.endElement + 30 > blogs.sites.length) {
			return
		}
		this.setState(prevState => ({
			startElement: prevState.startElement + 30,
			endElement: prevState.endElement + 30,
			showInfoBar: prevState.hideInfoBar
		}));
		window.scrollTo(0, 0)
	}

	render() {
		return (
			<div className="App">
				{this.state.showInfoBar === true &&
					<div class="alert">
						<div class="flex-1">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2196f3" class="w-6 h-6 mx-2">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
							</svg>
							<label>Site refresh occurs every 3h </label>
						</div>
						<div class="flex-none">
							<button class="btn btn-xs" onClick={this.hideInfoBar}>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
								</svg>
							</button>
						</div>
					</div>
				}
				<header className="text-2xl p-4">
					<p>
						Latest updates for development sites (🇬🇧) listed on the <a class="link text-primary" href="https://iosdevdirectory.com/" target="_blank" rel="noreferrer">iOS Dev Directory</a>
					</p>
				</header>
				<br></br>
				{this.state.startElement === 0 &&
					<div class="grid grid-cols-1 gap-1 md:grid-cols-3">
						<div class="stat">
							<div class="stat-figure text-primary">
							</div>
							<div class="stat-title">Total Blogs</div>
							<div class="stat-value text-primary">{blogs.stats.sites_total}</div>
							<div class="stat-desc">accessible through RSS</div>
						</div>
						<div class="stat">
							<div class="stat-title">Most Recent Blogs</div>
							<div class="stat-value text-success">{blogs.stats.sites_active_30d}</div>
							<div class="stat-desc">posted within the last 30 days</div>
						</div>
						<div class="stat">
							<div class="stat-title">Active Blogs</div>
							<div class="stat-value">{blogs.stats.sites_active_90d_in_percentage}%</div>
							<div class="stat-desc">in the last 90 days</div>
						</div>
					</div>
				}
				{this.state.startElement !== 0 &&
					<div class="btn-group flex justify-center pb-4">
						<button class="btn btn-outline btn-wide" onClick={this.previousPage}>Previous Page</button>
						<button class="btn btn-outline btn-wide" onClick={this.nextPage}>Next Page</button>
					</div>
				}
				<br></br>
				<div class="grid grid-cols-1 gap-1 md:grid-cols-1 justify-start px-16">
					{
						blogs.sites.slice(this.state.startElement, this.state.endElement).map(site => (
							<div class="card">
								<div class="card-body text-left">
									<h2 class="card-title"><div class="badge mx-2 badge-primary">{site.most_recent_article.published_date}</div><div data-tip="RSS feed" class="tooltip"><a class="link link-hover" href={site.feed_url} target="_blank" rel="noreferrer">{site.title}</a></div>
									</h2>
									<p><div data-tip="Read" class="tooltip tooltip-accent text-left"><a class="link link-hover" href={site.most_recent_article.url} target="_blank" rel="noreferrer">{site.most_recent_article.title}</a></div></p>
								</div>
								<div class="divider"></div>
							</div>
						))
					}
				</div>
				<div class="btn-group flex justify-center pb-4">
					<button class="btn btn-outline btn-wide" onClick={this.previousPage}>Previous Page</button>
					<button class="btn btn-outline btn-wide" onClick={this.nextPage}>Next Page</button>
				</div>
				<footer id="footer" class="items-center p-4 footer bg-neutral text-neutral-content">
					<div class="items-center grid-flow-col">
						<p>Site designed and built by <a class="link text-primary" href="https://twitter.com/marcoeidinger" target="_blank" rel="noreferrer">Marco Eidinger</a></p>
					</div>
					<div class="grid-flow-col gap-4 md:justify-self-end">
						<div class="flex-none ">
							<a href="#about-modal" class="btn btn-sm btn-ghost mr-2">About</a>
							<div id="about-modal" class="modal">
								<div class="modal-box">
									<p>The list of sites is sourced from the iOS Dev Directory put together and maintained by the amazing <a class="link text-primary" href="https://twitter.com/daveverwer" target="_blank" rel="noreferrer">Dave Verwer</a>.</p>
									<br></br>
									<p>I personally was overwhelmed with the sheer amount of sites created by amazing people. I wondered how many sites are active and I wanted to get an overview of the most recent sites. Hence I created this website. I hope you find this helpful.</p>
									<br></br>
									<p>Cheers, Marco</p>
									<div class="modal-action">
										<a href=".#footer" class="btn btn-primary">Ok</a>
									</div>
								</div>
							</div>
						</div>
						<a href="https://github.com/MarcoEidinger">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 496 512" class="fill-current"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></a>
					</div>
				</footer>
			</div>
		);
	}
}

export default App;
