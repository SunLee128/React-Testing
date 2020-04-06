import React, { Component } from 'react';
import CommentBox from '../../src/components/CommentBox';
import { mount } from 'enzyme';

let wrapped;
beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
}); // cleans up the DOM created during the test

// FullDOM rendering example
it('has text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

describe('the text area', () => {
  beforeEach(() => {
    // simulating change event
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' } // fake event
    });

    // force it to rerender
    wrapped.update();
  });
  it('has text area that users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });

  it('when form is submitted, text area gets emptied', () => {
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
})
;
