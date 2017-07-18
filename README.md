# Alaska Code Challenge

This is a SPA to allow users to search for flights based on origin and destination airports.  The resulting table of flights is sortable on all columns, in both ascending and descending order.  Look for the chevron in the column header to determine sort order.  Clicking toggles between ascending sort, descending sort, and no sort.  This application has been tested in Internet Explorer, Microsoft Edge, and Google Chrome.  The project contains 2 branches.  The master branch utilizes AngularJS as the front end framework, and the react branch utilizes React.

### Setup

To run, simply add the locations of the necessary data .csv files to the Web.Config file in the <appSettings> section.  Then: 

#### AngularJS
Checkout master, build, compile, and run.

#### React
I've included the build assets in this repository, so to run, just git checkout react, compile the VS solution in Visual Studio, and run.  There is no need to build or compile anything with NPM.  The repository for the react project is [here](https://github.com/istrupin/alaska-flight-search-react).

To rebuild the react assets, go to the react ui repository, npm install, npm run build, then copy and paste static .js files into Scripts folder and .css files into Content folder.  This can be automated via Webpack, which would involve ejecting the project from React-Create-App and specifying the build output folder in the webpack.config.js file.  For the sake of simplicity, however, I've chosen to package with React-Create-App, with the static assets already included in this solution.
