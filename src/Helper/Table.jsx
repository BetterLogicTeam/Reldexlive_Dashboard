import React from "react";
import { useTable } from "react-table";
import "./Table.css"

export default function Table({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  console.log("Row", rows);

  return (
    <div>
      <div className="card-body">
        <div className="table-responsive">
          <table
            {...getTableProps()}
            id="datatable"
            className="table  table-striped table-bordered"
          >
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th className="therere" {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows==0  ? (
                <>
                  <tr>
                    <td colspan="12" className="text-center text-white">
                      No Data Found
                    </td>
                  </tr>
                </>
              ) : (
                <>
                  {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                      <tr className=" " {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return (
                            <td className="text-white" {...cell.getCellProps()} >
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </>
              )}
            </tbody>
          </table>
        </div>

        {/* <!---pagination start--> */}
        {/* <div className="pagination-wrapper">
            <div className="pagination">
              <div className="pagination-container">
                <ul className="pagination">
                  <li className="disabled PagedList-pageCountAndLocation">
                    <a>Page 1 of 0.</a>
                  </li>
                  <li className="disabled PagedList-pageCountAndLocation">
                    <a>Showing items 1 through 0 of 0.</a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        {/* <!---pagination end--> */}
      </div>
    </div>
  );
}
