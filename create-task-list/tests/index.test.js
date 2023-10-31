import ListaTareas from '../app/page';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

describe('create new task', () => {
  it('renders the view', () => {
    render(<ListaTareas />);

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
  
});