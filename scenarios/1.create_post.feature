Feature: Crear post


@user1 @web

Scenario: Como usuario creo un post 

  Given I navigate to page "http://localhost:2368/ghost"

  And I wait for 5 seconds

  When I enter email "<USERNAME1>"

  And I wait for 2 seconds

  And I enter password "<PASSWORD1>"

  And I wait for 2 seconds

  And I click next

  And I wait for 7 seconds

  And I click on new post
  
  And I enter post title "<POSTTITLE>"

  And I enter post content "<POSTCONTENT>"

  And I publish post

  And I click publish button

  And I click confirm publish button

  And I wait for 2 seconds

  And I click the go back post list

  And I wait for 2 seconds

  Then I review the item of list "<POSTTITLE>"