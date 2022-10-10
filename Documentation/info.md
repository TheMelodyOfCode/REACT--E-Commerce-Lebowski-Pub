## Installed modules<br>

> Sass
>> npm i sass
> React Router DOM
>> npm i react-router-dom
> Firebase
>> npm i firebase

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

#### Fragment
a Fragemnt is a component that renders to nothing when it gets mounted on the DOM.
Since we need a parent html element to render it is usfull if we don't want a div
wrapped around our code.

#### Link
Link is essential an anker-tag that takes the installed BrowserRouter and routes to the specific place.
we utelized the link component in order to lavraged proper routing.<br>

#### SVG images
In order to use vector scaled images we need to import them as ReactComponent.
import { ReactComponent as MySVGLogo} from './path/to/MySVGLogo'<br>
<MySVGLogo/><br>

#### Firebase 
A Google platform that alows you to primarialy spin up Authentication and Database and also hosting tools etc.<br>

**initializeApp** 
initializeApp connects the local installed firebase libary with the only app.
It's sort of a configuration to connect you get on the firebase website.
import { initializeApp } from "firebase/app";
In order to use **google authentication** we need to import the following
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider  } from 'firebase/auth'
