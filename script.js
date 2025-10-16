function showPage() {
  const activeElement = document.querySelector(`page.active`);
  if(activeElement) activeElement.classList.remove(`active`);
  const hash = decodeURIComponent(location.hash.slice(1));
  if(hash) {
    const pageElement = document.getElementById(hash);
    if(pageElement) {
      if(hash == `page0`) document.title = `Головна`;
      else if(hash == `page1`) document.title = `КН-22-1`;
      else if(hash == `page2`) document.title = `КН-22-2`;
      else if(hash == `page3`) document.title = `Календар`;
      else if(hash == `page4`) document.title = `Розклад`;
      else if(hash == `page5`) document.title = `Студенти`;
      else if(hash == `page6`) document.title = `Календар`;
      else if(hash == `page7`) document.title = `Розклад`;
      else if(hash == `page8`) document.title = `Студенти`;
      pageElement.classList.add(`active`);
    }
    else {
      document.title = `404`;
      document.getElementById(`page9`).classList.add(`active`);  
    }
  }
  else {
    document.title = `Головна`;
    document.getElementById(`page0`).classList.add(`active`);
  }
}
addEventListener(`load`, showPage);
addEventListener(`hashchange`, showPage);