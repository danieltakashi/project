import useSWR from 'swr'
import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 130 },
  { field: 'businessName', headerName: 'Business name', width: 450 },
  { field: 'locations', headerName: 'Locations Date', type: 'number', width: 150 },
];

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function BusinessLocationGrid() {
  const { data, error } = useSWR('/api/business/location', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (<DataGrid rows={data} columns={columns} pageSize={20} />)

}
