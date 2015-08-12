'use strict';

var { StyleSheet } = require('react-native');
var _ = require('lodash');

// Import external styles
var conferenceLineupStyles = require('./conferenceLineup.styles');
var sessionListStyles = require('./sessionList.styles');
var sessionStyles = require('./sessionDetails.styles');

// Global styles
var globalStyles = {
  flex: { flex: 1 }
};

// Combine styles into StyleSheet creation using lodash's assign method
module.exports = StyleSheet.create(_.assign(conferenceLineupStyles, globalStyles, sessionStyles, sessionListStyles));