import * as React from "react";
import { SearchBarCtrl } from "./SearchBar.ctrl";

export class SearchBar extends SearchBarCtrl {
  render() {
    return (
      <div>
        <input className="form-control m-2" type="text" {...this.props} />
      </div>
    );
  }
}
