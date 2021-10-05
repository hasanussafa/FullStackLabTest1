//Name: Kazi Hasanus Safa, StudentID: 101275458
//question 1
let lowerCaseWords = (mixed_array) => {
    return new Promise((resolve, reject) => {
      if (mixed_array.length >= 0 && Array.isArray(mixed_array)) {
          //checking string and making lowercase
        let checkingString = mixed_array.filter((eachElOfArr) => typeof eachElOfArr === "string");
        let mapping_array = checkingString.map((eachItemOfFilterArr) =>
          eachItemOfFilterArr.toLowerCase()
        );
        resolve(mapping_array);
      } else {
        reject("Array is not valid.");
      }
    });
  };
  // input value
  let mixed_array = ["PIZZA", "SAFA", true, 25, false, "FullStack", 15];
  lowerCaseWords(mixed_array)
    .then((value) =>
      console.log(value) // print value
    )
    .catch((error) =>
      console.log(error)
    );
  