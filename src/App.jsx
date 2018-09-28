import React from 'react';
import { connect } from 'react-redux';

import { setWhoIAm } from './actions';

function App(props) {
  const { setWhoIAm, whoAmI } = props;

  return (
    <div className="container">
      <h1>I am {whoAmI}!</h1>
      <button className="btn btn-primary" onClick={setWhoIAm}>
        Set who I am
      </button>
    </div>
  );
}

const withRedux = connect(
  state => state,
  { setWhoIAm }
);

export { App };
export default withRedux(App);
