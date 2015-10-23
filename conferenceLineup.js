'use strict';

var React = require('react-native');
var {
  NavigatorIOS,
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = React;

var globals = require('./globals');
var styles = require('./styles');
var SessionList = require('./sessionList');
var tabIcon = { uri: 'OSNTree' };

var appTitle = globals.appTitle;

var ConferenceLineup = React.createClass({
  changeTab: (context, selectedTab) => {
    context.setState({
    selectedTab: selectedTab,
  })},
  getInitialState: function() {
    return {
      selectedTab: 'Sessions'
    };
  },
  render: function() {
    return (
      <TabBarIOS
        barTintColor="#eee">
        <TabBarIOS.Item
          icon={tabIcon}
          title="Sessions"
          selected={this.state.selectedTab === 'Sessions'}
          onPress={() => this.changeTab(this, 'Sessions')}>
          <NavigatorIOS
            initialRoute={{
              component: SessionList,
              title: appTitle,
              passProps: { tab: 'Sessions' },
            }}
            style={styles.flex}
          />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={tabIcon}
          title="Speakers"
          badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
          selected={this.state.selectedTab === 'Speakers'}
          onPress={() => this.changeTab(this, 'Speakers')}>
          <NavigatorIOS
            initialRoute={{
              component: SessionList,
              title: appTitle,
              passProps: { tab: 'Speakers' },
            }}
            style={styles.flex}
          />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={tabIcon}
          title="Tracks"
          selected={this.state.selectedTab === 'Tracks'}
          onPress={() => this.changeTab(this, 'Tracks')}>
          <NavigatorIOS
            initialRoute={{
              component: SessionList,
              title: appTitle,
              passProps: { tab: 'Tracks' },
            }}
            style={styles.flex}
          />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});

module.exports = ConferenceLineup;