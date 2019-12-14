import React, {useEffect } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import {getBubbles} from "../actions"
import {connect} from "react-redux"

const BubblePage = ({getBubbles}) => {

  useEffect(()=> {
    getBubbles()
    // eslint-disable-next-line
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
