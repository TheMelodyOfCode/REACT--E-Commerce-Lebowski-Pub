
## Installed modules<br>

### Sass
npm i sass<br>

### React Router DOM<br>

React Router has a web version and a nativ version.
Nativ is used for Nativ Apps.<br>
Here we work with the web version which has 2 technologies to offer.
BrowserRouter and HashRouter.<br>

**HashRouter** doesn't reload the page but instead jumps to marked points
and triggers the hashchange-event.<br>

**BrowserRouter** works with the HTML5-History-Api and uses to important methods.
pushState-method and popstate-event.
The user gets the impression that he has changed the page.<br>

#### We use BrowserRouter
npm i react-router-dom
https://reactrouter.com/en/dev/start/tutorial
BrowserRouter bahaves like a component.<br>
In order to use BrwoserRouter we need to wrap the router around the application.
We do that by integrating the router component in the **index.js**<br>

in order to route we need to import **Routes** and **Route**<br>
in order to implement a **Nested-Route** wen need to import **outlet**<br>
in order to render a base component in a parent component we use **index** instaed of path.

    <Routes>
      <Route path='/' element={<Navigation/>} >
        <Route index     element={<Home/>} />
        <Route path='shop'   element={<Shop/>} />
      </Route>
    </Routes>


