# Namibia Lebron Torres
### Getting started

1. Download and install [Node.js](https://nodejs.org) onto your computer if you don't have it already
1. In a terminal, `cd` into the root directory of this repo and then run `npm install` to install the dependencies

### Running the app

**Start the API server:** `npm run api`

- GET `http://localhost:3001/petitions` - returns an array of _trending_ petitions. Params: `page`, `size` (items per page), `sortBy=created_at|ask|displayed_signature_count|progress`
- GET `http://localhost:3001/petition/:id` - returns petition data for given `id`

**Start the client:** `npm start`

- Now you can visit the _single-page_ app at [localhost:3000](http://localhost:3000) on any browser.
- The client can access the above API endpoints by just calling `/petitions` & `/petitions/:id`

### Testing

- To run tests: `npm test`
- Test files can be named `*.test.js` or put in `__tests__` folder with extension `*.js`
- More info on testing can be found [here](https://facebook.github.io/create-react-app/docs/running-tests)

## Tasks

1. Display a list of trending petitions and some way to load more
1. Provide a way to sort the list by at least 2 petition properties
1. Upon clicking on an individual petition, switch to a view which displays the petition's details. There should be a way to return to the list view
1. Write tests for your code, including integration & unit tests. Feel free to use your preferred testing library - you can find more info on how to do that [here](https://facebook.github.io/create-react-app/docs/running-tests).
1. Feel free to add comments to help the evaluator understand your thinking

## To submit your work

To send in your work, we'll take a zip file of the entire folder via email. Before you compress it, be sure to delete the `node_modules` folder first so the code stays small.

Don't worry, you can still run `npm install` again later if you need to make any changes!

**Steps:**

1. Delete `node_modules/` in the root directory
1. Compress (zip) this folder
1. Respond to the original take home assignment email and attach your zip file

## FAQ

1. **How long should this take me?**

   We set this up so that it shouldn’t take too much time out of your day, so
   we aimed the tasks to take about 3 hours. If this takes you longer, that’s
   totally fine. If you’re stuck, please reach out to get help.

2. **I have another idea. Should I pursue it?**

   We intentionally leave the problems a little open-ended and will leave
   it up to you to provide us with what you see as important. If you have an
   idea for how to improve even further, or doing something a little differently,
   go for it!

3. **Something is ambiguous, what should I do?**

   We really don't want to trip you up unintentionally, we are just attempting
   to see how you approach problems. Feel free to use Google and StackOverflow,
   but don't get help from anyone like a coworker or a friend.

   If you really feel stuck, our first preference is for you to make a
   decision and document it with your submission - in this case there is
   really no wrong answer. If you feel it is not possible to do this,
   just [send us an email](mailto:recruiting@change.org) with the subject
   "Code challenge question" and we will try to clarify or correct the
   question for you.

4. **What did you use to build this take home exercise?**

   For the API server we used [express-generator](https://expressjs.com/en/starter/generator.html).
   For the client we used [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html).
   The 2 pieces were put together following this [guide](https://daveceddia.com/create-react-app-express-backend/).

**If you are having trouble running the app or completing the tasks, please contact richard@change.org.**
