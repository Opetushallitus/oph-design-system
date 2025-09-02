import { afterEach, expect, test } from 'vitest';
import { cleanup, renderWithOphTheme, screen, fireEvent } from '@/vitest-utils';
import React, { useState } from 'react';
import { OphSelectMultiple } from '@/src';
import type { OphSelectOption } from '@/src/components/OphSelect';

afterEach(cleanup);

const TestComponent = ({
  options,
}: {
  options: Array<OphSelectOption<string>>;
}) => {
  const [values, setValues] = useState<Array<string>>([]);

  return (
    <div>
      <span data-testid={'test-value'}>{values.length}</span>
      <OphSelectMultiple
        open={true}
        options={options}
        value={values}
        onChange={(event) => {
          setValues(event.target.value as Array<string>);
        }}
        clearable={true}
      ></OphSelectMultiple>
    </div>
  );
};

test('State changes correctly inside and outside the select component', () => {
  renderWithOphTheme(
    <TestComponent
      options={[
        { value: '1', label: 'eka' },
        { value: '2', label: 'toka' },
        { value: '3', label: 'kolmas' },
        { value: '4', label: 'neljäs' },
        { value: '5', label: 'viides' },
      ]}
    ></TestComponent>,
  );

  const testValue = screen.getByTestId('test-value');
  expect(testValue).toHaveTextContent('0');

  fireEvent.click(screen.getByText('eka'));
  fireEvent.click(screen.getByText('toka'));
  fireEvent.click(screen.getByText('viides'));

  expect(testValue).toHaveTextContent('3');

  expect(screen.getByTestId('delete-chip-2')).toBeVisible();
  expect(screen.getByTestId('delete-chip-5')).toBeVisible();

  fireEvent.click(screen.getByTestId('delete-chip-1'));
  expect(testValue).toHaveTextContent('2');

  fireEvent.click(screen.getByTestId('ClearIcon'));

  expect(testValue).toHaveTextContent('0');
});
