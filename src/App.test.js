import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from "react-dom/test-utils";
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("APP renders a Footer", function () {
  const component = ReactTestUtils.renderIntoDocument(
    <App />
  );  
});
