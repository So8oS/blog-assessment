import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Comments from './../src/components/comment';

const mockComments = [
  {
    postId: 1,
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    body: 'This is a comment'
  },
  {
    postId: 1,
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    body: 'Another comment here'
  }
];

describe('Comments Component', () => {
  test('renders Comments header', () => {
    render(<Comments comments={mockComments} />);
    expect(screen.getByText('Comments')).toBeInTheDocument();
  });

  test('renders correct number of comments', () => {
    render(<Comments comments={mockComments} />);
    const commentItems = screen.getAllByRole('listitem');
    expect(commentItems).toHaveLength(mockComments.length);
  });

  test('renders comment details correctly', () => {
    render(<Comments comments={mockComments} />);
    
    mockComments.forEach(comment => {
      expect(screen.getByText(comment.name)).toBeInTheDocument();
      expect(screen.getByText(comment.email)).toBeInTheDocument();
      expect(screen.getByText(comment.body, { exact: false })).toBeInTheDocument();
    });
  });



  test('renders dividers between comments', () => {
    render(<Comments comments={mockComments} />);
    const dividers = screen.getAllByRole('separator');
    expect(dividers).toHaveLength(mockComments.length);
  });

  test('handles empty comments array', () => {
    render(<Comments comments={[]} />);
    expect(screen.getByText('Comments')).toBeInTheDocument();
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });

 
});