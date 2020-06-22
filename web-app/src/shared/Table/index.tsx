import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTable } from 'react-table';
import { format, parseISO } from 'date-fns';
import Avatar from '../Avatar';
import Status from '../Status';
import appleImg from '../../images/apple-logo.png';
import boots from '../../images/boots.png';
import primark from '../../images/primark.jpeg';
import debs from '../../images/debs.jpg';
import spd from '../../images/spd-logo.jpg';

const Styles = styled.div`
  border-radius: 0.2rem;
  vertical-align: middle;
  border: 1px solid #e5e7eb;
  table {
    border: 0 solid #d2d6dc;
    min-width: 100%;
    border-collapse: collapse;
    th {
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: #6b7280;
      text-align: left;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      line-height: 1rem;
      font-size: 0.85rem;
      font-weight: 700;
      border-bottom: 1px solid #e5e7eb;
      background-color: #f9fafb;
    }
    tbody {
      background-color: #fff;
    }
    td {
      white-space: nowrap;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      padding-top: 1rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid #e5e7eb;
    }
  }
`;

const LinkCellWrapper = styled(Link)`
  color: #5850ec;
  text-decoration: none;
  background-color: transparent;
`;

const NameCell = styled.div`
  display: flex;
  align-items: center;
`;

const AvatarWrapper = styled.div`
  flex-shrink: 0;
  width: 2.5rem;
  height: 2.5rem;
`;

const TwoRowCell = styled.div`
  margin-left: 1rem;
`;

const Text = styled.div`
  color: #161e2e;
  line-height: 1.25rem;
  font-size: 0.875rem;
  font-weight: 500;
`;

const TopCell = styled(Text)`
  text-transform: capitalize;
`;

const BottomCell = styled(Text)`
  color: #6b7280;
`;

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, rows, prepareRow, columns: cols } = useTable({
    columns,
    data,
  });

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        <tr>
          {cols.map((column) => (
            <th {...column.getHeaderProps()} key={column.id}>
              {column.render('Header')}
            </th>
          ))}
        </tr>
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={row.id}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

interface RowProps {
  original: {
    brandLogo: string;
    brandName: string;
    location: string;
    refund: string;
    cost: string;
    status: string;
    date: string;
  };
}

interface CellProps {
  row: RowProps;
}

const MerchantCell = ({ row }: CellProps) => (
  <NameCell>
    <AvatarWrapper>
      <Avatar>
        <img src={row.original.brandLogo} />
      </Avatar>
    </AvatarWrapper>
    <TwoRowCell>
      <TopCell>{row.original.brandName}</TopCell>
      <BottomCell>{row.original.location}</BottomCell>
    </TwoRowCell>
  </NameCell>
);

const LocationCell = ({ row }: CellProps) => (
  <div>
    <TopCell>{row.original.refund}</TopCell>
    <BottomCell>{row.original.cost}</BottomCell>
  </div>
);

const StatusCell = ({ row }: CellProps) => <Status status={row.original.status}>{row.original.status}</Status>;

const LinkCell = ({ row }: CellProps) => <LinkCellWrapper to="/trips/123">View</LinkCellWrapper>;

const DateCell = ({ row }: CellProps) => <BottomCell>{format(parseISO(row.original.date), 'MMM d, yyy')}</BottomCell>;

function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Merchant',
        accessor: 'brandName',
        Cell: MerchantCell,
      },
      {
        Header: 'Location',
        accessor: 'refund',
        Cell: LocationCell,
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: StatusCell,
      },
      {
        Header: 'Date',
        accessor: 'date',
        Cell: DateCell,
      },
      {
        Header: '',
        accessor: 'id',
        Cell: LinkCell,
      },
    ],
    [],
  );

  const data = [
    {
      brandLogo: appleImg,
      brandName: 'apple',
      location: 'London, UK',
      date: '2019-02-22',
      cost: '£1000',
      refund: '£200',
      status: 'pending',
      id: '1',
    },
    {
      brandLogo: primark,
      brandName: 'primark',
      location: 'London, UK',
      date: '2019-02-23',
      cost: '£100',
      refund: '£20',
      status: 'paid',
      id: '2',
    },
    {
      brandLogo: boots,
      brandName: 'boots',
      location: 'London, UK',
      date: '2020-05-05',
      cost: '£200',
      refund: '£20',
      status: 'rejected',
      id: '3',
    },
    {
      brandLogo: debs,
      brandName: 'debenhams',
      location: 'London, UK',
      date: '2020-01-26',
      cost: '£400',
      refund: '£80',
      status: 'paid',
      id: '4',
    },
    {
      brandLogo: spd,
      brandName: 'sports direct',
      location: 'London, UK',
      date: '2020-04-01',
      cost: '£250',
      refund: '£85',
      status: 'pending',
      id: '5',
    },
  ];

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  );
}

export default App;
