describe("EXTERMINATORS - HACKATHON TEST SUITE", () => {
  it("Login from main page", () => {
    browser.reloadSession();
    browser.url("/");
    const signIn = $(".hide_xs");
    const emailField = $("#email");
    const passwordField = $("#passwd");
    const emailUser = "lolol@lol.com";
    const passwordUser = "7mChDmhuaxsFmk9";
    const submitButton = $("#SubmitLogin");
    const userName = $("#user_info_acc");
    signIn.click();
    emailField.setValue(emailUser);
    passwordField.setValue(passwordUser);
    submitButton.click();
    expect(userName.getText()).toEqual("Luca");
  });
  it.only("Main page room reservation", () => {
    browser.reloadSession();
    browser.url("/");
    const hamburgerMenu = $(".nav_toggle");
    const roomsLink = $('')
    hamburgerMenu.click();
  });
});
