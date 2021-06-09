import React, { useState } from "react";

export default function About(props) {
  const [CurentImage, setCurentImage] = useState(0);
  const numberImage = React.Children.count(props.children);

  function returnCurentImage(index) {
    const imageChild = React.Children.toArray(props.children)[index];
    return React.cloneElement(imageChild);
  }

  return (
    <>
    <br></br><br></br>
      <button
        style={{ fontSize: 50 }}
        disabled={CurentImage === 0}
        onClick={(e) => setCurentImage((v) => v - 1)}
      >
        &lt; previous page
      </button>

      <button
        style={{ fontSize: 50 }}
        disabled={CurentImage >= numberImage - 1}
        onClick={(e) => setCurentImage((v) => v + 1)}
      >
        next page &gt;
      </button>
      <br></br>
      <br></br>
      {returnCurentImage(CurentImage)}
    </>
  );
}
