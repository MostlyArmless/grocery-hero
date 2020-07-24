# grocery-hero

Have free time? Volunteer to go get groceries for someone in your community who can't go themselves!
Need groceries but can't go out? Get matched with a volunteer who will do your shopping for you!

## Developer Instructions

### Installation

```
# Install this app's dependencies
npm install
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