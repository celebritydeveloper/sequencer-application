

  // Snack Bar Call Function
function snackbar() {
    let snackBar = document.getElementById("snackbar");
  
    snackBar.className = "show";
    setTimeout(function(){ snackBar.className = snackBar.className.replace("show", ""); }, 3000);
  }

  export default snackbar;