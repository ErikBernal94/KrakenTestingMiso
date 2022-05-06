Feature: Crear una pagina y editarla


@user1 @web

Scenario: Como usuario creo una pagina y despues la edito 

  Given I navigate to page "<GHOST-URL>"

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

  And I click the page item of list "<PAGETITLE>"

  And I enter page title "<EDITEDPAGETITLE>"

  And I enter page content "<EDITEDPAGECONTENT>"

  And I publish post

  And I click publish button

  And I wait for 2 seconds

  And I click the go back page list

  And I wait for 2 seconds
