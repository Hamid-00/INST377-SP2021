/* Put your javascript in here */
<!DOCTYPE html>

<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="style.css">
</head>

<body>

  <div id="carousel" class="carousel">
    <button class="arrow prev">⇦</button>
    <div class="gallery">
      <ul class="images">
        <li><img src="https://en.js.cx/carousel/1.png"></li>
        <li><img src="https://en.js.cx/carousel/2.png"></li>
        <li><img src="https://en.js.cx/carousel/3.png"></li>
        <li><img src="https://en.js.cx/carousel/4.png"></li>
        <li><img src="https://en.js.cx/carousel/5.png"></li>
        <li><img src="https://en.js.cx/carousel/6.png"></li>
        <li><img src="https://en.js.cx/carousel/7.png"></li>
        <li><img src="https://en.js.cx/carousel/8.png"></li>
        <li><img src="https://en.js.cx/carousel/9.png"></li>
        <li><img src="https://en.js.cx/carousel/10.png"></li>
      </ul>
    </div>
    <button class="arrow next">⇨</button>
  </div>

  <script>
    /* label the images, just for convenience, to visually track them */
    let i = 1;
    for(let li of carousel.querySelectorAll('li')) {
      li.style.position = 'relative';
      li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
      i++;
    }

    /* configuration */
    let width = 130; // image width
    let count = 3; // visible images count

    let list = carousel.querySelector('ul');
    let listElems = carousel.querySelectorAll('li');

    let position = 0; // ribbon scroll position

    carousel.querySelector('.prev').onclick = function() {
      // shift left
      position += width * count;
      // can't move to the left too much, end of images
      position = Math.min(position, 0)
      list.style.marginLeft = position + 'px';
    };

    carousel.querySelector('.next').onclick = function() {
      // shift right
      position -= width * count;
      // can only shift the ribbbon for (total ribbon length - visible count) images
      position = Math.max(position, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
    };
  </script>

</body>
</html>