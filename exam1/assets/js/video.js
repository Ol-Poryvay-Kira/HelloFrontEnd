$(".video__abstract")
  .parent()
  .click(function () {
    if (
      $(this).children(".video__abstract").get(0).paused) 
      {
      $(this).children(".video__abstract").get(0).play();
      $(this).children(".play").fadeOut();
    } 
    else {
      $(this).children(".video__abstract").get(0).pause();
      $(this).children(".play").fadeIn();
    }
  });