import React, {Component} from 'react';

class NoteListItem extends Component{

  handclick(nid) {
    const { actions } = this.props;
    //选中
    actions.currNoteId(nid)
  }

  deleteNote(key,e) {
    const { actions,homePageReducer } = this.props;
    const notes = homePageReducer.notes || [];
    const temp = notes.filter((n) => (n.id && n.id !== key));
    e.stopPropagation()
    actions.deleteNote(temp);
    if(notes.length > 0) {
      if(key === homePageReducer.nid) {
        actions.currNoteId(notes[0].id);
        if(temp.length > 0 && key === notes[0].id) {
          actions.currNoteId(notes[0].id);
        }
      }
    }
  }

  render() {
    const { itemData,homePageReducer } = this.props;
    const nid = homePageReducer.nid;
    return (
        <div className={nid === itemData.id ? "note_item_wrap note_item_acive" : "note_item_wrap"}
            onClick={() => this.handclick(itemData.id)}
         >
          {itemData.title}
          <div className="note_item_delete" onClick={(e) => this.deleteNote(itemData.id,e)}>
            del
          </div>
        </div>
    );
  }
}

export default NoteListItem;
