// Delete the build folder. Use this script right after checking out a new branch to avoid accidentally running the wrong code
const fse = require( 'fs-extra' );

function cleanBuildDir ()
{
    try
    {
        fse.removeSync( './build' );
        fse.mkdirSync( './build' );
    }
    catch ( err )
    {
        console.error( err )
    }
}

const startTime = process.hrtime();
cleanBuildDir();
const endTime = process.hrtime( startTime );
const duration = `${ endTime[ 0 ] }s ${ endTime[ 1 ] / 1e6 }ms`

console.log( `Finished cleaning after ${ duration }` );