import EditableTable from '@/app/component/Dasboard/Content'
import Sidebar from '@/app/component/Dasboard/Sidebar'

import React from 'react';
import { Box } from '@mui/material';

const Dashboard = () => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
    <Sidebar />
    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <EditableTable />
    </Box>
  </Box>
  
  );
};

export default Dashboard;
