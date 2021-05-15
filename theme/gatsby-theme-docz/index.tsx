import React from 'react';
import { theme, useConfig, ComponentsProvider } from 'docz';
import { ThemeProvider } from 'theme-ui';
import { Content, Page } from './components/Layout';
import Menu from './components/Menu';
import Playground from './docz/Playground';
import Explain from './docz/Explain';
import TagVersion from './docz/TagVersion';
import { Helmet } from 'react-helmet';
import icon from '@root/static/favicon.ico';
import './index.css';

const components = {
  playground: Playground,
  Explain: Explain,
  TagVersion: TagVersion,
};

const Theme: React.FC<{}> = ({ children }) => {
  const config = useConfig();
  return (
    <ThemeProvider theme={config}>
      <Page>
        <Helmet>
          <link rel="icon" href={icon} />
        </Helmet>
        <Menu />
        <Content>
          <ComponentsProvider components={components}>{children}</ComponentsProvider>
        </Content>
      </Page>
    </ThemeProvider>
  );
};

const themeConfig = {};

export default theme(themeConfig)(Theme);
