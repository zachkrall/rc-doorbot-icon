var isInStandaloneMode = function(){
  return (window.matchMedia('(display-mode: standalone)').matches) || (window.navigator.standalone);
}

if (isInStandaloneMode()) {
  console.log("webapp is installed");

  document.getElementById('welcome').style.display  = 'none';
  document.getElementById('redirect').style.display = 'block';
  document.getElementById('logo').style.textAlign   = 'center';

  setTimeout(function(){
    window.location = "http://doorbot.recurse.com";
  }, 300);

} else {
  console.log("webapp is not installed");
}
