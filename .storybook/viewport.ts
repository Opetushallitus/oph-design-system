import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

interface Viewport {
  defaultViewport: string;
  viewports: Record<
    string,
    { name: string; styles: { width: string; height: string } }
  >;
}

export const viewport: Viewport = {
  defaultViewport: 'desktop1',
  viewports: {
    desktop1: {
      name: 'HD Desktop',
      styles: {
        width: '1280px',
        height: '720px',
      },
    },
    ...MINIMAL_VIEWPORTS,
  },
};
