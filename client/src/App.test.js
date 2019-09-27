import React from 'react';
import ReactDOM from 'react-dom'
import * as rtl from '@testing-library/react';

import App from './App'

import { render, fireEvent, getByTestId} from "@testing-library/react";

afterEach(rtl.cleanup);

it('renders without crashing', () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
});

