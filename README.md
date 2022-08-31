# Kide.app Ticket Bot

- A simple ticket buying bot for https://kide.app/ site build with Node.js and React.
- Reserves maxium amount of every available ticket variant for event. 
- App logic is set to private submodule to avoid this bot from spreading uncontrollably.

## Usage

1. Find your bearer token. 
   1. Go to https://kide.app/ and login with your credentials.
   2. Right click the page and select inspect. 
   3. Open (Application)/Local Storage/https://kide.app/ 
   4. Copy the authorization.token

![Use cases](/images/FindToken.png)

2. Clone this repository with submodules.
   1. Node.js needed
   2. Run the app with 'npm start'
   3. Navigate to localhost:3000

3. To enable the URL input from main view, save your token to local storage.
   1. From top left corner select 'Token'. A new view is opened
   2. Copy your authorization.token to the text area and press 'Save' button.

![Use cases](/images/TokenView.png)

4. Head back to the main view from top left corner. URL input is now enabled.
5. Copy the URL of the wanted event to the input field and press enter.

![Use cases](/images/HomeView.png)
