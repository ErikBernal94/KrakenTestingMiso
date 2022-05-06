Feature: crear miembro validando error


@user1 @web

Scenario: Como usuario creo valido errores creando un miembro

  Given I navigate to page "<GHOST-URL>"

  And I wait for 5 seconds

  When I enter email "<USERNAME1>"

  And I wait for 2 seconds

  And I enter password "<PASSWORD1>"

  And I wait for 2 seconds

  And I click next

  And I wait for 7 seconds

  And I click the go Members

  And I click button New member

  And I enter name member "<NAME-MEMBER-CREATE>"

  And I enter email member "<EMAIL-MEMBER-CREATE-ERROR>"

  And I click button Save member

  Then I check error email