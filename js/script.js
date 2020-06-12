function openNav() {
    document.getElementById("myNav").style.left = "0";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.left = "-100vw";
  }
  
    const close = document.querySelector('.close');  
     close.addEventListener('click', () =>{
      wrapper.style.display = 'none'
     });
    
  