# UMS Boat Admin Panel
---
[UMS Boat Admin Panel](https://umsboats.firebaseio.com) is an admin module for UMS Boats Android application.

### Architecture:
Component based architecture written in ES2015 to anticipate migration to Angular 2. Firebase is used as a backend; however, authentication and data services wrap Firebase methods to easily switch backend upon need.

### Technology stack:
1. Angular 1.5.3
2. Angular Material 1.0.8
3. Angular Fire 1.2.0
4. Generator Gulp Angular

### Installation:
1. git clone
2. npm install && bower install
3. gulp serve

*note: you would need an instance of Firebase to enable full functionality.
*note: more information about gulp commands can be found at [generator-gulp-angular](https://github.com/Swiip/generator-gulp-angular)

---


LAST STEP:
Create Boat Service and Connected To Firebase.

Add SideBar and Menu.
Add Logout to Toolbar (Auth method).
Add NewBoat form.
Add Boat's fields form.
