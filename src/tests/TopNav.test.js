import { render } from '@testing-library/react';
import {BrowserRouter, MemoryRouter} from 'react-router-dom'
import TopNav from '../components/layout/topNav/TopNav';

jest.mock("../shared/icons/arrowDown", () => () => <div data-testid="arrow-down"></div>);
jest.mock("../shared/icons/dp", () => () => <div data-testid="dp"></div>);
jest.mock("../shared/icons/toggle-icon", () => () => <div data-testid="toggle"></div>);

test('renders content of TopNav component', () => {
  const { queryByText, queryByTestId, queryAllByTestId } = render(<TopNav sidebarToggle={false}/>, {wrapper: BrowserRouter});
  expect(queryByText("En")).toBeInTheDocument();
  expect(queryByTestId("dp")).toBeInTheDocument();
  expect(queryByTestId("toggle")).toBeInTheDocument();
  expect(queryAllByTestId("arrow-down")).toHaveLength(2);

  
});
