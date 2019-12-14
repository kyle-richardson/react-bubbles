import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import {getBubbles, setColors} from "../actions"
import {connect} from "react-redux"

const BubblePage = ({getBubbles, setColors}) => {
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

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

export default connect(mapStateToProps,{getBubbles, setColors})(BubblePage);
