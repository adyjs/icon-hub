import React from 'react';
import './App.css';

// components
import ScrollToTop from './components/scrollToTop.jsx';
import Overlay from './components/overlay.jsx';
import Header from './components/header/header.jsx';
import Drawer from './components/drawer/drawer.jsx';
import DropCurtain from './components/drawer/dropCurtain.jsx';
import StatusBar from './components/statusBar/statusBar.jsx';
// import Main from './components/main/main.jsx';
import SearchMain from './components/main/searchMain.jsx';
import CatesMain from './components/main/catesMain.jsx';
import IndexPage from './components/indexPage/indexPage.jsx';
import TermAndPolicy from './components/termAndPolicy/termAndPolicy.jsx';
import Footer from './components/footer/footer.jsx';

// react-router
import {Switch , Route} from 'react-router-dom';


class App extends React.Component{
  
  render(){
    return (
      <div className="App">
          <ScrollToTop>
            <Overlay />
            <Header />
            <Drawer />
            <DropCurtain />

            <Switch>
              <Route 
                exact
                path={["/:path_1" , "/:path_1/:path_2"]}
                render={ (props) => <StatusBar {...props} />}
              />
            </Switch>
            
            <Switch>
              <Route 
                exact
                path={"/categories/:path_2"}
                render={ (props) => <CatesMain {...props} /> }
              />
              <Route 
                exact
                path={"/search"}
                render={ (props) => <SearchMain {...props} /> }
              />
              <Route 
                exact
                path="/terms-and-policy"
                component={TermAndPolicy}
              />
              <Route 
                exact
                path="/"
                component={IndexPage}
              />
            </Switch>
            
            <Footer />
          </ScrollToTop>
      </div>
    );
  }
};

export default App;
