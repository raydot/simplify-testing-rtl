import React from 'react';
import ReactDOM from 'react-dom';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Profile from './Steve1_2';

test('Profile, given click "hide details" button, shows "display details" button', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Profile
      name='Sweet Jame'
      title='Superstar Spectacular'
      details='Who loves you baby?'
    />,
    div
  );
  document.body.appendChild(div);

  const hideDetailsBtn = screen.getByRole('button', { name: /hide details/i });
  fireEvent.click(hideDetailsBtn);

  // This is the syntax for the RTL.  By adding jest-dom we get some more
  // descriptive testing functions
  const displayDetailsBtn = screen.getByRole('button', {
    name: /display details/i,
  });
  // So replace this:
  // expect(displayDetailsBtn).toBeTruthy();

  // With this:
  expect(displayDetailsBtn).toBeInTheDocument();

  const removedHideDetailsBtn = screen.queryByRole('button', {
    name: /hide details/i,
  });
  // Again replace this:
  expect(removedHideDetailsBtn).toBeFalsy();
  // With this:
  expect(removedHideDetailsBtn).not.toBeInTheDocument();

  div.remove();
});
