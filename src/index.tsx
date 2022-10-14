import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { HashRouter, Switch, Route } from 'react-router-dom';
import { Monitors, IpsMonitors, VaMonitors, Television, UhdTelevision, HdTelevision } from './app/Content';
import DrawerContainer from './app/DrawerContainer';
import './styles.css';

ReactDOM.render(
  <React.Fragment>
    <HashRouter>
      <DrawerContainer>
        <Switch>
          <Route exact={true} path="/monitors" component={Monitors} />
          <Route exact={true} path="/monitors/ips" component={IpsMonitors} />
          <Route exact={true} path="/monitors/va" component={VaMonitors} />
          <Route exact={true} path="/television" component={Television} />
          <Route exact={true} path="/television/4k" component={UhdTelevision} />
          <Route exact={true} path="/television/fullhd" component={HdTelevision} />
        </Switch>
      </DrawerContainer>
    </HashRouter >
  </React.Fragment>,
    document.querySelector('my-app')
);
