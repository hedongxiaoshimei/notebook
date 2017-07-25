import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';  //引入需要的action *代表引入actions文件夹中的index.js 即被合并的所有action
import '../components/styles/HomePage.css';


import Aside from '../components/Aside';
import NoteMain from '../components/NoteMain';




class HomePage extends Component{
  componentDidMount() {
    const { actions } = this.props;
  }





  render() {
    const { homeState,actions } = this.props;
    return (
      <div className="home_wrap">
        <Aside/>
        <NoteMain/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    homeState: state.HomePageReducer,
  };
};

//注入actions actions是import进组件的
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});





export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
