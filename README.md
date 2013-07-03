Javascript Cinema
=================

Node.js FAQ
-----------

####Node setup and module configuration?
A **package.json** file has been created for the application.  This file describes all the node module dependencies that the application requires.  Because this file exists the following command is all that is needed to get application going:
```
node install
```

This command is only needed when the application is first setup or when a new dependency is added.  There is no need to run the command everytime you want to



Cloud9IDE Development FAQ
-------------------------

####How do I run the application?
Open the **server.js** file in the editor and then click the _run_ button.  You should see the ouput window display a message similar to:
```
Running Node Process
Your code is running at 'http://javascript-cinema.johngully.c9.io'
```

You can then point a browser to the url to navigate the application.


####How do I commit files to **git**?
Enter the following sequence of commands in the terminal:
```
git add .
git commit -m "Enter your commit comments here"
git push -u origin master
```

####How do you edit the **.gitignore** file?
Enter the following command in the terminal: 
```
open .gitignore
```

####What files should be ignored for Cloud9IDE development?
We have added the following lines to the .gitignore file
```
.c9revisions
.c9search
node_modules
```

