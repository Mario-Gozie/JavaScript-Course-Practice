/*
 Task are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own

PART 1

1. Create a function "createImage" which recieves imgPath as an input. This function returns a promise which creates a new image (use document.Create element(img')) and sets the .src attribute to the provided image path. when the image is done loading, append it to the DOM Element itself. In case there is an error loading the image ('error' event), reject the promise. 

If this part is too tricky for you, just watch the first part of the solution 

PART 2
2. Consume the promise using .then and also add an error handler;

3. After the image has loaded, pause execution for 2 seconds usin the wait function created earlier;

4. After the 2 seconds have passed, hide the current image (set display to 'none) and load the second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😊);

5. After the second image has loaded, pause execusion for 2 seconds again;

5. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G; in the dev tools Network tab, otherwise images load too fast

GOODLUCK */

//Promisifying SetTimeout
const wait = function (seconds) {
  // in this promise, I didn't input the reject parmeter into the execution fuction for the promise. this is because it is practically imposible for the setTimeOut function to fail.
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000); // it is not mandatory to put a task within the resolve method. we just want the code to work. so basicaly, the plan is to pass a number of seconds into the wait method which will produce a result after the product (multiplication) of the seconds and 1000 milisecond. also remember that you can make this shorter with arrow functions.
  });
};

const imgContainer = document.querySelector(".images");

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      imgContainer.append(img);

      resolve(img);
    });

    img.addEventListener("error", function () {
      reject(new Error("Image not found"));
    });
  }); // Promisifying something.
};

let currentImg;

createImage("img/img-1.jpg")
  .then((img) => {
    currentImg = img;
    console.log("Image 1 loaded");
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
    return createImage("img/img-2.jpg");
  })
  .then((img) => {
    currentImg = img;
    console.log("Image 2 loaded");
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
  })
  .catch((err) => console.error(err));
