import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
// import TaskList from './TaskList';  // Importa el componente que deseas probar
import TaskList_task from '@/app/tasks/page';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';


describe("TaskList", () => {
  it('renders the component correctly', () => {
    render(<TaskList_task />);

    // Verifica que elementos específicos estén presentes en el renderizado
    expect(screen.getByTestId('tareas')).toBeInTheDocument();
    expect(screen.getByTestId('descripcion')).toBeInTheDocument();
    expect(screen.getByTestId('fechaFinalizacion')).toBeInTheDocument();
    expect(screen.getByTestId('estado')).toBeInTheDocument();
    expect(screen.getByTestId('agregarTarea')).toBeInTheDocument();
  });

  it('handles user interaction correctly', () => {
    // Simula interacciones de usuario y verifica el comportamiento esperado del componente.
  });
});