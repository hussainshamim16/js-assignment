import * as React from 'react';
import Button from '@mui/material/Button';
// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';



export default function DisableElevation() {
  return (
    <Button variant="contained" disableElevation>
      Disable elevation
      {/* <AccessAlarm color="secondary" /> */}
    </Button>
  );
}
