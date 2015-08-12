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
var tabIcon = { uri: 'TCTree' };

var appTitle = globals.appTitle;

var ConferenceLineup = React.createClass({
  changeTab: (context, selectedTab) => {
    context.setState({
    selectedTab: selectedTab,
  })},
  getInitialState: function() {
    return {
      selectedTab: 'Monday'
    };
  },
  render: function() {
    return (
      <TabBarIOS
        barTintColor="#eee">
        <TabBarIOS.Item
          icon={tabIcon}
          title="Monday"
          selected={this.state.selectedTab === 'Monday'}
          onPress={() => this.changeTab(this, 'Monday')}>
          <NavigatorIOS
            initialRoute={{
              component: SessionList,
              title: appTitle,
              passProps: { day: 'Monday' },
            }}
            style={styles.flex}
          />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={tabIcon}
          title="Tuesday"
          badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
          selected={this.state.selectedTab === 'Tuesday'}
          onPress={() => this.changeTab(this, 'Tuesday')}>
          <NavigatorIOS
            initialRoute={{
              component: SessionList,
              title: appTitle,
              passProps: { day: 'Tuesday' },
            }}
            style={styles.flex}
          />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={tabIcon}
          title="Wednesday"
          selected={this.state.selectedTab === 'Wednesday'}
          onPress={() => this.changeTab(this, 'Wednesday')}>
          <NavigatorIOS
            initialRoute={{
              component: SessionList,
              title: appTitle,
              passProps: { day: 'Wednesday' },
            }}
            style={styles.flex}
          />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});

module.exports = ConferenceLineup;