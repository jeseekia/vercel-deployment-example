# Deploy an Express app to Vercel from the Beginning

1. Create a project folder
2. Navigate into the folder
3. Initialize Git
   1. Create a .gitignore
      1. Add node_modules
      2. Add .env
4. Create a server.js
5. Initialize a node project
   1. Install express
   2. Install dotenv
6. Open in VS Code
7. Configure server
   1. Require Express
   2. Create app variable
   3. Setup "/" home route
   4. Listen on a port
8. Test run the app with nodemon
9. Configure the Vercel deployment
   1.  Run node --version in command line
       1.  Set "engines" to the node version in package.json
   2.  Set build script to "start": "node server.js"
   3.  Export the app in server.js
   4.  Create a vercel.json file to configure the deployment
   5.  Set PORT as env variable