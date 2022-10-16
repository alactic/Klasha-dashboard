import { render, screen } from '@testing-library/react';
import App from '../App';

jest.mock("../components/layout/sideBar/SideBar", () => () => <div data-testid="sidebar-component"></div>);
jest.mock("../components/layout/topNav/TopNav", () => () => <div data-testid="topnav-component"></div>);
jest.mock("../pages/dashboard/Dashboard", () => () => <div data-testid="dashboard-component"></div>);

test('renders content of App components', () => {
  const { queryByTestId } = render(<App />);
  expect(queryByTestId("sidebar-component")).toBeInTheDocument();
  expect(queryByTestId("topnav-component")).toBeInTheDocument();
  expect(queryByTestId("dashboard-component")).toBeInTheDocument();
});
