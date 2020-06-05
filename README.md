# Friendsfinder (FF)
UCSD Homework Project

## Functionality
FF collect a User name,link to photo and ask a few personality questions.
Then FF compares User answers with all users from our extensive database and displays the closest match using our proprietary algorithm (pattent pending).

## Technology
FF is node.js application deployed on Heroku.

**Frontend**

Bootstrap and Font Awesome used for styling.

jQuery - to handle user input, API requests, and rendering results.

**Backend**

FF is written on `JavaScript` and runs on `node.js`.
FF uses `express` package to run a webserver and handle API requests.

To simplify development and maintenance application split into several modules:
* `servers.js` - main module;
* `htmlRoutes.js` - handle html requests;
* `apiRoures.js` - handle API requests.

## Limitations
The current version doesn't store user information and has somewhat limited friends database: Lamb and Bear, our research indicate that it should satisfy 95% of all user.

## Additional credits
Many thanks to Starbacks(r) for decent :coffee:, good working enviroment :toilet: and fast internet :snail:.
