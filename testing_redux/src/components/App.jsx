import React from 'react';

import withRedux from './withRedux';

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

export { App };
export default withRedux(App);
