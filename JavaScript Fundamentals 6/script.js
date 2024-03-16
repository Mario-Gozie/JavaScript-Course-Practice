'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModel = document.querySelectorAll('.show-modal'); // querryselectorAll is used when many elements have one class and you want to select all.

const openModal = function () {
  modal.classList.remove('hidden'); // Here I am saying select modal class and hide the hidden class.
  overlay.classList.remove('hidden');
};

//CLOSING MODAL FUNCTION

const closeModal = function () {
  //created function
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// JUST TO LOOP OVER THE THREE SHOW MODAL CLASSES
// So basically, what I did here was to add and remove classes.

for (let i = 0; i < btnOpenModel.length; i++) {
  // SHOWING MODAL WINDOW.

  btnOpenModel[i].addEventListener(
    'click',
    /*function () {
    modal.classList.remove('hidden'); // Here I am saying select modal class and hide the hidden class.
    overlay.classList.remove('hidden'); // Here I am saying select overlay class and hide the hidden class.
  }*/ openModal
  );
}

btnCloseModal.addEventListener(
  'click',
  /*function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}*/ closeModal
);

overlay.addEventListener(
  'click' /*function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}*/,
  closeModal
);

// KEYBOARD EVENT: in the above, we have been able to remove the modal window with cancel button and clicking on overlay, we have also been able to bring it up by clicking on the buttons on the site. now, I want to be able to remove the modal window with the escape button on the laptop.

document.addEventListener('keydown', function (e) {
  console.log(e.key); // when this event handler is activated, it creates an object (e or any other arguement eg q, t, t etc.) , which is accessed by the function within the event handler to know the particular key pressed and know if its the one to bring about an action. To see the exact key you pressed, you add the key element to the object and log to the console just like in e.key above.

  // FIRST CODE
  // if (e.key === 'Escape') {
  //   /* Here I am saying if the modal classlist does not contain hidden*/
  //   if (!modal.classList.contains('hidden')) {
  //     closeModal();
  //   }
  // }

  // MAKING THE CODE NEATER

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
