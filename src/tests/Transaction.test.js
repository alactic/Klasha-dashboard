import { render } from '@testing-library/react';
import {BrowserRouter, MemoryRouter} from 'react-router-dom'
import Transactions from '../pages/transactions/Transactions';

jest.mock("../shared/pagination/Pagination", () => () => <div data-testid="pagination"></div>);

test('renders content of Dashboard component', () => {
  const { queryByText, queryAllByText, queryAllByTestId } = render(<Transactions/>, {wrapper: BrowserRouter});
  expect(queryByText("Transaction history")).toBeInTheDocument();
  expect(queryByText("Filter")).toBeInTheDocument();
  expect(queryByText("Export")).toBeInTheDocument();
  expect(queryByText("Transaction ID")).toBeInTheDocument();
  expect(queryByText("Source")).toBeInTheDocument();
  expect(queryByText("Customer name")).toBeInTheDocument();
  expect(queryByText("Customer email")).toBeInTheDocument();
  expect(queryByText("Amount")).toBeInTheDocument();
  expect(queryByText("Request date")).toBeInTheDocument();
  expect(queryByText("Status")).toBeInTheDocument();
  expect(queryAllByText("GB124QWERTY12346")).toHaveLength(6);
  expect(queryAllByText("GTB")).toHaveLength(6);
  expect(queryAllByText("Mike Owen")).toHaveLength(6);
  expect(queryAllByText("gm022@gmail.com")).toHaveLength(6);
  expect(queryAllByText("$230.00")).toHaveLength(6);
  expect(queryAllByText("24.08.2021")).toHaveLength(6);
  expect(queryAllByText("Pending")).toHaveLength(6);
  expect(document.querySelectorAll("th")).toHaveLength(7);
  expect(document.querySelectorAll("tr")).toHaveLength(7);
  expect(document.querySelectorAll("td")).toHaveLength(42);
  expect(queryAllByTestId("pagination")).toHaveLength(1);

  
});
