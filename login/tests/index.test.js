import Login from '@/app/page';
import Navbar from '@/components/navbar';
import UserLogin from '@/components/authform';
import SignInBtn from '@/components/login-fb-btn';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

describe('Login page', () => {
  /* ---- tests when sessionProvider is fixed ----
  it('Render main page', () => {
    render(<Login />);
    expect(screen.getByTestId('avatar')).toBeInTheDocument();
  });

  it('Render navegation bar', () => {
    render(<Navbar />);
    expect(screen.getByTestId('appbar')).toBeInTheDocument();
    expect(screen.getByTestId('toolbar')).toBeInTheDocument();
    expect(screen.getByTestId('image-user')).toBeInTheDocument();
    expect(screen.getByTestId('btn-signout')).toBeInTheDocument();
    expect(screen.getByTestId('btn-signin')).toBeInTheDocument();
  });*/

  it('Renders the user login', () => {
    render(<UserLogin />);
    expect(screen.getByTestId('avatar')).toBeInTheDocument();
    expect(screen.getByTestId('email-user')).toBeInTheDocument();
    expect(screen.getByTestId('password-user')).toBeInTheDocument();
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
