import React, {Component, PropTypes} from 'react';
import './styles/NoteMain.css';
import NoteListItem from './NoteListItem';
import NoteEditor from './NoteEditor';


class NoteMain extends Component{
  render() {
    const { homePageReducer,actions } = this.props;
    const notes = homePageReducer.notes || [];
    return (
      <div className="note_main_wrap">

        <div className="note_list_wrap">
          <div className="note_list_top"></div>
          <div className="note_list_content">
            {
              notes.map(item => <NoteListItem  key={item.id} itemData={item} homePageReducer={homePageReducer} actions={actions}/>)
            }
          </div>
        </div>
        <div className="note_view_wrap">
          <NoteEditor />
        </div>
      </div>
    );
  }
}

export default NoteMain;
