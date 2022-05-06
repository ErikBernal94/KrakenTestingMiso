Feature: Iniciar sesion


@user1 @web

Scenario: Como usuario inicio sesion 

  Given I navigate to page "http://localhost:2368/ghost"

  And I wait for 5 seconds

  When I enter email "<USERNAME1>"

  And I wait for 2 seconds

  And I enter password "<PASSWORD1>"

  And I wait for 2 seconds

  And I click next

  And I wait for 7 seconds

  And I click on new post
  
  And I enter post title "<POSTTITLE-SCHEDULE>"

  And I enter post content "<POSTCONTENT>"

  And I publish post

  And I click on schedule button

  


  