import React from 'react';
import styled from 'styled-components';
import type { NextPage } from 'next';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs';

type Props = {};

const Checkout = (props: Props) => {
  // const colors = ['firebrick', 'goldenrod', 'dodgerblue'];
  // const [tabIndex, setTabIndex] = React.useState(0);
  // const backgroundColor = colors[tabIndex];

  return (
    <TabsWrapper defaultIndex={0}>
      <Tablist>
        <Tabb>RED</Tabb>
        <Tabb>yellow</Tabb>
        <Tabb>Blue</Tabb>
        <Tabb>Gray</Tabb>
      </Tablist>
      <TabPanels style={{ padding: 20 }}>
        <TabPanel>RED</TabPanel>
        <TabPanel>YELLOW</TabPanel>
        <TabPanel>BLUE</TabPanel>
        <TabPanel>GRAY</TabPanel>
      </TabPanels>
    </TabsWrapper>
  );
};

const TabsWrapper = styled(Tabs)`
  width: 40vw;
  padding: 32px;
  background: tomato;
`;

const Tablist = styled(TabList)`
  display: flex;
  gap: 16px;
`;

const Tabb = styled(Tab)`
  padding: 4px 8px;
  background: gray;
  border-radius: 4px;
  color: white;
  font-size: 1.125rem;
`;

export default Checkout;
