import React from "react";
import ReactDOM from "react-dom";
import NoteList from "./NoteList";
it("renders without crashing", () => {
  const props = {
    match: {
      params: {
        folderId: 1
      }
    }
  };
  const div = document.createElement("div");
  ReactDOM.render(<NoteList {...props} />, div);
  ReactDOM.unmountComponentAtNode(div); //cleanup
});
