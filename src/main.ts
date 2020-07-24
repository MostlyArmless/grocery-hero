const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const cors = require( 'cors' );
const bcrypt = require( 'bcrypt-nodejs' );
const knex = require( 'knex' );

// Load controllers that we defined in separate files
const register = require( './controllers/register' );
const signIn = require( './controllers/signIn' );
const profile = require( './controllers/profile' );
const image = require( './controllers/image' );

const db = knex( {
    client: 'pg',
    connection: {
        connectionString: process.env.DATABASE_URL,
        database: 'smart-brain',
        ssl: true
    }
} );

const app = express();
app.use( bodyParser.json() );
app.use( cors() );


// Define the routes
app.get( '/', ( req, res ) =>
{
    res.json( 'You are home.' );
} );


// Define all the routes that we will handle, which are each handled by a "controller"
app.post( '/signin', ( req, res ) => { signIn.handleSignIn( req, res, bcrypt, db ) } );
app.post( '/register', ( req, res ) => { register.handleRegister( req, res, bcrypt, db ) } );
app.get( '/profile/:id', ( req, res ) => { profile.handleProfileGet( req, res, db ) } );
app.put( '/image', ( req, res ) => { image.handleImagePut( req, res, db ) } );
app.post( '/imageurl', ( req, res ) => { image.handleClarifaiApiCall( req, res ) } );

// Turn on the server
let portToUse = process.env.PORT || 3000;
app.listen( portToUse, () =>
{
    console.log( `Server is running on port ${portToUse}` );
} );