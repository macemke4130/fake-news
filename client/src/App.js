import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';

import { gql } from "./utils/gql";

// Components
import Header from './Components/Header';

// Styles
import "./global.css"

function App() {
  const [openGate, setOpenGate] = useState(true);
  const [greeting, setGreeting] = useState("World");

  const getGreeting = async () => {
    setOpenGate(false);

    const r = await gql(` { greet } `);
    setGreeting(r.greet);
  }

  useEffect(() => {
    if (openGate) getGreeting();
  });

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <h1>Hello World!</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;