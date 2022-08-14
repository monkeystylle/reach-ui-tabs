import React from 'react';
import styled from 'styled-components';

import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useTabsContext,
} from '@reach/tabs';

type CustomtabProps = {
  focusedIndex?: number;
  id?: string;
  selectedIndex: number;
  index: number;
};

const TabSelect = () => {
  return (
    <Wrapper>
      <Tabs defaultIndex={0}>
        <Tablist>
          <CustomTab index={0}>Tab 1</CustomTab>
          <CustomTab index={1}>Tab 2</CustomTab>
          <CustomTab index={2}>Tab 3</CustomTab>
        </Tablist>
        <TabPanels>
          <TabPanel>
            <p>Content 1</p>
          </TabPanel>
          <TabPanel>
            <p>Content 2</p>
          </TabPanel>
          <TabPanel>
            <p>Content 3</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Wrapper>
  );
};

const CustomTab = ({ index, ...props }: any) => {
  const { selectedIndex } = useTabsContext();

  return <Tabb selectedIndex={selectedIndex} index={index} {...props} />;
};

//STYLES

const Wrapper = styled.div`
  height: 100%;
  display: grid;
  place-content: center;
  font-size: 1.2rem;
`;

const Tablist = styled(TabList)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
  width: 100%;
`;

//custom component
const Tabb = styled(Tab)<CustomtabProps>`
  padding: 4px 8px;
  border-radius: 4px;
  border: solid 1px lightgray;
  text-align: center;
  background-color: ${props =>
    props.index === props.selectedIndex ? 'lightblue' : null};
  transition: background-color 300ms ease;
`;

export default TabSelect;
