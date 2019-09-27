import React from 'react';
import ReactDOM from 'react-dom'
import * as rtl from '@testing-library/react';

import Form from './Form'


import { render, fireEvent, getByTestId} from "@testing-library/react";

afterEach(rtl.cleanup);

it('renders without crashing', () => {
  const div = document.createElement("div");
  ReactDOM.render(<Form />, div);
  ReactDOM.unmountComponentAtNode(div);
});



it("Submitting a name via the input field", () => {
    const { container, rerender } = render(<Form />);
    const nameValue = getByTestId(container, "username");
    const submitButton = getByTestId(container, "submitRefButton");
    // const newName = "Ben";
    // fireEvent.change(nameValue, { target: { value: newName } });
    // expect(nameValue.textContent).toEqual(newName)
    fireEvent.submit(submitButton);
    const usernameErrorMsg = getByTestId(nameValue, "username-error");
    expect(usernameErrorMsg.textContent).toEqual('User name is required');
    // rerender(<Form />);
//     // expect(window.localStorage.getItem("name")).toBe(newName);
  });