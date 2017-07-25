import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';  //引入需要的action *代表引入actions文件夹中的index.js 即被合并的所有action

import '../components/styles/HomePage.css';




class HomePage extends Component{
  componentDidMount() {
    const { actions } = this.props;
  }





  render() {
    const { homeState,actions } = this.props;
    const downVisible = homeState.homeDownloadVisible;
    const platformRecommend = homeState.homeDate.platformRecommend;
    const debtRecommend = homeState.homeDate.debtRecommend;
    return (
      <div className="home_wrap">
        <h1>noteBook</h1>
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
