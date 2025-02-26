let alertShown = false;


function showAlertOnce() {
  if (!alertShown) { 
    alert("این نسخه مخصوص دسکتاپ است");
    alertShown = true;  
  }
}

showAlertOnce();
