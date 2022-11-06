###### 27.10.2022
## Install Library<br>

> React Router DOM
>> npm i react-router-dom

### React Router DOM<br>
React Router has a web version and a nativ version.
Nativ is used for Nativ Apps.<br>
Here we work with the web version which has 2 technologies to offer.
BrowserRouter and HashRouter.<br>

**HashRouter** doesn't reload the page but instead jumps to marked points
and triggers the hashchange-event.<br>

**BrowserRouter** works with the HTML5-History-Api to important methods.
pushState-method and popstate-event.
The user gets the impression that he has changed the page.<br>

#### We use BrowserRouter<br>
https://reactrouter.com/en/dev/start/tutorial
BrowserRouter behaves like a component.<br>
In order to use BrwoserRouter we need to wrap the router around the application.
We do that by integrating the router component in the **index.js**<br>

In order to route we need to import **Routes** and **Route**<br>
To render a base component in a parent component we use **index** instead of path.
and in order to implement a **Nested-Route** we need to import **outlet**<br>

    <Routes>
      <Route path='/' element={<Navigation/>} >
        <Route index     element={<Home/>} />
        <Route path='shop'   element={<Shop/>} />
      </Route>
    </Routes>
    
#### Link
Link is essential an anker-tag that takes the installed BrowserRouter and routes to the specific place.
we utelized the link component in order to lavraged proper routing.<br>

#### useNavigate
**important**<br>
It's usually better to use navigate in loaders and actions than this hook<br>

The useNavigate hook returns a function that lets you navigate programmatically, for example in an effect:<br>

import { useNavigate } from "react-router-dom";<br>

function useLogoutTimer() {<br>
  const userIsInactive = useFakeInactiveUser();<br>
  const navigate = useNavigate();<br>

  useEffect(() => {<br>
    if (userIsInactive) {<br>
      fake.logout();<br>
      navigate("/session-timed-out");<br>
    }<br>
  }, [userIsInactive]);<br>
}<br>

### Navigate
Navigate is basically useNavigate() converted into a React component.<br>
This makes it easy to implement in our React apps.<br>
The Navigate component replaced the Redirect component that was used in React Router v5.<br>

### useLocation
useLocation is a hook that allows us to get the current location(or URL) of the web app<br>

const currentLocation = useLocation()<br>
console.log(currentLocation)<br>

