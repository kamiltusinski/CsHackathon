import * as React from 'react';
import './App.css';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import 'ag-grid-enterprise';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      columnDefs: [
        { headerName: 'Make', field: 'make', rowGroupIndex: 0 },
        { headerName: 'Price', field: 'price' }
      ],
      autoGroupColumnDef: {
        headerName: 'Model',
        field: 'model',
        cellRenderer: 'agGroupCellRenderer',
        cellRendererParams: {
          checkbox: true
        }
      },
      rowData: [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 }
      ]
    };
  }

  public render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
          height: '500px',
          width: '600px'
        }}
      >
        <AgGridReact
          enableSorting
          rowSelection="multiple"
          columnDefs={this.state.columnDefs}
          groupSelectsChildren
          autoGroupColumnDef={this.state.autoGroupColumnDef}
          rowData={this.state.rowData}
        />
      </div>
    );
  }
}

export default App;
