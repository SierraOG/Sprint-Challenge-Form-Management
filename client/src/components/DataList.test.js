import React from 'react';
import ReactDOM from 'react-dom'
import * as rtl from '@testing-library/react';

import DataList from './DataList'


import { render, fireEvent, getByTestId} from "@testing-library/react";

afterEach(rtl.cleanup);

it('renders without crashing', () => {
  const div = document.createElement("div");
  ReactDOM.render(<DataList />, div);
//   ReactDOM.unmountComponentAtNode(div);
});
