Feature: Translation
  As a user of this application
  I want to translate from german to english
  to stay in touch with some friends

  Scenario: As a user I translate "Hallo"
    Given I open the main page
    When I translate "Hallo"
    Then The translation "Hello" should be shown

  Scenario: As a user I translate "Something else"
    Given I open the main page
    When I translate "Something else"
    Then The translation "Sorry, I do not know how to translate 'Something else'" should be shown