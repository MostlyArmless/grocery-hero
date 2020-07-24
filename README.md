# grocery-hero

Have free time? Volunteer to go get groceries for someone in your community who can't go themselves!
Need groceries but can't go out? Get matched with a volunteer who will do your shopping for you!

## Developer Instructions

### Installation

```
# Install this app's dependencies
npm install
```

### Switching branches
After you switch branches you must clean the `/build` dir and ensure the auto-reloader (compiler) is running otherwise you'll be running code from the previous branch. There's a script to clean and rebuild:

```Powershell
# Delete the /build dir contents
npm run clean

# Delete the /build dir contents & re-compile once
npm run rebuild
```

### Setting up LiveShare for collaborative development

1. From the Live Share tab in VS Code: click "Start collaboration session..."
2. Give the link to people so they can join the session
3. `ctrl+shift+B` to start the auto-reloader task. The typescript compiler will now automatically recompile the project whenever a file is saved.
4. From the Live Share tab in VS Code: click `Share server...` in the top left. Enter a port number (e.g. 3000), enter a display name for the server. All the participants in the Live Share session can now go to `localhost:3000` in their browser to access the server once it's running

### Run the server

#### In debug mode

From the Run tab (`ctrl+shift+D`) in VS Code: select the `Launch Server with ts-node` configuration and click `Run` (or hit `F5`). Go to `localhost:3000` in a browser window to view the website.

#### In release mode

```Powershell
npm start
```

## NPM Scripts

* `npm run clean` deletes the contents of the /build dir. Useful after switching branches
* `npm run build` just runs tsc. Necessary as a wrapper for `tsc` cli because `npm-run-all` can only call npm scripts, not cli tools
* `npm run rebuild` calls `clean` and `build` sequentially, using `npm-run-all` package, which provides a cross-platform way of calling npm scripts from npm scripts in either a sequential or parallel way.
