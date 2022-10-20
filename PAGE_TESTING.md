Welcome Page (/welcome)
  - Description
    - Button to login
    - Button to view scoreboard
    - Welcome text at top
  - No parameters needed
  - Flask/html/css files
    - Buttons
    - Routes for buttons
    - Global header
  - Tests
    - Read the paragraph, header, and button tags to verify they loaded
 ![WelcomePageMockup](Img/welcome_page.jpg?raw=true "Welcome")

Login Page (/login)
  - section for registered users 
    - field for username and password
  - section for new users
    -field to enter email and password.
  - Flask/html/css files
    - elements for fields
    - database connection for storing users
    - global header
  - tests for validating an existing user, a user entering an invalid email or password
![LoginPageMockup](Img/login_page.png?raw=true "Login")

How to Play Page (/howto)
  - Description
    - Page to help players understand how to play
    - Basic gameplay functions explained
    - Advanced tips to play better
  - No paramaters needed
  - Data
    - Need images to show how to play game
  - Link
    - /howtwo
    - link back to main page /welcome
  - Tests
    - Read instructions on the page to veryify the correct information is showing
    - Check to see if images are displaying properly
![Howto](Img/HowtoPage.png? "Howto")
        

Gameboard Page (/game)

Scoreboard Page (/scoreboard)

  - Description 
    - Visual Page to see the highscores.
    - Option to filter the highscores to only see your own
    - The highscore page will show the players position on the leaderboard, their score, and their name
    - ![Scoreboard](Img/Scoreboard.png? "Scoreboard")
  - Parameters
    - The current user logged in <user>. That way we know who to filter for when toggled 
  - Data 
    - Current user
    - SQL Data for users and their scores
  - Link: /scoreboard/\<user\>
  - Tests
    - Have a test SQL table with data we know. E.g. 3 entries. We can then test to make sure the table is rendered with the correct order of users
    - Read each entry and compare with the user data in SQL Table
    - Toggle user only and make sure no other users information is displayed
