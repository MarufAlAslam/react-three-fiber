import React, { useEffect, useState } from 'react'
import Scenes from '../scenes'
import Selected from '../scenes/selected'

import {AiFillVideoCamera} from 'react-icons/ai'
import {IoCubeSharp, IoBulb} from 'react-icons/io5'

const Sidebar = () => {
    const data = [
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
        },
        {
          id: 2,
          name: "Cube",
          icon: <IoCubeSharp className="mr-2" />,
          locations: [
            {
              id: 1,
              name: "Location X",
              value: "40 m",
            },
            {
              id: 2,
              name: "Location Y",
              value: "50 m",
            },
            {
              id: 3,
              name: "Location Z",
              value: "60 m",
            },
          ],
          rotations: [
            {
              id: 1,
              name: "Rotation X",
              value: "40 m",
            },
            {
              id: 2,
              name: "Rotation Y",
              value: "50 m",
            },
            {
              id: 3,
              name: "Rotation Z",
              value: "60 m",
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
              value: "40 m",
            },
            {
              id: 2,
              name: "Scale Y",
              value: "50 m",
            },
            {
              id: 3,
              name: "Scale Z",
              value: "60 m",
            },
          ],
        },
        {
          id: 3,
          name: "Light",
          icon: <IoBulb className="mr-2" />,
          locations: [
            {
              id: 1,
              name: "Location X",
              value: "10 m",
            },
            {
              id: 2,
              name: "Location Y",
              value: "20 m",
            },
            {
              id: 3,
              name: "Location Z",
              value: "30 m",
            },
          ],
          rotations: [
            {
              id: 1,
              name: "Rotation X",
              value: "10 m",
            },
            {
              id: 2,
              name: "Rotation Y",
              value: "20 m",
            },
            {
              id: 3,
              name: "Rotation Z",
              value: "30 m",
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
              value: "10 m",
            },
            {
              id: 2,
              name: "Scale Y",
              value: "20 m",
            },
            {
              id: 3,
              name: "Scale Z",
              value: "30 m",
            },
          ],
        },
      ];

    const [selectedData, setSelectedData] = useState(0);
    const [result, setResult] = useState({});

    useEffect(() => {
        setResult(data[selectedData-1]);
        console.log("selectedData", data[selectedData-1]);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [selectedData]);

    // useEffect(() => {
    //     console.log("result" + result)
    // }, [result])
    return (
        <div className='w-3/12 bg-[#292727] min-h-screen text-white flex flex-col justify-between items-start'>
           <div className='p-5 h-full'> <Scenes data={data} selectedData={selectedData} setSelectedData={setSelectedData} result={result} setResult={setResult}/></div>
            <div className='border-t-4 bg-[#505050] border-black w-full h-full p-5'><Selected result={result}/></div>
        </div>
    )
}

export default Sidebar