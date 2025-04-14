document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.front');
    const accords = document.querySelectorAll('.child-accord');
  
    const selectedAccord = (button) => {
      buttons.forEach(button => button.classList.remove('active'));
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
      button.addEventListener('click', () => {
        const isActive = accord.classList.contains('active');
  
        if (isActive) {
          accord.classList.remove('active');
          accord.style.display = 'none';
          button.classList.remove('active');
        } else {
          selectedAccord(button);
          selectedParagraph(accord);
        }
        console.log('here for it');
      });
    });
  });
  