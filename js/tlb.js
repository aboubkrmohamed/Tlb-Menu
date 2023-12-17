$('.autoplay').slick({
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
  })

  

  // loading

  const loading =document.getElementById('loading');
  const section =document.getElementById('MainPage');
  
  function myFunction() {
  setTimeout(()=>{
  document.getElementById("loading").style.display = "none";

  document.getElementById("MainPage").style.display = "block";

  
   
  }, 3000);
  }
  
  myFunction()
  
  
