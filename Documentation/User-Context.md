### Context
> you can see context as a place that exclusivly stores things in a central place
In order to avoid prop drilling from the commen parent component to their children we will use context.<br>
By using context we avoid passing data through nodes that don't actual need that data.<br>
With Context we have one central component that can pass the data to the coresponding component directly<br>

We know that we get the appropriat **user-auth** as a response when a user signs-up or -in.<br>
Now we need to save this information under UserContext to be accessible in one place.<br>
We also need the **onAuthStateChange** method from firebase in order to react to changes<br>

onAuthStateChange is an **observable listener** that gives us the chance to <br>
hook into some kind of stream of events , Signout, -in clicks whatever etc
### NOTE: please see comments within the files for more details about methods
* create helper function in firebase.utils.js
* onAuthStateChange hooks into auth and gives us a callback
* import useEffect to user.context
* import onAuthStateChange helper function into user.context
* with useEffect ans useState within the function UserProvider we are now able to keep track of changes
* Note: 
     *  useEffect with an empty dependency array only runs when the component mounts 
     *  It is necessary that onAuthStateChange only runs when needed (user.context component mounts)
     *  otherwise it's considered a memory leak 
* Please see comment in user.context.





