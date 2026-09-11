import { Alert, Box } from '@mui/material';
import {
  OphTypography,
  OphButton,
  OphInput,
  OphCheckbox,
  OphRadioGroupFormField,
  OphSelectFormField,
} from '@opetushallitus/oph-design-system';
import type { Messages } from '../i18n/request';

const options = [
  { value: '1', label: 'option 1' },
  { value: '2', label: 'option 2' },
];

export function App({ messages: t }: { messages: Messages }) {
  return (
    <Box component="main" margin={4}>
      <OphTypography variant="h1">{t.title}</OphTypography>
      <Box
        sx={{
          marginY: 2,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          gap: 2,
        }}
      >
        <OphInput
          defaultValue="Tekstiä"
          inputProps={{ 'aria-label': 'Text' }}
        />
        <OphRadioGroupFormField
          required
          label={t['radio-label']}
          options={options}
        />
        <OphSelectFormField
          required
          label={t['select-label']}
          placeholder={t.placeholder}
          options={options}
        />
        <OphCheckbox label={t['checkbox-label']} />
        <OphButton variant="contained">{t.button}</OphButton>
      </Box>
      <Alert severity="warning" onClose={() => {}}>
        {t.warning}
      </Alert>
    </Box>
  );
}
