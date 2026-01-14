// gi promenuva site paragraph elementi
  const paragraphs = document.querySelectorAll('p');
  paragraphs.forEach((p, index) => {
    p.textContent = `This is paragraph number ${index + 1} - Text changed!`;
  });

  // gi promenuva site h1 elementi
  const h1Elements = document.querySelectorAll('h1');
  h1Elements.forEach((h1, index) => {
    h1.textContent = `Header 1 #${index + 1} - Changed!`;
  });

  // gi promenuva site h3 elementi
  const h3Elements = document.querySelectorAll('h3');
  h3Elements.forEach((h3, index) => {
    h3.textContent = `Header 3 #${index + 1} - Also changed!`;
  });