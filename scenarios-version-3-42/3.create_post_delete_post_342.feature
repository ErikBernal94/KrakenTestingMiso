Feature: Crear y borrar post


@user1 @web

Scenario: Como usuario creo y elimino un post

  Given I navigate to page "<GHOST-URL>"

  And I wait for 5 seconds

  When I take a screenshot

  And I enter email "<USERNAME1>"

  And I wait for 2 seconds

  And I enter password "<PASSWORD1>"

  And I take a screenshot

  And I wait for 2 seconds

  And I click next

  And I wait for 7 seconds

  And I click on new post
  
  And I enter post title "<POSTTITLE-MODIFIED-OLD-DELETE>"

  And I enter post content "<POSTCONTENT>"

  And I take a screenshot

  And I publish post

  And I click publish button

  And I wait for 2 seconds

  And I click the go back post list

  And I wait for 2 seconds

  And I click on view site

  And I take a screenshot

  And I review the post  published of viewsite "<POSTTITLE-MODIFIED-OLD-DELETE>"

  And I click the go back post list

  And I review the item of list posts "<POSTTITLE-MODIFIED-OLD-DELETE>"

  And I take a screenshot

  And I enter post title "<POSTTITLE-MODIFIED-NEW-DELETE>"

  And I publish post

  And I take a screenshot

  And I click publish button

  And I wait for 2 seconds

  And I click the go back post list

  And I wait for 2 seconds

  And I take a screenshot

  And  I review the item of list posts "<POSTTITLE-MODIFIED-NEW-DELETE>"

  And I click the toggle button

  And I click on delete post button

  And I take a screenshot

  And I click on delete confirmation

  And I wait for 2 seconds

  And I take a screenshot

  Then I review the page were deleted of list "<POSTTITLE-MODIFIED-NEW-DELETE>"

