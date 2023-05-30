import React, { useEffect, useState } from "react";
import Scenes from "../scenes";
import Selected from "../scenes/selected";

import { AiFillVideoCamera } from "react-icons/ai";

const Sidebar = ({data, setSelectedX, setSelectedY, setSelectedZ, setRotationX, setRotationY, setRotationZ }) => {
  

  const [selectedData, setSelectedData] = useState(1);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(
     {
      id: 1,
      name: "Camera",
      icon: <AiFillVideoCamera className="mr-2" />,
      locations: [
        {
          id: 1,
          name: "Location X",
          value: "70 m",
        },
        {
          id: 2,
          name: "Location Y",
          value: "80 m",
        },
        {
          id: 3,
          name: "Location Z",
          value: "90 m",
        },
      ],
      rotations: [
        {
          id: 1,
          name: "Rotation X",
          value: "70 m",
        },
        {
          id: 2,
          name: "Rotation Y",
          value: "80 m",
        },
        {
          id: 3,
          name: "Rotation Z",
          value: "90 m",
        },
      ],
      mode: [
        "Perspective",
        "Orthographic",
        "Panorama",
        "360",
        "Cubemap",
        "Equirectangular",
        "Fisheye",
        "Spherical",
        "Cylindrical",
        "Stereo",
        "Anaglyph",
      ],
      scales: [
        {
          id: 1,
          name: "Scale X",
          value: "70 m",
        },
        {
          id: 2,
          name: "Scale Y",
          value: "80 m",
        },
        {
          id: 3,
          name: "Scale Z",
          value: "90 m",
        },
      ],
    }
  );

  useEffect(() => {
    setResult(data[selectedData-1]);
    // console.log("selectedData", data[selectedData-1]);
    setSelectedX(parseInt(data[selectedData-1].locations[0].value)/100)
    setSelectedY(parseInt(data[selectedData-1].locations[1].value)/10)
    setSelectedZ(parseInt(data[selectedData-1].locations[2].value)/100)


    setRotationX(parseInt(data[selectedData-1].rotations[0].value))
    setRotationY(parseInt(data[selectedData-1].rotations[1].value))
    setRotationZ(parseInt(data[selectedData-1].rotations[2].value))
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedData]);

  // useEffect(() => {
  //     console.log("result" + result)
  // }, [result])
  return (
    <div className="w-3/12 bg-[#292727] min-h-screen text-white flex flex-col justify-between items-start">
      <div className="p-5 h-full">
        {" "}
        <Scenes
          data={data}
          selectedData={selectedData}
          setSelectedData={setSelectedData}
          result={result}
          setResult={setResult}
        />
      </div>
      <div className="border-t-4 bg-[#505050] border-black w-full h-full p-5">
        {!loading && <Selected result={result} />}
      </div>
    </div>
  );
};

export default Sidebar;
