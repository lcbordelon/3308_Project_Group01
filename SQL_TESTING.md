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
        **Actual result:** User and their score has been added to the table and is displaying in the correct position on the webpage scoreboard.<br>
        **Status (Pass/Fail):** Pass<br>
        **Notes:** This is only testing if the username and one score is entered correctly. <br>
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
            **Test steps:** Play multiple games to enter multiple scores. Navigate to the scoreboard page. Select the filter by current user button. <br> 
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
  - Description: A table holding usernames and the passwords associated with said username.
  - Parameters: Username, Password
  - return values: Username, Password, and probably email.
  - List of tests for verifying each access method
    - **Use case name** Valid username and password entered.<br>
        **Description:** Test to see if entering valid/correct credentials results in correct return values.<br>
        **Pre-conditions:** Valid credentials exist in database.<br> 
        **Test steps:** <br>
            1. Submit test username and password that are known to exist in table.
            2. Verify the database returns a row from the database using .fetchone().
        **Expected result:** Database returns expected data. <br>
        **Actual result:** Database returns expected data and nothing else. <br>
        **Status (Pass/Fail):** Pass<br>
        **Notes:** <br>
        **Post-conditions:** If a return is received logged in status will be triggered.<br>
    - **Use case name** Valid username and invalid password entered.<br>
        **Description:** Test to see if entering valid/correct username with incorrect password results in no return values.<br>
        **Pre-conditions:** Valid credentials exist in database.<br> 
        **Test steps:** <br>
            1. Submit test username that is known to exist in table and a non-matching password.
            2. Verify the database fails to return a row from the database using .fetchone().
        **Expected result:** Database returns no data. <br>
        **Actual result:** Database returns no data. <br>
        **Status (Pass/Fail):** Pass<br>
        **Notes:** This is important because we need users to be able to be authenticated to avoid anyone else to be able to log in to that account. <br>
        **Post-conditions:** A message will be given to the user informing them of the incorrect credentials.<br>
    - **Use case name** Invalid username entered.<br>
        **Description:** Test to see if entering non-existent username results in no return values.<br>
        **Pre-conditions:** Username entered known not to exist in database.<br> 
        **Test steps:** <br>
            1. Submit test username that is known not to exist in the database and any password (p/w doesn't matter in this test).
            2. Verify the database fails to return a row from the database using .fetchone().
        **Expected result:** Database returns no data. <br>
        **Actual result:** Database returns no data. <br>
        **Status (Pass/Fail):** Pass<br>
        **Notes:** If somehow there is a return it would mean some other user's account was logged into.<br>
        **Post-conditions:** A message will be given to the user informing them of the incorrect credentials.<br>


Zach
- User Stats:
  - Description: A table holding various stats the user has from playing games.
  - Parameters: Username of the user getting stats from.
  - return values: username \<TEXT\>, games played \<INTEGER\>, games won \<INTEGER\>, games lost \<INTEGER\>, mines defused \<INTEGER\>
  - List of tests for verifying each access method
    - **Use case name** User can see correct stats. <br>
        **Description:** Test that valid stats show up when trying to look at user stats.<br>
        **Pre-conditions:** User is logged in.<br> 
        **Test steps:** <br> 
            1. Go to user stats page while logged in. <br>
            2. Look at the stats on the page. <br>
        **Expected result:** User should see stats.<br>
        **Actual result:** User navigated to page which should show data related to games played <br>
        **Status (Pass/Fail):** Pass <br>
        **Notes:** N/A<br>
        **Post-conditions:** User navigated to page containing stats.<br>
    - **Use case name** Stats update correctly. <br>
        **Description:** Verify the the data stored in the table changes as games are played.<br>
        **Pre-conditions:** User is logged in.<br> 
        **Test steps:** <br> 
            1. Play a game to get new stats. <br>
            2. Look at the stats on the page to see if they upodated. <br>
        **Expected result:** Stats should change depending on what happened during the game.<br>
        **Actual result:** Values in the data base should change correctly. <br>
        **Status (Pass/Fail):** Pass<br>
        **Notes:** N/A<br>
        **Post-conditions:** User stats will match what happened during the game and update accordingly.<br>
