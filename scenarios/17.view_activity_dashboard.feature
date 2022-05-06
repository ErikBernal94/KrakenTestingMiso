Feature: Crear una pagina, editarla y no publicarla


@user1 @web

Scenario: Como usuario creo una pagina, despues la edito y la marco para no publicarla  

  Given I navigate to page "<GHOST-URL>"

  And I wait for 5 seconds

  When I enter email "<USERNAME1>"

  And I wait for 2 seconds

  And I enter password "<PASSWORD1>"

  And I wait for 2 seconds

  And I click next

  And I wait for 7 seconds

  And I click on dashboard

  And I click on see all activity

  Then I review no member activity yet