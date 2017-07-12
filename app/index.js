import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Home from './views/Home';
import Draft from './views/draft';
// import Favorite from './views/Favorite';
// import WriteDraft from './views/WriteDraft';
import CreateStory from './views/Story';

const App = () => (
        <Router hideNavBar>
            <Scene key={'root'}>
                <Scene key={'home'} component={Home} hideNavBar={true} initial={true} />
                <Scene key={'draft'} component={Draft} hideNavBar={true} />
                {/*<Scene key={'favorite'} component={Favorite} hideNavBar={true} />
                <Scene key={'writeDraft'} component={WriteDraft} hideNavBar={true} />*/}
                <Scene key={'createStory'} component={CreateStory} hideNavBar={true} />

            </Scene>
        </Router>
    );
export default App;