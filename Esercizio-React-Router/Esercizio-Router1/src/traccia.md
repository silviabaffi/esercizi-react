Create a new branch starting from the first props exercise. Modify App component that wraps a Routes component and add a single Route to the / path that renders the Welcome component, passing it a name prop. Render the App component within a BrowserRouter component. Add a new Route to the /counter path that renders the Counter component from the first state exercise.

Add a new Route to the users/:username path that renders a ShowGithubUser component that receives the username as a path parameter and renders a GithubUser component by passing it the received username.

Add three Links within the main App component and use them to navigate to all three routes. - Add a Not Found route that renders when a user navigates to a path that does not exist.

Create a GithubUserList component that fetching this API url, https://api.github.com/users, shows a list of links of github usernames. By clicking on a username, the ShowGithubUser component will be displayed. Add a Route to the users path that shows the GithubUserList component. If there is a /users/:username route, remove it from the App component, and add a new nested route within the /users route. Add an index route to the GithubUsers route that shows the "Add a user and select it" message.

