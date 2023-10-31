import Navbar from '../components/navbar';
import UserLogin from '../components/user-login';
import SignInBtn from '../components/login-fb-btn';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useSession } from 'next-auth/react';

describe("Login page", () => {
  /* //---- tests when sessionProvider is fixed ----
  it('Render main page', () => {
    render(<Login />);
    expect(screen.getByTestId('avatar')).toBeInTheDocument();
  });

  it('Render navegation bar', () => {
    render( <Navbar />);
    expect(screen.getByTestId('appbar')).toBeInTheDocument();
    expect(screen.getByTestId('toolbar')).toBeInTheDocument();
    expect(screen.getByTestId('btn-navbar-home')).toBeInTheDocument();
    expect(screen.getByTestId('name-app')).toBeInTheDocument();
    // session: authenticated
    expect(screen.getByTestId('image-user')).toBeInTheDocument();
    expect(screen.getByTestId('btn-signout')).toBeInTheDocument();
    // session: unauthenticated
    //expect(screen.getByTestId('btn-signin')).toBeInTheDocument();
  });*/

  it('Render the navigation bar', () => {
    // Configura el estado de sesión simulado
    const mock = jest.fn();
    useSession.mockReturnValue([null, true]);
    render(<Navbar />);

    // Debería mostrar el mensaje de carga
    expect(screen.getByTestId('appbar')).toBeInTheDocument();
    expect(screen.getByTestId('toolbar')).toBeInTheDocument();
  });

  it('Renders the user login', () => {
    render(<UserLogin />);
    expect(screen.getByTestId('avatar')).toBeInTheDocument();
    expect(screen.getByTestId('textField-email-user')).toBeInTheDocument();
    expect(screen.getByTestId('textField-password-user')).toBeInTheDocument();
    expect(screen.getByTestId('btn-signin')).toBeInTheDocument();
    expect(screen.getByTestId('forgot-pass')).toBeInTheDocument();
    expect(screen.getByTestId('signup')).toBeInTheDocument();
  });

  it('Renders the button sign in whit facebook ', () => {
    render(<SignInBtn />);
    expect(screen.getByTestId('btn-signin-facebook')).toBeInTheDocument();
    expect(screen.getByTestId('facebook-icon')).toBeInTheDocument();
    expect(screen.getByTestId('text-btn-signin-fb')).toBeInTheDocument();
  });

});