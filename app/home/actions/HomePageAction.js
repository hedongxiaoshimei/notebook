import {get} from '../../common/util/ajaxServer'

//action异步请求的方法
export const getHomeData = ()=>
  (dispatch)=> {
    get({
       url: 'http://127.0.0.1:7777/touzhijia/home',
       success: (result) =>{
         if(!result || !result.var ) return;
         let data = result.var;
         dispatch({
           type: 'GET_HOME_DATA',
           homeDate: data
         })
      }
    });
  }

export const closeHomeDownload = () =>{
  return {
    type: 'CLOSE_HOME_DOWNLOAD',
  }
}

export const addNote = (notes) =>{
  return {
    type: 'ADD_NOTE',
    notes: notes,
  }
}

export const currNoteId = (nid) =>{
  return {
    type: 'CURR_NOTE_ID',
    nid: nid,
  }
}

export const deleteNote = (notes) =>{
  return {
    type: 'DELETE_NOTE',
    notes: notes,
  }
}
