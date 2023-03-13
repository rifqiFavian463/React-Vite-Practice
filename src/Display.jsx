import React, { useState, useEffect } from "react";
export default function Display() {
  // 2. Create our *dogImage* variable as well as the *setDogImage* function via useState
  // We're setting the default value of dogImage to null, so that while we wait for the
  // fetch to complete, we dont attempt to render the image
  let [value, setValue] = useState(false);
  let [dogImage, setDogImage] = useState(null);

  // 3. Create out useEffect function
  useEffect(() => {
    if (value) {
      const getPhotos = async () => {
        const data = await fetch("https://dog.ceo/api/breeds/image/random/3")
          .then((response) => response.json())
          .then((data) => data.message);
        setDogImage(data);
      };
      getPhotos();
      console.log("ok");
    }
    setValue(false);
  }, [value]);

  const handleClick = () => {
    setValue(true);
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Generate Doggy!</button> <br />
      {dogImage && dogImage.map((dog) => <img width={"200px"} height={"200px"} src={dog} key={dog}></img>)}
    </div>
  );
}
