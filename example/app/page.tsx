'use client';
import { Box, Alert } from '@mui/material';
import { useTranslations } from 'next-intl';
import {
  OphTypography,
  OphButton,
  OphInput,
} from '@opetushallitus/oph-design-system';

export default function Home() {
  const t = useTranslations();

  return (
    <main>
      <Box margin={4}>
        <OphTypography variant="h1">{t('title')}</OphTypography>
        <Box
          sx={{ marginY: 2, display: 'flex', alignItems: 'flex-start', gap: 1 }}
        >
          <OphInput value="Tekstiä" />
          <OphButton variant="contained">{t('button')}</OphButton>
        </Box>
        <Alert severity="warning" onClose={() => {}}>
          {t('warning')}
        </Alert>
      </Box>
    </main>
  );
}
