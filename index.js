
const navbarItems = document.querySelectorAll('.navbar-item');
const blurryBackground = document.querySelector('.blurry-background');

    navbarItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        item.querySelector('.dropdown-menu').style.display = 'block';
        blurryBackground.style.filter = 'blur(15px)'; 
        blurryBackground.style.display = 'block'; 


      });

      item.addEventListener('mouseleave', () => {
        item.querySelector('.dropdown-menu').style.display = 'none';
        blurryBackground.style.filter = 'blur(0)';
        blurryBackground.style.display = 'none'; 

      });
    });
    /*search*/
    function toggleSearchOverlay() {
      var searchOverlay = document.getElementById('searchOverlay');
      searchOverlay.style.display = 'flex';
    }

    function hideSearchOverlay() {
      var searchOverlay = document.getElementById('searchOverlay');
      searchOverlay.style.display = 'none';
    }
    /*products*/
    function toggleSubMenu(id) {
      var submenu = document.getElementById("submenu" + id);
      submenu.style.display = (submenu.style.display === "block") ? "none" : "block";
    }