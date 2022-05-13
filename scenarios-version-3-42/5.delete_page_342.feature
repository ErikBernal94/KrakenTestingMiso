Feature: Crear una pagina y eliminarla


@user1 @web

Scenario: Como usuario creo una pagina y despues la elimino 

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

  And I click on Pages

  And I click on New page
  
  And I enter page title "<DELETEDPAGETITLE>"

  And I enter page content "<DELETEDPAGECONTENT>"

  And I take a screenshot

  And I publish post

  And I click publish button

  And I wait for 2 seconds

  And I click the go back page list

  And I wait for 2 seconds

  And I take a screenshot

  And I click the page item of list "<DELETEDPAGETITLE>"

  And I click the toggle button  

  And I click on delete button

  And I click on delete confirmation

  And I wait for 2 seconds

  And I take a screenshot

  Then I review the page were deleted of list "<DELETEDPAGETITLE>"


