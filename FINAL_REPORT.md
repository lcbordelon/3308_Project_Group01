● Project Title: Minesweeper

● Team members’ names: Lindsay Bordelon, Natalie Dreher, Zach Hill, Nathan Hutchins

● Project Tracker Link: https://trello.com/b/9Raczcf9/cspb3308-project
● Link to 5-minute video: https://github.com/lcbordelon/3308_Project_Group01/blob/main/DemoVideo.md
● Version control repository link: https://github.com/lcbordelon/3308_Project_Group01
● List your public hosting site and make sure that it is available: https://minesweeper3308.onrender.com/
● Include a Final Status Report
o What you completed
▪ Home page listing group members. Includes a navigation bar to play the game, access the Home page, Scores page, About page, Login/Logout pages.
▪ Login/Logout page – A user must create a user account and login before they can play the game. Once a user logs in or creates an account, they have access to all the pages and their scores will be stored with their username and displayed on the Scores page when they win. The username and password are stored in an SQLite database and we keep track of the current user with flask sessions.
▪ Game page – the game mimics Minesweeper. Clicking on a square will either reveal more squares with numbers representing the number of nearby mines, or a mine. Clicking on a mine ends the game and displays a ‘KABLAM!’ message. You can also right click on any cell and mark it as a flag. The player has a limited number of flags.
▪ Once a user has completed the game; their score will display on the Scores page scoreboard with their username. The username and score are stored in an SQLite database.
▪ The About page describes how to play the game.
o What you were in the middle of implementing
▪ Unit Test cases for the login database and the scores database.
▪ Harder version of the game with large game boards. The game was written with dynamic sizing in mind, but we hadn’t set up the routes for other game sizes.
o What you had planned for the future
▪ Improved look and feel for the entire application.
▪ Test cases for every action in the application.
▪ Mobile accessibility.
▪ More game size options
o Any known problems (bugs, issues)
▪ None to our knowledge.
● Tools used:
o Agile SCRUM methodology
▪ Purpose of Tool - Used as group management methodology to assign project tasks to members, update group on status of assigned tasks, communicate any blockers to completing a task and confirm when a task has been completed.
▪ Had weekly zoom meetings to review the upcoming tasks and utilize the Scrum practice. Documented these discussions in Weekly Update and Trello board.
▪ Did This Tool Work for Us? – Yes. Following the SCRUM methodology helped us stay on task during meetings and address what specifically needed to be done that week.
o Trello
▪ Purpose of Tool - We used a Trello board to track the progress of specific individual tasks. For example, building the Login/Logout page was broken down into multiple tasks including HTML/CSS for the pages, JavaScript for the page, setting up the SQLite database, building the flask route for storing the username and password.
▪ Did This Tool Work for Us? – Yes. The Trello board helped us visualize breaking down a larger task into smaller more digestible tasks.
o Google Chat
▪ Purpose of Tool - Used for group member communication outside of weekly meetings.
▪ Did This Tool Work for Us? – Yes. Using Google Chat allowed the group to have frequent communication throughout the week to progress the project without requiring a formal group meeting.
o GitHub
▪ Purpose of Tool - Used as project code repository and version control
▪ Great for project code and repository, it allowed members constant access to the latest version of our code and branches of members code in development.
▪ Easy to use for version control using branches. Branches were created for each update made by a group member. Branches were reviewed by another group member prior to merging with the main branch. Group members were advised to perform a git pull after a merge and prior to pushing any other code updates.
▪ Did This Tool Work for Us? – Yes. The group didn’t have any issues using GitHub for code repository or version control. We would use this resource again.
o Jupyter Notebooks, Visual Studio Code (VS Code)
▪ Purpose of Tool - Used as code editor.
▪ Did This Tool Work for Us? - Yes and No. While each option allows for easy code creation and editing, using two different code editors in a group project isn’t recommended. We had an issue with the flask routes not being correct between both code editors. Routes created using Jupyter would have to be edited for those using local VS Code.
o HTML/CSS/JavaScript
▪ Purpose of Tool - Programming language for page design, style and actions
▪ JavaScript used primarily for the game mechanics and functionality. We were able to create a responsive 9x9 grid containing all the common minesweeper tropes by utilizing many common computer science data structures, algorithms, and recursion.
▪ Did This Tool Work for Us? – Yes. These are widely used across many websites and applications.
o Flask/Flask-Sessions
▪ Purpose of Tool - Used as a web framework for application. This tool was chosen because it was taught during the semester and a requirement for our project.
▪ We utilized Flask-Sessions to have access to server-side sessions in our application. This allowed us to know the current user logged in when interacting with our SQLite databases and rendering pages.
▪ Did This Tool Work for Us? – Yes, however there were some road blocks along the way using Flask. A significant amount of time was spent by each group member setting up the flask routes and manipulating them to accomplish the required database actions for the application. Flask/Python seem to require more manipulation and code to accomplish the same actions that NodeJS and ExpressJS can achieve. Most of the team had prior NodeJS/ExpressJS experience.
o Python
▪ Purpose of Tool - Used to set up our Flask routes, render our html pages, and make calls to our SQLite database.
▪ A lot of the access logic was handled by Python. It would read the current session data and grant/deny access depending on the data received and in the database.
▪ Did This Tool Work for Us? - Yes, it is a very powerful, easy to use language that allowed us to quickly make changes to our application, database, and logic.
o SQLite
▪ Purpose of Tool - Used as the database for the application.
▪ Created two databases that contained the user login information (id, username, password) and the leaderboard scores (username, score). We were then able to read the scores with the username as the unique field query.
▪ Did This Tool Work for Us? - Yes, but I don’t think we would use it again unless it’s explicitly necessary to use a local database. Most of the group had prior experience with MySQL. SQLite can accomplish similar storage options as MySQL, but it’s more difficult to view what’s being stored in the SQLite database as opposed to using MySQL. MySQL also gives the user the ability to execute add/delete/update actions within MySQL prior to adding to the application code. Overall, MySQL is a more robust database manipulation option.
o Bootstrap
▪ Purpose of Tool - Used for HTML/CSS component framework, specifically for the navigation bar.
▪ Did This Tool Work for Us? – Yes, some group members had prior experience with Bootstrap. Bootstrap is an easy to learn and easy to use component resource for many items within an application. As long as the correct scripts and tags are used, Bootstrap is very easy to add to any application. However, it’s difficult to adjust the built-in CSS styles of Bootstrap components. We will definitely use it again.
o Font awesome
▪ Purpose of Tool - Used for moving emojis in About page. Adds animation to text.
▪ Did This Tool Work for Us? – Yes. Font Awesome is a simple tool that allows for adding flair to text. Using Font Awesome adds movement and detail to text that encourages the end user to focus on the text.
o Render
▪ Purpose of Tool - Used for application hosting.
▪ Did This Tool Work for Us? – Yes. We initially planned on using Heroku to host our application, but Heroku removed the free hosting option. Heroku is also more difficult to use than Render. It was a benefit that we were forced to use another hosting option; we may not have found Render if Heroku had remained free. Render is very easy to use and it can be attached to the GitHub repo. Once attached to our GitHub, any time an update was pushed to the repo it was automatically applied to the Render website. This made hosting our project much easier.
