const a = 4;

const promis1 = new Promise((resolve, reject) => {
  if (a > 3) {
    resolve("done!!");
  } else {
    reject("failed");
  }
});

const promis2 = new Promise((resolve, reject) => {
  if (a > 1) {
    resolve("done!!");
  } else {
    reject("failed");
  }
});

try {
  Promise.all([promis1, promis2])
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
} catch (error) {
  console.log(error);
}
