const initialState = {    //初始化状态/数据
    homeDate: {},
    homeDownloadVisible: true,
}



function HomePageReducer(state = initialState,action) {
    switch(action.type) {
        case `GET_HOME_DATA`:    //判断执行的是那个指令(action)
        return  Object.assign({}, state, {
          homeDate: state.homeDate,  //返回的状态/数据
        })
        case `CLOSE_HOME_DOWNLOAD`:
        return Object.assign({}, state, {
          homeDownloadVisible: false,  //返回的状态/数据
        })
    default:
        return state;
    }
};

export default HomePageReducer;
