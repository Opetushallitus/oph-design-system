import { renderWithOphTheme } from '@/vitest-utils';
import { OphButton } from './OphButton';
import { fireEvent, screen } from '@testing-library/react';
import { vi, expect, test } from 'vitest';

const onClick = vi.fn();

test('OphButton allows link props when href defined', () => {
  renderWithOphTheme(
    <OphButton onClick={onClick} href="https://example.com" target="_blank">
      Click here!
    </OphButton>,
  );
  const el = screen.getByRole('link', { name: 'Click here!' });
  fireEvent.click(el);
  expect(onClick).toHaveBeenCalledOnce();
});
