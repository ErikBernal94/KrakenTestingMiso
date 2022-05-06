Feature: Filtrar post que no fueron publicados 


@user1 @web

Scenario: Como usuario creo un post, lo marco como no publicado, filtro por no publicado y valido que esté en la lista 

  Given I navigate to page "<GHOST-URL>"

  And I wait for 5 seconds

  When I enter email "<USERNAME1>"

  And I wait for 2 seconds

  And I enter password "<PASSWORD1>"

  And I wait for 2 seconds

  And I click next

  And I wait for 7 seconds

  And I click on new post
  
  And I enter post title "<FILTEREDPOSTNOTPUBLISHEDTITLE>"

  And I enter post content "<POSTCONTENT>"

  And I publish post

  And I click publish button

  And I click confirm publish button

  And I wait for 2 seconds

  And I click the go back post list

  And I wait for 2 seconds

  And I click the post item of list "<FILTEREDPOSTNOTPUBLISHEDTITLE>"

  And I publish post

  And I click on unpublish

  And I click publish button

  And I wait for 2 seconds

  And I click the go back post list

  And I wait for 2 seconds

  And I click filter post list

  And I click filter draft posts

  Then I review the item of list "<FILTEREDPOSTNOTPUBLISHEDTITLE>"