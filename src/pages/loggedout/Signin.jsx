import React from 'react';
import { Box, Stack, TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';

export function Signin(props) {
  const handleSignin = async () => {
    props.history.push('/mail/inbox');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Typography variant="h5">Welcome to Mail</Typography>
        <Typography variant="caption">Connect your wallet</Typography>
        <TextField id="account-seed" label="Account Seed" required />
        <LoadingButton
          variant="contained"
          size="medium"
          color="secondary"
          onClick={handleSignin}
        >
          SignIn
        </LoadingButton>
      </Stack>
    </Box>
  );
}
