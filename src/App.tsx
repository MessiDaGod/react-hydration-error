import React, { useState } from 'react';
import { DataGrid, GridColDef } from "@mui/x-data-grid"





function App() {

  interface UserSessions {
    created_at: string | null
    email: string | null
    ip: unknown | null
    user_agent: string | null
    user_id: string | null
  }
  
const columns: GridColDef[] = [
  { field: "email", headerName: "Email", width: 200 },
  { field: "user_id", headerName: "User ID", width: 150 },
  { field: "created_at", headerName: "Created At", width: 180 },
  { field: "user_agent", headerName: "User Agent", width: 300 },
  { field: "ip", headerName: "IP Address", width: 150 },
]

const rows = [{"email":"consulting@gmail.com","user_id":"b84d5865-0322-411d-b97a-c492139817b4","created_at":null,"user_agent":null,"ip":null},{"email":"bobbob@gmail.com","user_id":"d9109dbf-c87b-4b95-be6d-516e13aa259b","created_at":"2024-06-09T18:43:34.702601+00:00","user_agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36","ip":"134.1.156.124/32"},{"email":"bob@gmail.com","user_id":"3f8a3bc5-a80e-4842-bde6-75e36f3dad7a","created_at":"2024-06-09T18:51:36.243523+00:00","user_agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36","ip":"134.1.156.124/32"},{"email":"bob@gmail.com","user_id":"3f8a3bc5-a80e-4842-bde6-75e36f3dad7a","created_at":"2024-06-09T18:41:48.801245+00:00","user_agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36","ip":"134.1.156.124/32"},{"email":"test@test.com","user_id":"237d04b3-4dfb-4111-b46a-5a48b195b8fc","created_at":null,"user_agent":null,"ip":null}]

const userSessions: UserSessions[] = rows
 

function DataTable({ rows: rows }: { rows: any[] }) {
  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.user_id}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}

  return (
    <div className="App">

<div className="mt-4 w-full">{userSessions.length > 0 && <DataTable rows={userSessions} />}</div>
    </div>
  );
}

export default App;