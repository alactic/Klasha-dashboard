import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import SideBar from '../components/layout/sideBar/SideBar';
import {BrowserRouter, MemoryRouter} from 'react-router-dom'

jest.mock("../shared/icons/logo", () => () => <div data-testid="logo-component"></div>);

test('renders content of sidebar component', () => {
  const { queryByText } = render(<SideBar sidebarToggle={false}/>, {wrapper: BrowserRouter});
  expect(queryByText("Main pages")).toBeInTheDocument();
  expect(queryByText("Dashboard")).toBeInTheDocument();
  expect(queryByText("Balances")).toBeInTheDocument();
  expect(queryByText("Transactions")).toBeInTheDocument();
  expect(queryByText("Analytics")).toBeInTheDocument();
  expect(queryByText("Marketing")).toBeInTheDocument();
  expect(queryByText("Exchange rates")).toBeInTheDocument();
  expect(queryByText("Accept payments")).toBeInTheDocument();
  expect(queryByText("Checkout")).toBeInTheDocument();
  expect(queryByText("Payment Links")).toBeInTheDocument();
  expect(queryByText("Send payments")).toBeInTheDocument();
  expect(queryByText("Wire")).toBeInTheDocument();
  expect(queryByText("Support")).toBeInTheDocument();
  expect(queryByText("Hide panel")).toBeInTheDocument();
  
});
