// Готово

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const galerryEl = document.querySelector('#gallery');
galerryEl.classList.add('flex-container');
galerryEl.style.display = 'flex';
galerryEl.style.alignItems = 'center';

const option = images.map(option => {
  
const galleryListEl = document.createElement('li');
galleryListEl.classList.add('flex-element');
galleryListEl.style.marginRight = '20px';
galleryListEl.style.listStyle = 'none';


  const galleryImgEl = document.createElement('img');
  galleryImgEl.src = option.url;
  galleryImgEl.alt = option.alt;
  galleryImgEl.width = 350;

  galleryListEl.appendChild(galleryImgEl);
  galerryEl.appendChild(galleryListEl);

  return galleryImgEl;
});
console.log(galerryEl)
