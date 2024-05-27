import { Box, Typography } from '@mui/material';
import { Button } from '@opetushallitus/oph-design-system';

export default function Home() {
  return (
    <main>
      <Box margin={1}>
        <Typography variant="h1">Otsikko</Typography>
        <Box component="p">
          <Button variant="contained">Painike</Button>
        </Box>
      </Box>
    </main>
  );
}
