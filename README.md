# Smart Brain

This is the front end of my version of the Smart Brain project that is the final project in the ZTM Complete Web Developer Course.  The app is deployed on Render at https://find-a-face.onrender.com

The backend repository is named smartbrainapi at https://github.com/terrifricker/smartbrainapi

## Features
 - A Registration form that will add a new user to the database
 - A Signin form that will verify the user information, then take the user to the Image Link form
 - An Image Link form that will try to detect a face in the image url entered into the form
     - The form calls the Face Detection model at Clarifai.
     - The app then puts a blue box around the first face detected in the image.
 - A Rank that indicates the number of urls that a give user has entered
 - A Sign Out button that will take the user back to the home screen

## Instructions
[![face-detection](https://clarifai.com/api/clarifai/main/models/face-detection/badge)](https://clarifai.com/clarifai/main/models/face-detection)

Register yourself with your name, email, and a password if desired to be added to the app database.  If you would prefer to just demo the app, login using 'sally@gmail.com' and password 'bananas'.  Once you see the Image Link Form, enter an image url.  The image url can be from the web or the url of your own hosted image.  Clicking on Detect will call the Clarifai Face Detect Model that will look for a face in your image.  If one is found, a blue box will be shown around the first face detected.  For each url entered, your User Rank will increase by 1.
