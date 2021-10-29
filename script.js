var popup = window.typeformEmbed.makePopup(
    "https://qqiszdqwksi.typeform.com/to/H8aBuZWx",
    {
      mode: "popup",
      hideHeaders: true,
      hideFooter: true
    }
  );
  
  var popupOpened = false; // open the form only once for better UX
  var prevY = 0; // for detecting mouse movement direction
  document.addEventListener("mousemove", function(event) {
    // open popup  if the mouse is in top 50 pixels,
    // moving towards top of the screen
    // and popup was not displayed yet
    if (event.clientY < 50 && event.clientY < prevY && !popupOpened) {
      popupOpened = true;
      popup.open();
    } else {
      prevY = event.clientY;
    }
  });
  