import React, { useState } from "react";

const TabList = props => {
  return <div>{props.children}</div>;
};

const Tab = props => {
  return <div>{props.children}</div>;
};

const TabPanels = props => {
  return <div>{props.children}</div>;
};

const TabPanel = props => {
  return <div>{props.children}</div>;
};

const Tabs = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  return <div>{props.children}</div>;
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
