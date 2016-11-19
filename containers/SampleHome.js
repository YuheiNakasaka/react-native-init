import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SampleHome from '../components/SampleHome';

class HomeContainer extends Component {  
  render () {
    return (
      <SampleHome />
    )
  }
}

function mapStateToProps(state, props) {
  const { sampleReducer } = state
  const {
    data: data
  } = sampleReducer || {
    data: []
  }
  return {
    data
  }
}

export default connect(mapStateToProps)(HomeContainer)


