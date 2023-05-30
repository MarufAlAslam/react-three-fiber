import { Input } from "antd";
import React, { useState } from "react";
import { BsUnlockFill, BsLockFill } from "react-icons/bs";
import { BsDot } from "react-icons/bs";

const Selected = ({ result }) => {
  const [locked, setLocked] = useState(false);

  // console.log(result);

  // if(result.element){
  //   console.log(result.element);
  // }

  // click on lock icon only make disabled the sibling input
  // click on dot icon only make enabled the sibling input

  const handleLock = () => {
    setLocked(!locked);
  };

  return (
    <div>
      <Input
        className="w-full bg-black border-none py-0 text-sm mb-3 text-white"
        value={result.name}
      />

      <p className="text-white">Transform</p>

      <table className="w-full">
        <tbody>
          <tr>
            <td className="text-white text-right">
              {result.locations ? result.locations[0].name : "X"}
            </td>
            <td>
              <Input
                className="w-full bg-gray-400 border-none py-1 text-sm mx-3 text-white"
                value={result.locations ? result.locations[0].value : "0 m"}
              />
            </td>
            <td>
              <button onClick={handleLock}>
                {locked ? (
                  <BsLockFill className="ml-4 text-white" />
                ) : (
                  <BsUnlockFill className="ml-4 text-white" />
                )}
              </button>
            </td>
            <td className="pl-0">
              <BsDot className="ml-1 text-white" />
            </td>
          </tr>
          <tr>
            <td className="text-white text-right">
              {result.locations ? result.locations[1].name : "Y"}
            </td>
            <td>
              <Input
                className="w-full bg-gray-400 border-none py-1 text-sm mx-3 text-white"
                value={result.locations ? result.locations[1].value : "0 m"}
              />
            </td>
            <td>
              <button onClick={handleLock}>
                {locked ? (
                  <BsLockFill className="ml-4 text-white" />
                ) : (
                  <BsUnlockFill className="ml-4 text-white" />
                )}
              </button>
            </td>
            <td className="pl-0">
              <BsDot className="ml-1 text-white" />
            </td>
          </tr>
          <tr>
            <td className="text-white text-right">
              {result.locations ? result.locations[2].name : "Z"}
            </td>
            <td>
              <Input
                className="w-full bg-gray-400 border-none py-1 text-sm mx-3 text-white"
                value={result.locations ? result.locations[2].value : "0 m"}
              />
            </td>
            <td>
              <button onClick={handleLock}>
                {locked ? (
                  <BsLockFill className="ml-4 text-white" />
                ) : (
                  <BsUnlockFill className="ml-4 text-white" />
                )}
              </button>
            </td>
            <td className="pl-0">
              <BsDot className="ml-1 text-white" />
            </td>
          </tr>
          <tr>
            <td className="text-white text-right">
              {result.rotations ? result.rotations[0].name : "X"}
            </td>
            <td>
              <Input
                className="w-full bg-gray-400 border-none py-1 text-sm mx-3 text-white"
                value={result.rotations ? result.rotations[0].value : "0 m"}
              />
            </td>
            <td>
              <button onClick={handleLock}>
                {locked ? (
                  <BsLockFill className="ml-4 text-white" />
                ) : (
                  <BsUnlockFill className="ml-4 text-white" />
                )}
              </button>
            </td>
            <td className="pl-0">
              <BsDot className="ml-1 text-white" />
            </td>
          </tr>
          <tr>
            <td className="text-white text-right">
              {result.rotations ? result.rotations[1].name : "Y"}
            </td>
            <td>
              <Input
                className="w-full bg-gray-400 border-none py-1 text-sm mx-3 text-white"
                value={result.rotations ? result.rotations[1].value : "0 m"}
              />
            </td>
            <td>
              <button onClick={handleLock}>
                {locked ? (
                  <BsLockFill className="ml-4 text-white" />
                ) : (
                  <BsUnlockFill className="ml-4 text-white" />
                )}
              </button>
            </td>
            <td className="pl-0">
              <BsDot className="ml-1 text-white" />
            </td>
          </tr>
          <tr>
            <td className="text-white text-right">
              {result.rotations ? result.rotations[2].name : "Z"}
            </td>
            <td>
              <Input
                className="w-full bg-gray-400 border-none py-1 text-sm mx-3 text-white"
                value={result.rotations ? result.rotations[2].value : "0 m"}
              />
            </td>
            <td>
              <button onClick={handleLock}>
                {locked ? (
                  <BsLockFill className="ml-4 text-white" />
                ) : (
                  <BsUnlockFill className="ml-4 text-white" />
                )}
              </button>
            </td>
            <td className="pl-0">
              <BsDot className="ml-1 text-white" />
            </td>
          </tr>
          <tr>
            <td className="text-white text-right">Mode</td>
            <td>
              <select className="w-full bg-gray-400 border-none py-1 text-sm mx-3 text-white">
                {
                  result.mode.map((m, i) => (
                    <option key={i} value={m}>{m}</option>
                  ))
                }
              </select>
            </td>
            <td>
              <button onClick={handleLock}>
                {locked ? (
                  <BsLockFill className="ml-4 text-white" />
                ) : (
                  <BsUnlockFill className="ml-4 text-white" />
                )}
              </button>
            </td>
            <td className="pl-0">
              <BsDot className="ml-1 text-white" />
            </td>
          </tr>
          <tr>
            <td className="text-white text-right">
              {result.scales ? result.scales[0].name : "X"}
            </td>
            <td>
              <Input
                className="w-full bg-gray-400 border-none py-1 text-sm mx-3 text-white"
                value={result.scales ? result.scales[0].value : "0 m"}
              />
            </td>
            <td>
              <button onClick={handleLock}>
                {locked ? (
                  <BsLockFill className="ml-4 text-white" />
                ) : (
                  <BsUnlockFill className="ml-4 text-white" />
                )}
              </button>
            </td>
            <td className="pl-0">
              <BsDot className="ml-1 text-white" />
            </td>
          </tr>
          <tr>
            <td className="text-white text-right">
              {result.scales ? result.scales[1].name : "Y"}
            </td>
            <td>
              <Input
                className="w-full bg-gray-400 border-none py-1 text-sm mx-3 text-white"
                value={result.scales ? result.scales[1].value : "0 m"}
              />
            </td>
            <td>
              <button onClick={handleLock}>
                {locked ? (
                  <BsLockFill className="ml-4 text-white" />
                ) : (
                  <BsUnlockFill className="ml-4 text-white" />
                )}
              </button>
            </td>
            <td className="pl-0">
              <BsDot className="ml-1 text-white" />
            </td>
          </tr>
          <tr>
            <td className="text-white text-right">
              {result.scales ? result.scales[2].name : "Z"}
            </td>
            <td>
              <Input
                className="w-full bg-gray-400 border-none py-1 text-sm mx-3 text-white"
                value={result.scales ? result.scales[2].value : "0 m"}
              />
            </td>
            <td>
              <button onClick={handleLock}>
                {locked ? (
                  <BsLockFill className="ml-4 text-white" />
                ) : (
                  <BsUnlockFill className="ml-4 text-white" />
                )}
              </button>
            </td>
            <td className="pl-0">
              <BsDot className="ml-1 text-white" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Selected;
