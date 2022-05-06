Feature: crear post y modificar el horario de publicacion


@user1 @web

Scenario: Como usuario creo el post y modifico el horario de publicacion

  Given I navigate to page "<GHOST-URL>"

  And I wait for 5 seconds

  When I enter email "<USERNAME1>"

  And I wait for 2 seconds

  And I enter password "<PASSWORD1>"

  And I wait for 2 seconds

  And I click next

  And I wait for 7 seconds

  And I click on new post
  
  And I enter post title "<POSTTITLE-MODIFIED-OLD-SCHEDULE>"

  And I enter post content "<POSTCONTENT>"

  And I publish post

  And I click publish button

  And I click confirm publish button

  And I wait for 10 seconds

  And I click the go back post list

  And I wait for 10 seconds

  And I click on view site

  And I review the post  published of viewsite "<POSTTITLE-MODIFIED-OLD-SCHEDULE>"

  And I click the go back post list

  And I review the item of list posts "<POSTTITLE-MODIFIED-OLD-SCHEDULE>"

  And I enter post title "<POSTTITLE-MODIFIED-NEW-SCHEDULE>"

  And I publish post

  And I click publish button

  And I click confirm publish button

  And I wait for 2 seconds

  And I click the go back post list

  And I wait for 2 seconds

  And I review the item of list posts "<POSTTITLE-MODIFIED-NEW-SCHEDULE>"  

  And I click Update button

  And I click on unpublish

  And I click publish button

  And I wait for 2 seconds

  And I click the go back post list

  And I review the item of list posts "<POSTTITLE-MODIFIED-NEW-SCHEDULE>"  
  
  And I publish post

  And I click on schedule radio button

  And I set time on schedule button confirm

  And I click confirm publish button

  And I wait for 2 seconds

  Then I review the page not published of list "<EDITEDPAGENOTPUBLISHEDTITLE>"