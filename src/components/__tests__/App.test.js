import React from 'react';
import  { shallow } from 'enzyme'
import App from 'components/App';
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList' 

let wrapped;//declaire first to be accessible

beforeEach(()=> {
  wrapped = shallow(< App />) //reassign wrapped,
}) //common logic to be resued, it needs to occure before each test.  

it ('shows a comment box', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1); 
  // find all instances of CommentBox(array length) equals 1
})

it ('shows a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1); 
})
