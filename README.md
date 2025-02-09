# DisDash 2.0

The Magical Travel Planner App

Whether you are going on a theme park adventure at Walt Disney World or Disneyland, embarking on a Disney Cruise, visiting Aulani in Hawaii, or the international theme parks, this app will help you manage your Disney and non-Disney plans in one place.

Once you make an account, you can create "Trips" with a custom name and date. All of your important reservation information can be stored in your Trips: flights, hotels, rental cars, theme park tickets, cruise excursions, dining reservations, and more. This flexible interface will allow you to edit or delete trips and plans as needed.

This is the second iteration of DisDash. The same concept, but I wanted to create a simpler file structure.

### Front End Libraries and Services:

- Vite
- TypeScript/React
- Auth0
- Tailwind CSS
- React Router

### Back End Libraries and Services:

- Node.js
- Express
- Auth0
- jsonwebtoken
- PostgreSQL

### To Run This Project Locally:

1. Clone the project.
2. Install dependencies: `cd` into the `client` folder and run `npm install`, and then `cd` into the `server` folder run `npm install`.
3. Create an account with [Auth0](https://auth0.com/):
   - Create a new Application for the front end by selecting "Single Page Web Applications", choose React, and follow their instructions for setup.
   - For the back end, create a new Application and select "Regular Web Applications". Choose "Node.js (Express)", and follow their instructions for setup.
4. Setup a PostgreSQL database using the schema found in `sever/src/queries.sql`.
5. Create a `.env` file for the back end in the top level of the `server` folder and add the following values (for Auth0, be sure to use the back end Client ID, Domain, and Secret keys):

```
LOCALHOST_DATABASE_URL=
 DATABASE_URL=
 PORT=
 AUTH0_DOMAIN=
 AUTH0_CLIENT_ID=
 AUTH0_CLIENT_SECRET=
 AUTH0_AUDIENCE=
```

6. Create a `.env` file for the front end in the top level of the `client` folder and add the following values (for Auth0, be sure to use the front end Domain and Client ID):

```
VITE_AUTH0_DOMAIN=
VITE_AUTH0_CLIENT_ID=
```

7. Run both the front end and back end projects by running `npm run dev` in the top level of the `client` and `server` folders.

Disclaimer: This project is in no way affiliated with or endorsed by The Walt Disney Company. This is entirely fan created!
