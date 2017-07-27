const initialState = {    //初始化状态/数据
  notes: [{
    id: 1,
    title: '新笔记1',
  }],
  nid: '',
}



function HomePageReducer(state = initialState,action) {
    switch(action.type) {
        case `ADD_NOTE`:    //判断执行的是那个指令(action)
        return  Object.assign({}, state, {
          notes: action.notes,  //返回的状态/数据
        })
        case `CURR_NOTE_ID`:    //判断执行的是那个指令(action)
        return  Object.assign({}, state, {
          nid: action.nid,  //返回的状态/数据
        })
        case `DELETE_NOTE`:    //判断执行的是那个指令(action)
        return  Object.assign({}, state, {
          notes: action.notes,  //返回的状态/数据
        })
    default:
        return state;
    }
};

export default HomePageReducer;
