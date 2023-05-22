import { Collapse } from "antd";
import Top from "./top";
const { Panel } = Collapse;


const Scenes = ({data, selectedData, setSelectedData, setResult}) => {
 

  

  return (
    <>
      <p className="text-white">Scene Collection</p>
      <Collapse bordered={false} defaultActiveKey={["1"]}>
        <Panel header="Collection" key="1">
          <p className="text-white">
            <Top data={data} setSelectedData={setSelectedData} />
          </p>
        </Panel>
      </Collapse>
    </>
  );
};
export default Scenes;
