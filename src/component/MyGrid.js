import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MyForm from './MyForm';
import MyTable from './MyTable';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function MyGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        
      <Grid container spacing={2}>
        <Grid item xs={6}> <MyForm />
          
        </Grid>
        <Grid item xs={6}> <MyTable />
          
        </Grid>
        
        
      </Grid>
    </Box>
  );
}