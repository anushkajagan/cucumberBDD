Feature: Login to nxtexam.com and verify title

Background:
  Given Navigate to nxtexam.com
  And Click on Signin link
  And Click on Password
  And Enter Email address as "info.chalicas@gmail.com"
  And Enter Password as "Apple**2026"
  And Click on Signin button

@VerifyTitle
Scenario: Verify home page title after successful login
Then the page title should contain "NxtExam"

@VerifyGoogleLink
Scenario: Verify Google link is Clicked
When the user click on Google view Exam link
Then the url of the Google page contains "Google"
Then the title of Google page contains "Google Certification Exams"
Then the google certificates are displayed

@ClickonGoogleLink
Scenario: Verfiy Google certificataion page is clicked
When user click on given Google certification link
Then user is navigated to the corresponding Certification page