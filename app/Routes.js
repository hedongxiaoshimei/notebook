import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter , Route ,Switch } from 'react-router-dom'
import { Provider, } from 'react-redux';
import { createStore, applyMiddleware, } from 'redux';
import reduxThunk from 'redux-thunk';
import mainReducer from './mainReducer';

//引入首页的容器组件
import HomePage from './home/containers/HomePage';


//使用redux数据流的方法 创建一个store 储存管理所有的action和state
const store = createStore(mainReducer, applyMiddleware(reduxThunk));

export default function AppRoute() {
  return (
    <Provider store={store}>
      <HashRouter >
          <Switch>
              <Route exact path="/" component={HomePage}/>
          </Switch>
      </HashRouter >
    </Provider>

  );
}
