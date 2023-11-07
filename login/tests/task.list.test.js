import React from 'react';
import Home from '../app/page';
import AddButton from '../components/add-button';
import DeleteButton from '../components/delete-button';
import ToggleButton from '../components/toggle-button';
import TaskList from '../components/task-list';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';

describe('Task List', () => {
    it('renders the task list', () => {

        const taskList = {
            id: 1,
            name: 'Lista de Tareas 1',
            description: 'Descripción de la Lista 1',
            color: 'red',
            tasks: [
            ],
          };

          
        const checkedItems = [];
        
        render(<TaskList taskList={taskList} checkedItems={checkedItems}/>);
        //List, ListItemButton, ListItemText, Divider, Checkbox, Collapse, Button
        expect(screen.getByTestId('list')).toBeInTheDocument();
        expect(screen.getByTestId('listitembutton')).toBeInTheDocument();
        expect(screen.getByTestId('listitemtext')).toBeInTheDocument();
        expect(screen.getByTestId('divider')).toBeInTheDocument();
        expect(screen.getByTestId('checkbox')).toBeInTheDocument();
    });

    it('renders the add button', () => {
    
        render(<AddButton/>);

        expect(screen.getByTestId('button')).toBeInTheDocument();
        expect(screen.getByTestId('addicon')).toBeInTheDocument();

    });

    it('renders the delete button', () => {
    
        render(<DeleteButton/>);

        expect(screen.getByTestId('button')).toBeInTheDocument();
        expect(screen.getByTestId('delicon')).toBeInTheDocument();

    });

    it('renders the toggle button', () => {
    
        render(<ToggleButton/>);

        expect(screen.getByTestId('box')).toBeInTheDocument();
        expect(screen.getByTestId('fab')).toBeInTheDocument();
        expect(screen.getByTestId('arrowdropupicon')).toBeInTheDocument();

    });
});