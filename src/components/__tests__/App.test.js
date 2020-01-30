import React from 'react';
import  { shallow } from 'enzyme'
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react';
import App from '../App';
import CommentBox from '../CommentBox'
import CommentList from '../CommentList'

it ('shows a comment box', () => {
  const wrapped = shallow(< App />);
  expect(wrapped.find(CommentBox).length).toEqual(1); 
  // find all instances of CommentBox and it equals 1
})

it ('shows a comment list', () => {
  const wrapped = shallow(< App />);
  expect(wrapped.find(CommentList).length).toEqual(1); 
  // find all instances of CommentBox and it equals 1
})
