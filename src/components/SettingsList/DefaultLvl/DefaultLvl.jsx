import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function DefaultLvl() {
  return (
    <Box
      sx={{
        width: 1024,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="Введите данные" id="fullWidth" />
    </Box>
  );
}