import { Box } from '@mui/material';
import { OphButton, OphTypography } from '@opetushallitus/oph-design-system';

export default function Home() {
  return (
    <main>
      <Box margin={1}>
        <OphTypography variant="h1">Otsikko</OphTypography>
        <Box component="p">
          <OphButton variant="contained">Painike</OphButton>
        </Box>
      </Box>
    </main>
  );
}
