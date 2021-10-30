import React from 'react';
import ReactDOM from 'react-dom';
import { screen, fireEvent } from '@testing-library/react';
import Login from './Login1_4';

test('Login, given credentials, returns enabled submit button', () => {
  // Set up the environment and grab the elements
  const div = document.createElement('div');
  ReactDOM.render(<Login />, div);
  document.body.appendChild(div);
  const username = screen.getByRole('textbox', { name: /username/i });
  const password = screen.getByLabelText(/password/i);
  const rememberMe = screen.getByRole('checkbox');
  const loginBtn = screen.getByRole('button', { name: /Login/i });
  const fakeData = {
    username: 'test user',
    password: '123password',
  };

  // Work the DOM
  fireEvent.change(username, { target: { value: fakeData.username } });
  fireEvent.change(password, { target: { value: fakeData.password } });
  fireEvent.click(rememberMe);

  // Check the results
  expect(loginBtn.hasAttribute('disabled')).toBe(false);
  expect(loginBtn).not.toBeDisabled();

  expect(screen.getByTestId('form')).toHaveFormValues({
    username: fakeData.username,
    password: fakeData.password,
    rememberMe: true,
  });
});
