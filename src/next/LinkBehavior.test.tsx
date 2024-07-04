import { LinkBehavior } from './LinkBehavior';
import { render } from '@testing-library/react';
import { vi, expect, test, describe, afterEach } from 'vitest';

vi.mock('next/link', () => ({ default: vi.fn() }));

describe('LinkBehavior', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });
  test.each([
    ['should use next/link for internal href', '/internal', 1],
    ['should not use next/link for external http-URL href', 'http://oph.fi', 0],
    ['should not use next/link for external https-URL href', 'https://oph.fi', 0],
  ])('%s', async (_msg, href, times) => {
    const NextLink = (await import('next/link')).default;
    render(<LinkBehavior href={href} />);
    expect(NextLink).toHaveBeenCalledTimes(times);
  });
});
