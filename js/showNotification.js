window.onload = function() {
  if (window.localStorage.tips) return;

  let notification = document.querySelector('.notification-box');
  setTimeout(() => notification.style.display = 'block', 5000);

  function removeNotification() {
    let checked = document.getElementById('tips').checked;
    if (checked) window.localStorage.setItem('tips', true);

    let body = document.querySelector('body');
    body.removeChild(notification);
  }

  let exit = document.querySelector('.exit');
  exit.addEventListener('click', removeNotification);

  addEventListener('keydown', function(e) {
    if (e.keyCode === 27) removeNotification();
  });

  let messageArr = ["<p>Aenean vestibulum</p> Ante lacus, aliquam aliquet lorem tincidunt a. Pellentesque non ornare urna.",
  "<p>Orci varius natoque</p> Penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec gravida neque nunc, nec hendrerit urna elementum id. ",
  "<p>Morbi non</p> Feugiat erat. Suspendisse tincidunt vitae ante pellentesque commodo. Praesent sapien eros, feugiat vel cursus nec, euismod at diam. Quisque tristique nulla convallis magna auctor, non condimentum diam pharetra. Curabitur eget sagittis odio. Morbi cursus malesuada tellus, in pellentesque nulla tincidunt sed.",
  "<p>Aliquam non sem ut</p> Quam hendrerit consectetur. Pellentesque quis odio sed libero scelerisque placerat sed eu lorem.",
  "<p>Aenean risus</p>  Felis, ornare et metus ac, laoreet hendrerit odio. Nam posuere diam non dui iaculis, id tincidunt libero finibus.",
  "<p>Nam in eros</p> Mattis, commodo augue at, laoreet nibh. Pellentesque nulla nibh, tincidunt in lectus quis, pulvinar vehicula arcu."];

  let nextElem = document.querySelector('.next-elem');
  let messageContainer =  document.querySelector('.message-container');
  let controlCircles = document.querySelector('.message-control ul');
  messageContainer.innerHTML = messageArr[0];
  controlCircles.children[0].style.backgroundColor = 'rgb(0, 0, 0)';
  let counter = 0;

  function nextElement() {
    counter++;
    if (counter === 6) {
      controlCircles.children[counter - 1].style.backgroundColor = '';
      counter = 0;
    }

    messageContainer.removeChild(messageContainer.firstChild);
    messageContainer.innerHTML = messageArr[counter];

    controlCircles.children[counter].style.backgroundColor = 'rgb(0, 0, 0)';
    controlCircles.children[counter - 1].style.backgroundColor = '';
  }

  nextElem.addEventListener('click', nextElement);

  addEventListener('keydown', function(e) {
    if (e.keyCode === 39) nextElement();
  });

  let prevElem = document.querySelector('.prev-elem');

  function prevElement() {
    counter--;
    if (counter === -1) {
      controlCircles.children[counter + 1].style.backgroundColor = '';
      counter = 5;
    }

    messageContainer.removeChild(messageContainer.firstChild);
    messageContainer.innerHTML = messageArr[counter];

    controlCircles.children[counter].style.backgroundColor = 'rgb(0, 0, 0)';
    controlCircles.children[counter + 1].style.backgroundColor = '';
  }

  prevElem.addEventListener('click', prevElement);

  addEventListener('keydown', function(e) {
    if (e.keyCode === 37) prevElement();
  });
}
