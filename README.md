# iOS Dev Directory News

Latest updates for development sites (🇬🇧) listed on the [iOS Dev Directory](https://iosdevdirectory.com/)

## Motivation

I personally was overwhelmed with the sheer amount of sites created by amazing people. I wondered how many sites are active, and I wanted to get an overview of the most recent blogs. Hence I created this website.

## Technical details

Every 3 hours, a scheduled [GitHub workflow](./.github/workflows/build.yml) will use [a command-line tool built with Swift](https://github.com/MarcoEidinger/OsmiumAtlas) to get the latest posts from blogs listed on the iOS Dev Directory. The respective JSON document containing all the latest info will be bundled with this React SPA and then deployed to this repository GitHub Page.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
