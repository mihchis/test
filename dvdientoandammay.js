const saasBox = document.querySelector('.saas');
const iaasBox = document.querySelector('.iaas');
const paasBox = document.querySelector('.paas');

saasBox.addEventListener('click', () => {
    iaasBox.classList.remove('selected-box');
    paasBox.classList.remove('selected-box');
    saasBox.classList.add('selected-box');
    updateContainerStyle(saasBox);
  });
  
  iaasBox.addEventListener('click', () => {
    saasBox.classList.remove('selected-box');
    paasBox.classList.remove('selected-box');
    iaasBox.classList.add('selected-box');
    updateContainerStyle(iaasBox);
  });
  
  paasBox.addEventListener('click', () => {
    saasBox.classList.remove('selected-box');
    iaasBox.classList.remove('selected-box');
    paasBox.classList.add('selected-box');
    updateContainerStyle(paasBox);
  });
  function updateContainerStyle(selectedBox) {
    const container = document.querySelector('.khung_sip');
    const containerWidth = container.offsetWidth;
    const boxLeft = selectedBox.offsetLeft;
    const boxWidth = selectedBox.offsetWidth;
    const boxCenter = boxLeft + boxWidth / 2;
    const containerLeft = boxCenter - containerWidth / 2;
    container.style.left = `${containerLeft}px`;
  }
  
