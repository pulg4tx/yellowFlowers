
  // Function popup
  function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
  }
  
  function closeMessage() {
    var message = document.querySelector(".welcomeMessage")
    var flowers = document.querySelector(".flowers")
    message.style.display = "none";
    flowers.classList.remove("none");
    document.querySelector("main").classList.remove("not-loaded");
    setTimeout(function () {
        var popup = document.getElementById("popup");
        popup.style.display = "block";
      }, 8000);
  }
  