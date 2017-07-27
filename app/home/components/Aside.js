import React, {Component, PropTypes} from 'react';
import './styles/Aside.css';

class Aside extends Component{


  addNote() {
    const { actions,homePageReducer } = this.props;
    const notes = homePageReducer.notes || [];
    //新id/新名字
    let newNum = notes.length > 0 ? notes[notes.length - 1].id + 1 : 1;
    let newNote = {};
    if( notes || newNum > 0) {
        newNote = {
         id: newNum,
         title: '新笔记' + newNum,
        };
      }
      notes.push(newNote);
      actions.addNote(notes);
      actions.currNoteId(newNote.id);
  }

  render() {
    return (
      <div className="aside_wrap">
        <div className="aside_logo"></div>
        <div className="aside_add" onClick={() => this.addNote()} ></div>
        <div className="aside_search"></div>
        <div className="aside_teamchat"></div>
        <div className="aside_collect"></div>
        <div className="aside_note"></div>
        <div className="aside_noteboock"></div>
        <div className="aside_label"></div>
      </div>
    );
  }
}

export default Aside;
