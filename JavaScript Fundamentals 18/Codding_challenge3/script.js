/////////////////////////////////////
// Coding Challenger

/*
PART 1
Write  an async function 'loadNPause' that recreates coding challenge #2, this time using async/await (only the part where promise was xonsumed). Compare the two versions, think about the big differences, and see which onw you like more. Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab. 

PART 2
1. Create an async function 'loadAll' that recieves an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'CreateImage' function (call the resulting array 'imgs')
3. Check out the 'imgs\ array in the console! Is it like expected?
4. Use a promise combinator function to actuall get the images from the array
5. Add the 'paralell' class to the images (it has some CSS styles).

TEST DATA> ['img/img-1.jpg', 'img/img-2.jpg','img/img-3.jpg']. To test, turn off the 'loadNPause' function

GOOD LUCK 😊
*/

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

// let currentImg;

// createImage("img/img-1.jpg")
//   .then((img) => {
//     currentImg = img;
//     console.log("Image 1 loaded");
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = "none";
//     return createImage("img/img-2.jpg");
//   })
//   .then((img) => {
//     currentImg = img;
//     console.log("Image 2 loaded");
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = "none";
//   })
//   .catch((err) => console.error(err));

const loadNPause = async function () {
  try {
    // First Image

    let img = await createImage("img/img-1.jpg");
    console.log("Image 1 loaded");
    await wait(2); // The wait promise does not have any value so there is no need to store it into a variable.
    img.style.display = "none";

    // Second Image
    img = await createImage("img/img-2.jpg");
    console.log("Image 2 loaded");
    await wait(2);
    img.style.display = "none";

    // Third Image

    img = await createImage("img/img-3.jpg");
    console.log("Image 3 loaded");
    await wait(2);
  } catch (err) {
    console.log(err);
  }
};

loadNPause();

// PART 2
// TEACHERS PART WHICH DIDN'T WORK WELL FOR ME.

// const loadAll = async function (imgArr) {
//   try {
//     const imgs = imgArr.map(async (img) => {
//       await createImage(img); // the createImage function would return an array. so we need to first make the function within the map an async function, before using the await
//     });
//     console.log(imgs);
//     const imgsEl = await Promise.all(imgs);
//     console.log(imgsEl);
//   } catch (err) {
//     console.log(err);
//   }
// };

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async (img) => await createImage(img)); // Directly use createImage returning and array of promises.

    // Viewing the Promises.
    console.log(imgs);
    const imgsEl = await Promise.all(imgs); // resolving the array of promises to get array of images
    console.log(imgsEl);

    // looping over the array and adding parallel class to it

    // Looping over the array of images and adding the parallel class.
    imgsEl.forEach((imgEl) => imgEl.classList.add("parallel"));
  } catch (err) {
    console.log(err);
  }
};

loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"]);
