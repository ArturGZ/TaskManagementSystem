import TaskList from '@/app/create-task-list/page';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

describe('create new task', () => {
  it('renders the view', () => {
    render(<TaskList />);

    expect(screen.getByTestId('title')).toBeInTheDocument();
    expect(screen.getByTestId('nameList')).toBeInTheDocument();
    expect(screen.getByTestId('nameContainer')).toBeInTheDocument();
    expect(screen.getByTestId('description')).toBeInTheDocument();
    expect(screen.getByTestId('descriptionContainer')).toBeInTheDocument();
    expect(screen.getByTestId('color')).toBeInTheDocument();
    expect(screen.getByTestId('colorOptions')).toBeInTheDocument();
    expect(screen.getByTestId('create')).toBeInTheDocument();
    expect(screen.getByTestId('cancel')).toBeInTheDocument();

  });

  it('Change the value of the Name field in the List', () => {
    render(<TaskList />);
    const nameContainer = screen.getByTestId('nameContainer');
    
    fireEvent.change(nameContainer, { target: { value: 'New List' } });
  
    expect(nameContainer).toHaveValue('New List');
  });

  it('Change the value of the List description field', () => {
    render(<TaskList />);
    const nameContainer = screen.getByTestId('descriptionContainer');
    
    fireEvent.change(nameContainer, { target: { value: 'Description' } });
  
    expect(nameContainer).toHaveValue('Description');
  });
  
});