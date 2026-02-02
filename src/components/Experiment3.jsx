
import React from 'react';
import { Button, TextField, Card, CardContent } from '@mui/material';

function Experiment3() {
  return (
    <div className="mt-4">
      <h3 className="text-center">Experiment 3: Material UI Form</h3>
      <Card style={{ width: 300, margin: '20px auto' }}>
        <CardContent>
          <h3>Material UI Form</h3>
          <TextField label="Name" fullWidth margin="normal" />
          <Button variant="contained" fullWidth>Submit</Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Experiment3;
