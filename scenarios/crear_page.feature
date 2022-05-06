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

  And I click on Pages

  And I click on New page
  
  And I enter page title "<PAGETITLE>"

  And I enter page content "<PAGECONTENT>"

  And I publish post

  And I click publish button

  And I wait for 2 seconds

  And I click the go back page list

  And I wait for 2 seconds

  Then I review the page item of list "<PAGETITLE>"