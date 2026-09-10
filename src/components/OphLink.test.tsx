import { afterEach, expect, test } from 'vitest';
import { cleanup, renderWithOphTheme, screen } from '@/vitest-utils';
import { OphLink } from './OphLink';
import { forwardRef, type ComponentPropsWithoutRef } from 'react';

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
        Link
      </OphLink>,
    );
    const link = screen.getByRole('link', { name: 'Link' });
    const icon = container.querySelector('svg');
    expect(link).toBeVisible();
    if (expectedIconVisibility) {
      expect(icon).toBeVisible();
    } else {
      expect(icon).not.toBeInTheDocument();
    }
  },
);

test('Can pass a custom link component and its props', () => {
  const CustomLink = forwardRef<
    HTMLAnchorElement,
    ComponentPropsWithoutRef<'a'> & { route: string }
  >(({ route, ...props }, ref) => (
    <a {...props} ref={ref} data-route={route} />
  ));

  renderWithOphTheme(
    <OphLink href="/internal" component={CustomLink} route="internal">
      Link
    </OphLink>,
  );

  const link = screen.getByRole('link', { name: 'Link' });
  expect(link).toBeVisible();
  expect(link).toHaveAttribute('href', '/internal');
  expect(link).toHaveAttribute('data-route', 'internal');
});
