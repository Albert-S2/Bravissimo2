# Bravissimo Interview Challenge!

## Intro

Congratulations on getting to the Bravissimo Interview coding challenge!

This challenge takes the form of a simple client/server project (React and Express). The application is designed to allow
customers and CS staff to browse our different 'collections' of products (e.g. bikini, lingerie) via the use of a
dropdown in the top left of the window.

Unfortunately, the app is unfinished - and requires you to add some critical functionality that our customers need!

Challenge 4 also welcomes you to make any additional improvements that you think would make the app better, or help
our customers.

You will have one hour to get as far as you can. You might not finish the entire challenge - that's ok! We don't expect
everyone to complete it, and we're more interested in how you have approached the problems posed.

Before your hour has completed, you must ensure your code is uploaded to a private GitHub repository, and that
`sjwarner-bv` has been added as a collaborator to review your work.

## Getting Started

The repository is split into two folders, `client` and `server`. We recommend opening two tabs in your terminal, and
running them separately.

Each folder will require `npm install` and then `npm start` to run as expected.

Once running, the client will be available on `localhost:3000`, and the server will be available on `localhost:8080`.

Notes:
* The client is a `create-react-app` bootstrapped React front-end. We have installed `axios` for easy API consumption,
and TailwindCSS for styling. The default CRA testing tools are also available. These are our recommendations, but
alternative tooling / solutions are also acceptable.
* The server is an Express server, with routes hosted in `app.js`. Jest testing is also set up, with an example in
`searchService.spec.js`. To avoid complications, the data we provide is **not** from a database, but instead comes from the
`server/data/` directories. This is a simplification to avoid candidates having to run a database locally. **Do not make
changes to any files in `/server/data`**.

Both applications should hot-reload as you make changes, so don't worry about starting and stopping your apps!

## Tasks

1. Our customers cannot see the price of our items, or if they are on sale. Our customer service associates cannot see
the product style code. Add these in a suitable place, suitably styled for the types of information they are.
    * Prices should be displayed in Pounds Sterling, to the appropriate accuracy.
    * Both the original price, and current price are available through the API (`originalPrice` and `price`). If the
   `price` is lower than the `originalPrice`, the product is on sale.
    * Style Codes are a short identifier for a product, normally `LETTER LETTER NUMBER NUMBER`, e.g. `AU01`. Web customers
      don't frequently use them.
2. We've received reports that the 'item limit' dropdown on the front-end doesn't change the number of items returned.
Hook this dropdown up to the back-end, and ensure the API only returns the requested number of items.
   * Ensure this solution is implemented on the back-end.
   * What's the risk of implementing it on the front-end?
3. The Collection dropdown is handy, but at the moment requires changes to the client if we get a new collection in!
We want to be able to add collections in a more sustainable way, from a centralised back-end source.
    * Implement an API endpoint to get the different collections from `server/data/collections.json`, and use this
   endpoint to populate the collection dropdown. If you've been successful, you should see the `sleep` category added.
4. We're always after input from all members of the team - and this is deliberately an imperfect implementation. Improve
the UI/UX of the application. For each improvement you make, add a note here of what you did and why.
   | What you did               | Why                                                             |
   | -------------------------- | --------------------------------------------------------------- |
   |                            |                                                                 |
   |                            |                                                                 | 
   |                            |                                                                 |
