import React from "react";
import { Link } from "gatsby";

const Navbar = () => {
	return (
		<div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
			<div class="px-2 mx-2 navbar-start lg:flex">
				<Link to="/">
					<span class="text-lg font-bold">
						iOSDev<span class="text-lg font-bold text-primary">Updates</span>
					</span>
				</Link>
				{/* <div class="flex items-stretch">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2196f3" class="w-6 h-6 mx-2">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
					</svg>
					<p>Site refresh occurs every 2h</p>
				</div> */}
			</div>
			<div class="hidden px-2 mx-2 navbar-center lg:flex">
				<div class="flex items-stretch">
					{/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2196f3" class="w-6 h-6 mx-2">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
					</svg> */}
					<p>
						The slightly different feed aggregator powered by the{" "}
						<a
							class="link text-info"
							href="https://iosdevdirectory.com/"
							target="_blank"
							rel="noreferrer"
						>
							iOS Dev Directory
						</a>
					</p>
					{/* <p>Site refresh occurs every 2h</p> */}
				</div>
			</div>
			<div class="navbar-end">
				<button class="btn btn-square btn-ghost">
					<Link to="/about/">About</Link>
				</button>
				<button class="btn btn-square btn-ghost">
					<a
						href="https://twitter.com/i/lists/1490025783963754502"
						target="_blank"
						rel="noreferrer"
					>
						<img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjMDNBOUY0IiBkPSJNNDIsMTIuNDI5Yy0xLjMyMywwLjU4Ni0yLjc0NiwwLjk3Ny00LjI0NywxLjE2MmMxLjUyNi0wLjkwNiwyLjctMi4zNTEsMy4yNTEtNC4wNThjLTEuNDI4LDAuODM3LTMuMDEsMS40NTItNC42OTMsMS43NzZDMzQuOTY3LDkuODg0LDMzLjA1LDksMzAuOTI2LDljLTQuMDgsMC03LjM4NywzLjI3OC03LjM4Nyw3LjMyYzAsMC41NzIsMC4wNjcsMS4xMjksMC4xOTMsMS42N2MtNi4xMzgtMC4zMDgtMTEuNTgyLTMuMjI2LTE1LjIyNC03LjY1NGMtMC42NCwxLjA4Mi0xLDIuMzQ5LTEsMy42ODZjMCwyLjU0MSwxLjMwMSw0Ljc3OCwzLjI4NSw2LjA5NmMtMS4yMTEtMC4wMzctMi4zNTEtMC4zNzQtMy4zNDktMC45MTRjMCwwLjAyMiwwLDAuMDU1LDAsMC4wODZjMCwzLjU1MSwyLjU0Nyw2LjUwOCw1LjkyMyw3LjE4MWMtMC42MTcsMC4xNjktMS4yNjksMC4yNjMtMS45NDEsMC4yNjNjLTAuNDc3LDAtMC45NDItMC4wNTQtMS4zOTItMC4xMzVjMC45NCwyLjkwMiwzLjY2Nyw1LjAyMyw2Ljg5OCw1LjA4NmMtMi41MjgsMS45Ni01LjcxMiwzLjEzNC05LjE3NCwzLjEzNGMtMC41OTgsMC0xLjE4My0wLjAzNC0xLjc2MS0wLjEwNEM5LjI2OCwzNi43ODYsMTMuMTUyLDM4LDE3LjMyMSwzOGMxMy41ODUsMCwyMS4wMTctMTEuMTU2LDIxLjAxNy0yMC44MzRjMC0wLjMxNy0wLjAxLTAuNjMzLTAuMDI1LTAuOTQ1QzM5Ljc2MywxNS4xOTcsNDEuMDEzLDEzLjkwNSw0MiwxMi40MjkiPjwvcGF0aD48L3N2Zz4=" />
					</a>
				</button>
				<button class="btn btn-square btn-ghost">
					<a
						href="https://github.com/MarcoEidinger/iosdevupdates"
						target="_blank"
						rel="noreferrer"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 496 512"
							class="fill-current"
						>
							<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
						</svg>
					</a>
				</button>
			</div>
		</div>
	);
};

export default Navbar;
