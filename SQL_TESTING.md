SQL Design
--

Nathan
- Score Table: 
  - Description: A table holding all usernames and their top 10 scores. 
  - Parameters: The username of the user requesting to view the scoreboard.
  - return values: username \<TEXT\>, score1 \<INTEGER\>, score2 \<INTEGER\>, score3 \<INTEGER\>, score4 \<INTEGER\>, score5 \<INTEGER\>, score6 \<INTEGER\>, score7 \<INTEGER\>, score8 \<INTEGER\>, score9 \<INTEGER\>, score10 \<INTEGER\>
  - List of tests for verifying each access method:
    - **Use case name:** Verify the username is in the table with a single score.<br>
        **Description:** Test if we can find the username in the table and a score by using the currently logged in user.<br>
        **Pre-conditions:** User has logged into the game. Played at least one game to enter a score. <br> 
        **Test steps:**
            <br> 1. Login.
            <br> 2. Quickly play a game (can purposely fail, we just want a score) 
            <br> 3. Navigate to scoreboard page.
        <br>
        **Expected result:** The username is now on the scoreboard table and one score is entered.<br>
        **Actual result:** User and their score has been added to the table and is displaying in the correct position on the webpage scoreboard.
        **Status (Pass/Fail):** Pass
        **Notes:** This is only testing if the username and one score is entered correctly. 
        **Post-conditions:** User scores are adding to the table correctly. The account username has an entry in the scoreboard table. <br>
    - **Use case name:** Verify a user can see global top scores. <br>
        **Description:** Test that a user can see not just their own score, but also the top scores of other players.<br>
        **Pre-conditions:** The current user has an entry in the table. Another user has entries in the scoreboard table.<br> 
        **Test steps:** 1. Play a game if the current user has no entries. 
                        2. Navigate to the scoreboard page. <br> 
        **Expected result:** Multiple entries in the HTML scoreboard table. Both the current user and other users. <br>
        **Actual result:** The top 10 scores (in order) on the HTML scoreboard. Containing entries from the current user and other users. <br>
        **Status (Pass/Fail):** Pass<br>
        **Notes:** N/A<br>
        **Post-conditions:** Can see the best 10 scores in the correct order. <br>
    - **Use case name:** Filter for the current user only scores.<br>
            **Description:** Ensure that we can display only the current users filters. <br>
            **Pre-conditions:** The user has multiple entries (games played).<br> 
            **Test steps:** Play multiple games to enter multiple scores. Navigate to the scoreboard page. Selete the filter by curret user button. <br> 
            **Expected result:** No other users and their scores. Only the current users top 10 scores.<br>
            **Actual result:** The top 10 scores in order that the current user has.<br>
            **Status (Pass/Fail):** Pass if no other users are found.<br>
            **Notes:** We need to check if any other usernames are on the table and the order is correct. <br>
            **Post-conditions:** The filter option is working!<br>
    - **Use case name:** All 10 entries are in order and the BEST.<br>
        **Description:** Test that if a user plays more than 10 games, the 11th and onwards games are added correctly to the scoreboard if they are better than a previous attempt. <br>
        **Pre-conditions:** The user has 10 entries.<br> 
        **Test steps:** Play a game and get a better score than one of the 10 current scores. <br> 
        **Expected result:** The table to update the scores entering the new entry, removing the lowest, and maintaining an ascending order. <br>
        **Actual result:** Table enters new result maintaining order.<br>
        **Status (Pass/Fail):** Pass<br>
        **Notes:** N/A <br>
        **Post-conditions:** Scoreboard contains the best 10 scores and will update if the user gets a better score. <br>   

Natalie
- Login Table:
  - Description
  - Parameters
  - return values
  - List of tests for verifying each access method
    - **Use case name** <br>
        **Description:** <br>
        **Pre-conditions:** <br> 
        **Test steps:** <br> 
        **Expected result:** <br>
        **Actual result:** <br>
        **Status (Pass/Fail):** <br>
        **Notes:** <br>
        **Post-conditions:** <br>


Zach
- User Stats:
  - Description
  - Parameters
  - return values
  - List of tests for verifying each access method
    - **Use case name** <br>
        **Description:** <br>
        **Pre-conditions:** <br> 
        **Test steps:** <br> 
        **Expected result:** <br>
        **Actual result:** <br>
        **Status (Pass/Fail):** <br>
        **Notes:** <br>
        **Post-conditions:** <br>
