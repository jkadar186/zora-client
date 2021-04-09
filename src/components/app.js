import React, { useRef, useEffect } from 'react';
import { observer, inject } from 'mobx-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './layout';
import Toolbar from './toolbar';
import NiftyHeader from './header';
import NiftyFooter from './footer';
import Metadata from './metadata';
import SignIn from '../components/auth/signin';
import SignUp from '../components/auth/signup';
import AccountModal from './AccountModal';
import { Container, Board, Canvas } from './style';
import { isMobile } from 'utils/userAgent';
import LandingPage from '../pages/landingpage';
import ExploreAllPage from '../pages/explorepage';
import NFTItem from '../pages/NFTItem';
import AccountDetails from '../pages/AccountDetails';
import CollectionCreate from '../pages/Collection/Create';

const App = ({ paintStore }) => {
  const canvasRef = useRef(null);
  const { start, draw, stop } = paintStore;

  const PaintBoard = () => {
    useEffect(() => paintStore.initialize(canvasRef.current), [paintStore]);
    return (
      <>
        <Layout>
          <Container>
            <Board isMobile={isMobile}>
              <Canvas
                id="drawingboard"
                ref={canvasRef}
                onMouseDown={start}
                onMouseMove={draw}
                onMouseUp={stop}
                onMouseOut={stop}
                onTouchStart={start}
                onTouchMove={draw}
                onTouchEnd={stop}
                onTouchCancel={stop}
              />
              <Toolbar />
            </Board>
            <Metadata></Metadata>
          </Container>
        </Layout>
      </>
    );
  };

  return (
    <div>
      <Router>
        <NiftyHeader></NiftyHeader>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/exploreall" component={ExploreAllPage} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/create" component={PaintBoard} />
          <Route path="/explore/:addr/:id" component={NFTItem} />
          <Route path="/account/:uid" component={AccountDetails} />
          <Route path="/collection/create" component={CollectionCreate} />
        </Switch>
        <NiftyFooter></NiftyFooter>
        <AccountModal />
      </Router>
    </div>
  );
};

export default inject('paintStore')(observer(App));
