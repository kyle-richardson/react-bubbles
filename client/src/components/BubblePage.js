import React, {useEffect } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import {getBubbles} from "../actions"
import {connect} from "react-redux"

const BubblePage = ({getBubbles, reFetch}) => {

  useEffect(()=> {
    getBubbles()
    // eslint-disable-next-line
  },[reFetch])

  return (
    <>
      <ColorList />
      <Bubbles />
    </>
  );
};

const mapStateToProps = state => ({
  bubbleList: state.bubbleList,
  reFetch: state.reFetch
})

export default connect(mapStateToProps,{getBubbles})(BubblePage);
