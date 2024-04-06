const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');
//array image filenames 
const image1 = ['pic1.jpg'];
const image2 =['pic2.jpg'];
const image3 = ['pic3.jpg'];
const image4 = ['pic4.jpg'];
const image5 =['pic5.jpg'];
//object  text for each image
const altTexts = {'pic1.jpg': 'baby eye','pic2.jpg': 'rocks','pic3.jpg': 'purple flowers','pic4.jpg': 'ancient picture','pic5.jpg': 'Butterfly'};
// thumb-bar Function
function ThumbBar(imageFilenames) {
  imageFilenames.forEach(filename => {const newImage = document.createElement('img');newImage.setAttribute('src', `images/${filename}`);
    newImage.setAttribute('alt', altTexts[filename]);thumbBar.appendChild(newImage);
    //click  thumb-bar
    newImage.addEventListener('click', function() {
      displayedImage.src = this.src;
      displayedImage.alt = this.alt;
    });
  });
}
// images set for thumb-bar
ThumbBar(image1);
ThumbBar(image2);
ThumbBar(image3);
ThumbBar(image4);
ThumbBar(image5);
//dark and light button function 
btn.addEventListener('click', function() {
  const overlay = document.querySelector('.overlay');
  const darkmode = btn.getAttribute('class') === 'dark';
    btn.setAttribute('class', darkmode , 'light','dark');
    btn.textContent = darkmode , 'Lighten' , 'Darken';
    overlay.style.backgroundColor = darkmode ? 'rgb(0 0 0 / 50%)' : 'rgb(0 0 0 / 0%)';
  });