Welcome Page (/welcome)
 Description
• Button to login
• Button to view scoreboard
• Welcome text at top
 No parameters needed
 Flask/html/css files
• Buttons
• Routes for buttons
• Global header
 Tests
• Read the paragraph, header, and button tags to verify they loaded

Login Page (/login)

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

  - Description 
    - Page that contains the game itself
    - Will contain: 
      - A gameboard with tiles that can be clicked on
      - A timer to track how long the current game taking
      - A menu with game options
    - Flask/html/css files
      - Buttons
      - Routes for menu options
      - Global header
      - Backend files for the game functionality
      - The gameboard
    - ![Gameboard](Img/Gamedboard.png? "Gameboard")
  - Parameters
    - The current difficulty selection. This may not be needed as we plan to fully implement normal difficulty before attempting to add additional difficulty levels.
  - Data 
    - Current user
    - SQL connection used to track the current score when a game is finished successfully
  - Link: /game/\<difficulty\>
  - Tests
    - SQL unit test used to test the insertion fuctionality to show if new scores can be added.
    - Test used to show if the game data is loading correctly
    - Toggle user only and make sure no other users information is displayed

Scoreboard Page (/scoreboard)
