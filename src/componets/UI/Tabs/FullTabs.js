import React, { useState } from "react";

const TabList = props => {
  const { activeIndex } = props;
  const children = React.Children.map(props.children, (child, index) => {
    console.log(index);
    return React.cloneElement(child, {
      isActive: index === activeIndex,
      onActivate: () => {
        props.onActiveTab(index);
      }
    });
  });
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        width: "350px",
        margin: "2rem auto"
      }}
    >
      {children}
    </div>
  );
};

const Tab = props => {
  const { isActive, isDisabled } = props;
  // const style = isDisabled
  //   ? styles.disabledTab
  //   : isActive
  //   ? styles.activeTab
  //   : styles.tab;
  //console.log("isActive", isActive, isDisabled);
  return (
    <div onClick={isDisabled ? null : () => props.onActivate()}>
      {props.children}
    </div>
  );
};

const TabPanels = props => {
  const activeIndex = props.activeIndex;
  return <div>{props.children[activeIndex]}</div>;
};

const TabPanel = props => {
  return <div>{props.children}</div>;
};

const Tabs = props => {
  const [activeIndex, setActiveIndex] = useState(1);
  const children = React.Children.map(props.children, child => {
    if (child.type === TabPanels) {
      return React.cloneElement(child, {
        activeIndex: activeIndex
      });
    } else if (child.type === TabList) {
      return React.cloneElement(child, {
        activeIndex: activeIndex,
        onActiveTab: activeIndex => {
          setActiveIndex(activeIndex);
        }
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
            <p>Sometimes a burrito is what you really need.</p>
          </TabPanel>
          <TabPanel>
            <p>Might be your best option</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default FullTabs;
