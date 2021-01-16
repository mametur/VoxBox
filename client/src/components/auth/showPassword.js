export const showHidePassword = () => {
    const getPasswordElement = document.getElementById("password");
    if (getPasswordElement.type === "password") {
      getPasswordElement.type = "text";
    } else {
      getPasswordElement.type = "password";
    }
  }