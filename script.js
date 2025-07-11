    
    
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');
    menuToggle.addEventListener('click', () => {
      navList.classList.toggle('show');
    });

    
    const searchInput = document.getElementById('searchInput');
    const productCards = document.querySelectorAll('.product-card');
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();
      productCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        card.style.display = title.includes(query) ? 'flex' : 'none';
      });
    });