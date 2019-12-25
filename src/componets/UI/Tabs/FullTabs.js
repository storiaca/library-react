import React, { useState } from "react";

const TabList = props => {
  return <div>{this.props.children}</div>;
};

const Tab = props => {
  return <div>{this.props.children}</div>;
};

const TabPanels = props => {
  return <div>{this.props.children}</div>;
};

const TabPanel = props => {
  return <div>{this.props.children}</div>;
};

const Tabs = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  return <div>{this.props.children}</div>;
};

const FullTabs = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab></Tab>
          <Tab></Tab>
          <Tab></Tab>
        </TabList>
      </Tabs>
    </div>
  );
};

export default FullTabs;
