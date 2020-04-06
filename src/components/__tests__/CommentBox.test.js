import React, { Component } from 'react';
import CommentBox from 'components/CommentBox';
import { mount } from 'enzyme';

let wrapped;
beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
}); //cleans up the DOM created during the test

//FullDOM rendering example
it('has text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});
