var count = 10; // The delay in seconds before redirecting.
var redirect = "https://www.carnivalhunt.com/"; // The redirection's landing page.

function countDown() {
  if(count >= 0){
    document.getElementById("timer").innerHTML = count--;
    setTimeout("countDown()", 1000);
  }else{
    window.location.href = redirect;
  }
}
countDown();
