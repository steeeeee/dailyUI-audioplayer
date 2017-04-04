import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Audio from '../components/Audio';
import Footer from '../components/Footer';

class App extends Component {
  render() {
    const { audio } = this.props;
    return (
      <div className="main-app-container">
        <div className="main-app-nav">Simple Redux Boilerplate</div>
        <Audio data={audio} />
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  audio: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    audio: state.audio
  }
}

export default connect(
  mapStateToProps
)(App);
