Feature: crear, modificar y verificar en el landing page


@user1 @web

Scenario: Como usuario creo, modifico y verifico la publicacion del post

  Given I navigate to page "<GHOST-URL>"

  And I wait for 5 seconds

  When I enter email "<USERNAME1>"

  And I wait for 2 seconds

  And I enter password "<PASSWORD1>"

  And I wait for 2 seconds

  And I click next

  And I wait for 7 seconds

  And I click on new post
  
  And I enter post title "<POSTTITLE-REVIEW-OLD>"

  And I enter post content "<POSTCONTENT>"

  And I publish post

  And I click publish button

  And I click confirm publish button

  And I wait for 2 seconds

  And I click the go back post list

  And I wait for 2 seconds

  And I click on view site

  And I review the post  published of viewsite "<POSTTITLE-REVIEW-OLD>"

  And I click the go back post list

  And I review the item of list posts "<POSTTITLE-REVIEW-OLD>"

  And I enter post title "<POSTTITLE-REVIEW-NEW>"

  And I publish post

  And I click publish button

  And I click confirm publish button

  And I wait for 2 seconds

  And I click the go back post list

  And I wait for 2 seconds

  And I click on view site

  Then I review the post is published "<POSTTITLE-REVIEW-NEW>"
