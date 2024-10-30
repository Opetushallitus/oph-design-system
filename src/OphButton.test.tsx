import { renderWithOphTheme } from '@/vitest-utils';
import { OphButton } from './OphButton';
import { fireEvent, screen } from '@testing-library/react';
import { vi, expect, test } from 'vitest';

const onClick = vi.fn();

test('OphButton', () => {
  renderWithOphTheme(<OphButton onClick={onClick}>Click here!</OphButton>);
  const el = screen.getByRole('button', { name: 'Click here!' });
  fireEvent.click(el);
  expect(onClick).toHaveBeenCalledOnce();
});
