import React, { useState } from "react";

const TabList = props => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        width: "350px",
        margin: "2rem auto"
      }}
    >
      {props.children}
    </div>
  );
};

const Tab = props => {
  return <div>{props.children}</div>;
};

const TabPanels = props => {
  const activeIndex = props.activeIndex;
  return <div>{props.children[activeIndex]}</div>;
};

const TabPanel = props => {
  return <div>{props.children}</div>;
};

const Tabs = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const children = React.Children.map(props.children, child => {
    console.log("child", child);

    if (child.type.name === TabPanels) {
      return React.cloneElement(child, {
        activeIndex: 1
      });
    } else {
      return child;
    }
  });
  //console.log(props.children);
  return <div>{children}</div>;
};

const FullTabs = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Tacos</Tab>
          <Tab isDisabled>Burritos</Tab>
          <Tab>Coconut Korma</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>Tacos are delicious</p>
          </TabPanel>
          <TabPanel>
            <p>Tacos are delicious</p>
          </TabPanel>
          <TabPanel>
            <p>Tacos are delicious</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default FullTabs;
