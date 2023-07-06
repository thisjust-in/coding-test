import React from 'react';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import UserList from "../Userlist";

const mockUserData = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
  ];

  describe('UserList', () => {
    it('renders the title and user list correctly', () => {
      render(<UserList userData={mockUserData} title="User List" />);
    
      const titleElement = screen.getByText(/User List/i);
      expect(titleElement).toBeInTheDocument();
    
      const userListElements = screen.getAllByRole('listitem');
      expect(userListElements).toHaveLength(mockUserData.length);
      expect(userListElements[0]).toHaveTextContent('John Doe');
      expect(userListElements[1]).toHaveTextContent('Jane Smith');
    });
  });