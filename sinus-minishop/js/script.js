let h3Element = document.querySelector('.art-1 h3'); 
h3Element.textContent = 'Potato';


let aElement = document.querySelector('nav a');
    aElement.textContent = 'Start';


    let thirdLink = document.querySelectorAll ('a') [2];
        thirdLink.textContent = 'Mail Us';

        let sinusHooodFire = document.querySelectorAll ('h3') [1];
        sinusHooodFire.textContent = 'red';
    


let figure1 = document.getElementsByTagName ('figure') [0];
figure1.style.backgroundColor = 'blue';

let paragraphs = document.getElementsByTagName ('p')
for (let i = 0 ; i < paragraphs.length; i++) {
    paragraphs[i].style.color = 'dodgerblue';
}

let button = document.querySelectorAll ('button');
button.forEach(button => {
button.textContent = 'add to cart';
});


let a = document.querySelector ('a');
a.classList.add ('active');

let logoElement = document.querySelector ('.logo');
logoElement.classList.remove ('logo');




const article = document.createElement('article');
article.className='art-4';

const figure = document.createElement('figure');

const img = document.createElement('img');
img.src = 'img/hoodie-forrest.png';
img.alt='hoodie'
figure.appendChild(img);



const h2 = document.createElement('h2');
h2.textContent='Sinus Hoodie';

const h3 = document.createElement('h3');
h3.textContent = "Forest";

const p = document.createElement('p');
p.textContent= ("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos saepe ratione possimus nobis?");

const buttons = document.createElement('button');
buttons.textContent='buy now';

article.appendChild(figure);
   article.appendChild(h2);
   article.appendChild(h3);
   article.appendChild(p);
   article.appendChild(buttons);

   const main = document.querySelector('main');

   if (main) {
    main.appendChild(article);
} else {
    console.error("Main element not found.");
}


const logo = document.querySelector('.logo');

 if (logo) { 
    logo.addEventListener('click', function () {
       console.log('logo');
    }); 
    } else (logo)
        console.log('not found');
    


const articles = document.querySelectorAll('article');
articles.forEach(article => {
    article.addEventListener('click', function() {
        console.log('article clicked');
    });
});


