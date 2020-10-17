/*
We will be learning about the basics of angular creating a Hello World App and then we will cover some important features..

MODULES : - Angular App are modular in nature, an angular app is a collection of several modules joined together. A module is a feature part of our application
For Example : - If we are building Aura App with Angular, We can have the following modules : -
1)  Host A Home Module
2)  Photography onboarding module
3)  Booking Module
4)  Host Dashboard Manage Property Module etc
Every Angular app has a root module which is the AppModule where all other modules comes together

COMPONENTS : - Each module is made up of several components and services e.g.
1)  Host A Home Module contains : - PropertyLocation Component, Amenities Component etc And Also Services the created and imported into the component to make http requests to connect to the server..

HOW AN ANGULAR APP IS STARTED
1)  In React, execution starts from index.js where we initialize App.js which is our root component, in angular, execution starts from 'main.ts' which is our own index.js and it then bootstrap/initialize the 'app.module.ts' ==> Inside the app.module.ts, we Initialize our root component which is the 'app.component.ts' inside the 'bootstrap' field of the '@NgModule' object

HTML + CLASS + BUSINESS LOGIC

HTML ==> app.component.html
CLASS ==> app.component.ts
BUSINESS LOGIC ==> app.service.ts
*/
