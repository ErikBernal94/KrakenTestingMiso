Feature: Filtrar pagina


@user1 @web

Scenario: Como usuario creo una pagina, filtro por publicada y valido que esté en la lista 

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
  
  And I enter page title "<FILTEREDPAGETITLE>"

  And I enter page content "<PAGECONTENT>"

  And I publish post

  And I click publish button

  And I wait for 2 seconds

  And I click the go back page list

  And I wait for 2 seconds

  And I click filter page list

  And I click filter published pages

  Then I review the page item of list "<FILTEREDPAGETITLE>"