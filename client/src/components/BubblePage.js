import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import {getBubbles} from "../actions"
import {connect} from "react-redux"

const BubblePage = ({getBubbles, bubbleList}) => {

  useEffect(()=> {
    getBubbles()
  },[])

  return (
    <>
      <ColorList />
      <Bubbles />
    </>
  );
};

const mapStateToProps = state => ({
  bubbleList: state.bubbleList,

})

export default connect(mapStateToProps,{getBubbles})(BubblePage);
