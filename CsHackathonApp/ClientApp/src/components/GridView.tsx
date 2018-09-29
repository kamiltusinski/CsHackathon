import * as React from 'react';

import { inject, observer } from 'mobx-react';

import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import 'ag-grid-enterprise';

import { GridViewStore } from './GridViewStore';

import { Button, Container } from 'semantic-ui-react';

@inject('gridViewStore')
@observer
class GridView extends React.Component<{ gridViewStore?: GridViewStore }, any> {
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

    componentDidMount() {
        this.props.gridViewStore.start();
    }

    render() {
        return (
            <Container style={{ height: '100%' }} fluid>
                <Button onClick={() => this.props.gridViewStore.sendMsg('Kamil', '1')}>Click</Button>
                <div
                    className="ag-theme-balham"
                    style={{
                        height: '100%',
                        width: '100%'
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
            </Container>
        );
    }
}

export default GridView;
