'use client';
import { Box, Alert } from '@mui/material';
import { useTranslations } from 'next-intl';
import {
  OphTypography,
  OphButton,
  OphInput,
  OphCheckbox,
  OphRadioGroupFormField,
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
          <OphRadioGroupFormField
            required={true}
            label={t('radio-label')}
            helperText={t('radio-helper')}
            options={[
              { value: '1', label: 'option 1' },
              { value: '2', label: 'option 2' },
            ]}
          />
          <OphCheckbox label={t('checkbox-label')} />
          <OphButton variant="contained">{t('button')}</OphButton>
        </Box>
        <Alert severity="warning" onClose={() => {}}>
          {t('warning')}
        </Alert>
      </Box>
    </main>
  );
}
