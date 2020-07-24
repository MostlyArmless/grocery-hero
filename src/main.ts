const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const cors = require( 'cors' );
const knex = require( 'knex' );

// Load controllers that we defined in separate files
const register = require( './controllers/register' );
// const signIn = require( './controllers/signIn' );
// const profile = require( './controllers/profile' );
// const image = require( './controllers/image' );

const db = knex( {
    client: 'pg',
    connection: {
        connectionString: process.env.DATABASE_URL,
        database: 'grocery-hero',
        ssl: true
    }
} );

const app = express();
app.use( bodyParser.json() );
app.use( cors() );


// Define the routes
app.get( '/', ( req, res ) =>
{
    const obj = {
        name: "mike",
        height: "wouldn't you like to know"
    }
    res.json( `You are ${obj.name}. You are ${obj.height} tall.` );
} );

// Define the routes
app.get( '/', ( req, res ) =>
{
    const obj = {
        name: "mike",
        height: "hellaciously"
    }
    res.json( `You are ${obj.name}. You are ${obj.height} tall.` );
} );

// Define the routes
// http://localhost:3000/jason/stupid
app.get( '/:name/:height', ( req, res ) =>
{
    res.json( `You are ${req.params.name}. You are ${req.params.height} tall.` );
} );


// Define all the routes that we will handle, which are each handled by a "controller"
// app.post( '/signin', ( req, res ) => { signIn.handleSignIn( req, res, db ) } );
app.post( '/register', ( req, res ) => { register.handleRegister( req, res, db ) } );
// app.get( '/profile/:id', ( req, res ) => { profile.handleProfileGet( req, res, db ) } );
// app.put( '/image', ( req, res ) => { image.handleImagePut( req, res, db ) } );
// app.post( '/imageurl', ( req, res ) => { image.handleClarifaiApiCall( req, res ) } );

// Turn on the server
let portToUse = process.env.PORT || 3000;
app.listen( portToUse, () =>
{
    console.log( `Server is running on port ${portToUse}` );
} );