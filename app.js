document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.front');
    const accords = document.querySelectorAll('.child-accord');
  
    const selectedAccord = (button) => {
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    };
  
    const selectedParagraph = (accord) => {
      accords.forEach(acc => {
        acc.classList.remove('active');
        acc.style.display = 'none';
      });
      accord.classList.add('active');
      accord.style.display = 'flex';
    };
  
    buttons.forEach((button, index) => {
      const accord = accords[index];
      const plus = button.querySelector('.plus');
      const minus = button.querySelector('.minus');
  
      button.addEventListener('click', () => {
        const isActive = accord.classList.contains('active');
  
        buttons.forEach(btn => {
          const btnPlus = btn.querySelector('.plus');
          const btnMinus = btn.querySelector('.minus');
          if (btnPlus && btnMinus) {
            btnPlus.style.display = 'inline';
            btnMinus.style.display = 'none';
          }
        });
  
        if (isActive) {
          accord.classList.remove('active');
          accord.style.display = 'none';
          button.classList.remove('active');
        } else {
          selectedAccord(button);
          selectedParagraph(accord);
  
          if (plus && minus) {
            plus.style.display = 'none';
            minus.style.display = 'inline';
          }
        }
      });
    });
  });
  