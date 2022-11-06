
### Firebase 
A Google platform that alows you to primarialy spin up Authentication and Database<br>
 and also use different hosting tools etc.<br>

##### Important
>**Firestore - Firebase-Database** and **Firebase-Authentication** <br>
> It is important to know that **Firebase-Authentication** is a different service from **Firestore** <br>
> Firestore is the actual Database.<br>
> We use Firestore to store the user information after authentication for further use. (see below at Firestore section)<br>

**initializeApp** <br>
>initializeApp connects the local installed firebase libary with the only app.<br>
>It's sort of a configuration to connect you to get on the firebase website.<br>
>import { initializeApp } from "firebase/app";<br>

#### Firebase-Database <br>
> Firestore is a scheemerless database - means that you can store pretty much any jason object <br>
> of course it's important to have one and the same structure for your data <br>
> 
> Firebase Datamodel
>> collection (it's like a folder - a.e. collection of users) <br>
>> documents  (represents an individual piece of data - a.e. independend user) <br>
>> data (whats written on a document - a.e. the actual data/values aboout the user) <br>

#### Basic Walktrough to create a Firestore database

* On website creat DB
    * Start in production mode
    * Set location
    * Since this a sample project to learn, and only we working against it, we will change the rules to god-mode :-)
        * allow read, write: if true;
* In your local firebase file instanziate the Firestore sevrvice and it's methods

>**Firestore-DB services**<br>
>> getFirestore (To instanziate the services) <br>
>> doc, (to retrieve the document instance, inside of the firestore database) <br>
>> getDoc, (getting documents DATA) <br>
>> setDoc, (setting documents DATA) <br>

In order to use **google authentication** we need to import the following:<br>
import { getAuth, GoogleAuthProvider  } from 'firebase/auth'<br>

>**Firebase-Services for Authentication**<br>
>> getAuth, (To instanziate the services)<br>
>> GoogleAuthProvider (custom settings)<br>
>> signInWithPopup, (desired sign-in Method)<br>
>> signInWithRedirect, (desired sign-in Method)<br>

#### Basic Walktrough for Google Authentication (Pop-Up & Redirect)
* Install firebase
* Go to website and create project on firebase Website
* In this case I choose web-app
* Under Authentication add a Sign-In-method / Sign-in provider
* Create firebase.js file
    * Import { initializeApp } from "firebase/app";
    * Import desired sign in method{ signInWithPopup, signInWithRedirect  } from "firebase/auth";
    * Copy firebase configuration and initializeapp from website
    * Get the class GoogleAuthProvider for the service signInWithPopup
    * Set your custom settings parameters for GoogleProvider
    * Get the getAuth method for the authentication
    * Create a function and pass getAuth and GoogleProvider with settings
* Import the method you created into your signIn component
* Creat an async function to use the imported signInMethod
* Put OnClick method to the desired button
##### NOTE: Google Authentication with REDIRECT
> since we redirect to another page we are leaving our domain and breaking the instance<br>
> therefor we need additional methods for when we come back and won't to use the data<br>
* In the sign-In component import the following methods
    * useEffect from react
    * getRedirectResult from firebase/auth
    * auth from utils/firebase/Firebase.utils (this is the getAuth() method from firebase)
    > auth helps us to keep track of all the authentication states that are happening.<br>
    > you can see this as sort of an authentication memory bank regardless were the side is going<br>
* instead of creating a new onClick function we directly call signInWithRedirect
* create useEffect method with callback for getRedirectResult
> when we come back from the google redirect page it links us to the sign-in component<br>
> on mount of the sign-in component the useEffect method will run and trigger the Firebase method getRedirectResult<br>

#### Google Authentication with email and password
* Go to website
* Under Authentication add a new Sign-In-method / Sign-in provider
* Email/Password
### Set up Sign-Up Form 
> here we take the user-input from the formFields. <br>
* import useState from react to keep track of the sign-up form-fields
* Please see methods and comments under component/signUp/signUp.component.jsx
> the next step is to create and store the information in firebase
* import createUserWithEmailAndPassword from firebase/auth
### Set up Sign-IN with Email and Password 
* Please see methods and comments under component/login/login.component.jsx
> It's almost the same logic as sign-up but less requirements :-)


