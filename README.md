## Ravenous React App

A client-side React application, utilizing the Yelp API to search for Local Business, Malls, Restaurants, Grocery store etc.


Process of Starting the App:
After the project is forked. Change the directory to ravenous.
To start the React App: npm  start
To quit out of the React App: Control + C (2 times)



This project was bootstrapped with Create React App.

Below you will find some information on how to perform common tasks.
You can find the most recent version of this guide here.

Table of Contents
Updating to New Releases
Sending Feedback
Folder Structure
Available Scripts
npm start
npm test
npm run build
npm run eject
Supported Browsers
Supported Language Features and Polyfills
Syntax Highlighting in the Editor
Displaying Lint Output in the Editor
Debugging in the Editor
Formatting Code Automatically
Changing the Page <title>
Installing a Dependency
Importing a Component
Code Splitting
Adding a Stylesheet
Post-Processing CSS
Adding a CSS Preprocessor (Sass, Less etc.)
Adding Images, Fonts, and Files
Using the public Folder
Changing the HTML
Adding Assets Outside of the Module System
When to Use the public Folder
Using Global Variables
Adding Bootstrap
Using a Custom Theme
Adding Flow
Adding a Router
Adding Custom Environment Variables
Referencing Environment Variables in the HTML
Adding Temporary Environment Variables In Your Shell
Adding Development Environment Variables In .env
Can I Use Decorators?
Fetching Data with AJAX Requests
Integrating with an API Backend
Node
Ruby on Rails
Proxying API Requests in Development
"Invalid Host Header" Errors After Configuring Proxy
Configuring the Proxy Manually
Configuring a WebSocket Proxy
Using HTTPS in Development
Generating Dynamic <meta> Tags on the Server
Pre-Rendering into Static HTML Files
Injecting Data from the Server into the Page
Running Tests
Filename Conventions
Command Line Interface
Version Control Integration
Writing Tests
Testing Components
Using Third Party Assertion Libraries
Initializing Test Environment
Focusing and Excluding Tests
Coverage Reporting
Continuous Integration
Disabling jsdom
Snapshot Testing
Editor Integration
Debugging Tests
Debugging Tests in Chrome
Debugging Tests in Visual Studio Code
Developing Components in Isolation
Getting Started with Storybook
Getting Started with Styleguidist
Publishing Components to npm
Making a Progressive Web App
Opting Out of Caching
Offline-First Considerations
Progressive Web App Metadata
Analyzing the Bundle Size
Deployment
Static Server
Other Solutions
Serving Apps with Client-Side Routing
Building for Relative Paths
Azure
Firebase
GitHub Pages
Heroku
Netlify
Now
S3 and CloudFront
Surge
Advanced Configuration
Troubleshooting
npm start doesn’t detect changes
npm test hangs on macOS Sierra
npm run build exits too early
npm run build fails on Heroku
npm run build fails to minify
Moment.js locales are missing
Alternatives to Ejecting
Something Missing?
Updating to New Releases
Create React App is divided into two packages:

create-react-app is a global command-line utility that you use to create new projects.
react-scripts is a development dependency in the generated projects (including this one).
You almost never need to update create-react-app itself: it delegates all the setup to react-scripts.

When you run create-react-app, it always creates the project with the latest version of react-scripts so you’ll get all the new features and improvements in newly created apps automatically.

To update an existing project to a new version of react-scripts, open the changelog, find the version you’re currently on (check package.json in this folder if you’re not sure), and apply the migration instructions for the newer versions.

In most cases bumping the react-scripts version in package.json and running npm install in this folder should be enough, but it’s good to consult the changelog for potential breaking changes.

We commit to keeping the breaking changes minimal so you can upgrade react-scripts painlessly.

Sending Feedback
We are always open to your feedback.

Folder Structure
After creation, your project should look like this:

my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
For the project to build, these files must exist with exact filenames:

public/index.html is the page template;
src/index.js is the JavaScript entry point.
You can delete or rename the other files.

You may create subdirectories inside src. For faster rebuilds, only files inside src are processed by Webpack.
You need to put any JS and CSS files inside src, otherwise Webpack won’t see them.

Only files inside public can be used from public/index.html.
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.
They will not be included in the production build so you can use them for things like documentation.

Available Scripts
In the project directory, you can run:

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject
Note: this is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
