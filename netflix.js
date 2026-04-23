
  $(document).ready(function(){
    const images=[
       "img/Capture.PNG",
      "img/opp.PNG",
      "img/fkp.PNG",
      "img/jkdi.PNG"
    ];
    let currentIndex=0;
    $('.default-ltr-cache-afh1q5').click(function(){
     currentIndex = (currentIndex+1)% images.length;
     $('#mainImage').attr('src',images[currentIndex]);
    });
    $('.left').click(function(){
      currentIndex=(currentIndex - 1 + images.length) % images.length;
      $(' #mainImage').attr('src',images[currentIndex]);
    });
  });
