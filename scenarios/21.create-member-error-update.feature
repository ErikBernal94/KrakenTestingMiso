Feature: crear miembro, modificarlo , verificar error y corregirlo para modificar


@user1 @web

Scenario: Como usuario creo, valido y modifico un miembro

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

  And I enter name member "<NAME-MEMBER-CREATE-UPDATE>"

  And I enter email member "<EMAIL-MEMBER-CREATE-ERROR-UPDATE>"

  And I click button Save member

  And I see error email

  And I enter email member "<EMAIL-MEMBER-CREATE-UPDATE>"

  And I click button Retry member

  And I click the go Members

  And I click the name member of list "<NAME-MEMBER-CREATE-UPDATE>"

  And I enter note for member "<NOTE-MEMBER-UPDATE>"

  And I enter name member "<NAME-MEMBER-UPDATE>"

  And I click button Save member

  And I click the go Members
  
  Then I check the name member of list "<NAME-MEMBER-UPDATE>"
