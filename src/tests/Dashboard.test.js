import { render } from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom'
import Dashboard from '../pages/dashboard/Dashboard';

jest.mock("../components/dashboard/chart/Chart", () => () => <div data-testid="chart"></div>);

test('renders content of Dashboard component', () => {
  const { queryByText, queryAllByText, queryAllByTestId } = render(<Dashboard/>, {wrapper: BrowserRouter});
  expect(queryByText("Sales overview")).toBeInTheDocument();
  expect(queryByText("Today's sales")).toBeInTheDocument();
  expect(queryAllByText("24 Aug - 01 Sep 21")).toHaveLength(3);
  expect(queryAllByText("This week")).toHaveLength(3);
  expect(queryAllByText("₦1,652.50")).toHaveLength(4);
  expect(queryByText("Sales")).toBeInTheDocument();
  expect(queryByText("7 days")).toBeInTheDocument();
  expect(queryByText("30 days")).toBeInTheDocument();
  expect(queryByText("USD")).toBeInTheDocument();
  expect(queryByText("Email")).toBeInTheDocument();
  expect(queryByText("Download report")).toBeInTheDocument();
  expect(queryByText("KlashaWire - send money to businesses globally from Africa")).toBeInTheDocument();
  expect(queryByText("Send a Wire")).toBeInTheDocument();
  expect(queryAllByTestId("chart")).toHaveLength(1);

  
});
