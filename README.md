# Lost In Translation

## Overview
Small website application made using react.js for translating text into american sign language.  
Please not that this application translate each character into its respective sign, meaning that complete words might not be right bu spelled correctly out in individual signs for the american sign language.

## Group members

<ul>
    <li> Alexander Rol </li>
    <li> vytautas Zarauskas </li>
</ul>

## Description

This simple web application has been made as a part of the Experis Academy - Front end Java course.  
For this application, the above mentioned students has created a translation application to translate regular american words, letters, or even complete sentences into american styled sign language.  

When accessing the homepage of the application you are required to enter your name in order to save a history of your past 10 searches. This data is stored locally on your machine and we do NOT collect any user data.  
If you'd like to delete the data you've entered it is simply done by pressing "log out". By doing so the application deletes all user related data from the local browser storage.

If the user tries to access the home page or the profile page without providing a name, the application will automatically reroute the user to the "log in"-page untill a name has been entered.

### Translations
There is currently no maximum characters stopping the user from translating a large text but for more reliable results we do recommend the user to only enter oen sentence at a time.  
Any spaces in the translated text will be converted to a dash-symbol ("-").  

The current version does not allow special characters to be translated. This means that any commas, periods, questionsmarks and the like will be ignored when translating the text. For this reason we recommend not to use abreviations (it's, I'll and such) when translating as the result of that could render the entire translation useless. 

# Getting the app to run
### Step 1
Clone the project

### Step 2
Open the terminal and navigate to your local files containing the cloned project (project root).

### Step 3
Assuming Node package Module (npm) is installed run the command "npm install".  
This ensures that all modules and packages from npm is installed before running the project for the first time.

### Step 4
All packages and other imports have now been downloaded and we're ready to run the program for the first time.  
To do so enter "npm start" into the terminal.  
Make sure you are still in you project root when executing this command as it work off of the current directory.  
This will take a moment to load in all the files. When it's done loading it will automatically open a browser window with the homepage already loaded in.

### Application not showing
If the webpage is not popping up when the terminal displays a green line of text saying "Compiled successfully!", then go to your browser and enter "localhost:3000/" and press enter.

If the terminal throws an error, then please create a ticket on this repo and teh devs will try to resolve the issue as soon as possible.