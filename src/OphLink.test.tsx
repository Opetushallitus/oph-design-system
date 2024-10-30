import { afterEach, expect, test } from 'vitest';
import { cleanup, renderWithOphTheme, screen } from '@/vitest-utils';
import { OphLink } from './OphLink';

afterEach(cleanup);

test.each([
  ['https://example.com', undefined, true],
  ['https://example.com', true, true],
  ['https://example.com', false, false],
  ['/internal', undefined, false],
  ['/internal', false, false],
  ['/internal', true, true],
])(
  'Given href=%s and iconVisible=%s, should render with icon visibility=%s',
  (href, iconVisible, expectedIconVisibility) => {
    const { container } = renderWithOphTheme(
      <OphLink href={href} iconVisible={iconVisible}>
        Linkki
      </OphLink>,
    );
    const link = screen.getByRole('link', { name: 'Linkki' });
    const icon = container.querySelector('svg');
    expect(link).toBeVisible();
    if (expectedIconVisibility) {
      expect(icon).toBeVisible();
    } else {
      expect(icon).not.toBeInTheDocument();
    }
  },
);
