const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector('.gallery');
galleryRef.style.display = 'flex';
galleryRef.style.flexWrap = 'wrap';
galleryRef.style.listStyle = 'none';
galleryRef.style.padding = '0';
galleryRef.style.gap = '20px';

const contentString = images.reduce(
  (acc, image) =>
    (acc += `<li class ="galleryItem"><img class ="galleryImg" src="${image.url}" alt="${image.alt}"></li>`),
  ''
);

galleryRef.insertAdjacentHTML('beforeend', contentString);

const imgElement = document.querySelectorAll('.galleryItem');
