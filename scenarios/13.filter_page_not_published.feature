Feature: Filtro de páginas no publicadas


@user1 @web

Scenario:  Como usuario creo una pagina, la marco para no publicarla, filtro por paginas no publicadas y verifico que este en la lista  

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
  
  And I enter page title "<FILTEREDPAGENOTPUBLISHEDTITLE>"

  And I enter page content "<PAGECONTENT>"

  And I publish post

  And I click publish button

  And I wait for 2 seconds

  And I click the go back page list

  And I wait for 2 seconds

  And I click the page item of list "<FILTEREDPAGENOTPUBLISHEDTITLE>"

  And I publish post

  And I click on unpublish

  And I click publish button

  And I wait for 2 seconds

  And I click the go back page list

  And I wait for 2 seconds

  And I click filter page list

  And I click filter draft pages

  Then I review the page not published of list "<FILTEREDPAGENOTPUBLISHEDTITLE>"