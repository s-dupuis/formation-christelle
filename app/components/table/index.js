import React from 'react';
import {
  useTable,
  useFilters,
  usePagination,
  useFlexLayout
} from 'react-table';

import { useMeasure, isMobile } from '@@hooks/useMeasure';
import classNames from 'classnames';

import {
  dateFilter,
  numberFilter,
  textFilter
} from './filters';
const R = require('ramda');

function DefaultColumnFilter ({
  column: { filterValue, preFilteredRows, setFilter },
  setAllFilters
}) {
  const count = preFilteredRows.length;
  return (
    <div>
      <div>
        <button
          onClick={() => {
            setAllFilters([]);
            setFilter({ ...filterValue, sort: 'ASC' });
          }}
        >ASC</button>
        <button
          onClick={() => {
            setAllFilters([]);
            setFilter({ ...filterValue, sort: 'DESC' });
          }}
        >DESC</button>
      </div>
      <input
        value={R.propOr(undefined, 'search', filterValue)}
        onChange={e => {
          setFilter({ ...filterValue, search: R.when(R.isEmpty, R.always(undefined), e.target.value) }); // Set undefined to remove the filter entirely
        }}
        placeholder={`Search ${count} records...`}
      />
    </div>
  );
}

const Table = ({
  columns,
  data,
  pagination,
  onFetch,
  isBlock,
  hideFilters,
  onRowClick
}) => {
  const { dimensions } = useMeasure();

  const filterTypes = React.useMemo(
    () => ({
      dateFilter,
      numberFilter,
      textFilter,
      text: (rows, id, filterValue) => {
        return rows.filter(row => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
              .toLowerCase()
              .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      }
    }),
    []
  );

  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter
    }),
    []
  );

  const tablePlugins = [
    hideFilters ? undefined : useFilters,
    useFlexLayout,
    usePagination
  ].filter((el) => R.not(R.isNil(el)));

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: {
      filters,
      pageSize,
      pageIndex
    }
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      filterTypes,
      // filterTypes: null,
      manualFilters: true,
      manualPagination: true,
      pageCount: pagination.pages
    },
    ...tablePlugins
  );

  React.useEffect(() => {
    if (!R.is(Function, onFetch)) return;
    onFetch({ filter: filters, pagination: { page: pageIndex, limit: pageSize } });
  }, [filters, pageSize, pageIndex]);

  return (
    <div {...getTableProps()}>
      <div>
        {headerGroups.map((headerGroup, index) => (
          <div key={index} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, index) => (
              <div
                key={index}
                {...column.getHeaderProps()}
              >
                {column.render('Header')}
                <div>{column.canFilter ? column.render('Filter') : null}</div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div>
        {isBlock && isMobile(R.prop('width', dimensions))
          ? <div>
            {rows.map((row, index) => {
              prepareRow(row);
              return <div key={row.id}
                className={classNames('f-block-table', { 'cursor-pointer': R.not(R.isNil(onRowClick)) })}
                onClick={() => R.not(R.isNil(onRowClick)) && onRowClick(row.original)}>
                <table>
                  {row.cells.map((cell) => {
                    return <tr key={cell.column.id}>
                      <th>{cell.column.Header}</th><td>{cell.value}</td>
                    </tr>;
                  })}
                </table>
              </div>;
            })}
          </div>
          : <div className='f-table-rows'>
            {rows.map((row, index) => {
              prepareRow(row);
              return (
                <div key={row.id}
                  className={classNames('f-table-row', { 'cursor-pointer': R.not(R.isNil(onRowClick)) })}
                  onClick={() => R.not(R.isNil(onRowClick)) && onRowClick(row.original)}
                  {...row.getRowProps()}
                >
                  {row.cells.map((cell, index) => {
                    return (
                      <div
                        key={index}
                        {...cell.getCellProps()}
                      >
                        {cell.render('Cell')}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        }
      </div>

    </div>
  );
};

Table.defaultProps = {
  pagination: {},
  onRowClick: null
};

export default Table;
