Feature: Crear y modificar post


@user1 @web

Scenario: Como usuario creo y modifico un post

  Given I navigate to page "<GHOST-URL>"

  And I wait for 5 seconds

  When I enter email "<USERNAME1>"

  And I wait for 2 seconds

  And I enter password "<PASSWORD1>"

  And I wait for 2 seconds

  And I click next

  And I wait for 7 seconds

  And I click on new post
  
  And I enter post title "<POSTTITLE-MODIFIED-OLD>"

  And I enter post content "<POSTCONTENT>"

  And I publish post

  And I click publish button

  And I click confirm publish button

  And I wait for 2 seconds

  And I click the go back post list

  And I wait for 2 seconds

  And I click on view site

  And I review the post  published of viewsite "<POSTTITLE-MODIFIED-OLD>"

  And I click the go back post list

  And I review the item of list posts "<POSTTITLE-MODIFIED-OLD>"

  And I enter post title "<POSTTITLE-MODIFIED-NEW>"

  And I publish post

  And I click publish button

  And I click confirm publish button

  And I wait for 2 seconds

  And I click the go back post list

  And I wait for 2 seconds

  Then I review the item of list "<POSTTITLE-MODIFIED-NEW>"