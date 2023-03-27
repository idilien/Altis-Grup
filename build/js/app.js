

    const tabs =Array.prototype.slice.apply(document.querySelectorAll('.tabs__item'));
    const panels = Array.prototype.slice.apply (document.querySelectorAll('.panels__items'));
   
    document.getElementById('tabs').addEventListener('click', e => {
        if(e.target.classList.contains('tabs__item')){
            let i = tabs.indexOf(e.target);
            tabs.map(tab => tab.classList.remove('active'));
            tabs[i].classList.add('active');
            panels.map(tab => tab.classList.remove('active'));
            panels[i].classList.add('active');
        }
    });

    const toggle = document.querySelector('.header__toggle');
    const links = document.querySelector('.nav');

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('rotate');
        links.classList.toggle('active-nav');
    })





    


