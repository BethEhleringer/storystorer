import React from "react";



// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" to="/">
        StoryStorer
      </a>
      <a className="nav-item" href="/testPage">Test Page </a>
      <a className="nav-item" href="/addContent">Add Content </a>
      <a className="nav-item" href="/search">Search </a>

    </nav>
  );
}


export default Nav;

