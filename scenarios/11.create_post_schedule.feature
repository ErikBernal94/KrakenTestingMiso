Feature: crear post con horario


@user1 @web

Scenario: Como usuario programo un post para publicar

  Given I navigate to page "<GHOST-URL>"

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

  And I click on schedule radio button

  And I set time on schedule button confirm

  And I click confirm publish button

  And I click the go back post list

  And I wait for 2 seconds

  Then I review the post not published of list, be schedule "<POSTTITLE-SCHEDULE>"
  