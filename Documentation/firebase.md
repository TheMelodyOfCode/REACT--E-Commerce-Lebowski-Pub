
#### Firebase 
A Google platform that alows you to primarialy spin up Authentication and Database and also hosting tools etc.<br>

**initializeApp** 
initializeApp connects the local installed firebase libary with the only app.
It's sort of a configuration to connect you get on the firebase website.
import { initializeApp } from "firebase/app";
In order to use **google authentication** we need to import the following
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider  } from 'firebase/auth'

>**Firebase-Services for Authentication**
>> getAuth, (To instanziate the services)
>> signInWithRedirect, 
>> signInWithPopup, 
>> GoogleAuthProvider
>**Firebase-Database**
>> getFirestore (To instanziate the services)
>> doc, (to retrieve document inside of the firestore database)
>> getDoc, (getting documents DATA)
>> setDoc, (setting documents DATA)