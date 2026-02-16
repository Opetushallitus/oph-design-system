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
        { value: '1', label: 'First' },
        { value: '2', label: 'Second' },
        { value: '3', label: 'Third' },
        { value: '4', label: 'Fourth' },
        { value: '5', label: 'Fifth' },
      ]}
    ></TestComponent>,
  );

  const testValue = screen.getByTestId('test-value');
  expect(testValue).toHaveTextContent('0');

  fireEvent.click(screen.getByText('First'));
  fireEvent.click(screen.getByText('Second'));
  fireEvent.click(screen.getByText('Fifth'));

  expect(testValue).toHaveTextContent('3');

  expect(screen.getByTestId('delete-chip-2')).toBeVisible();
  expect(screen.getByTestId('delete-chip-5')).toBeVisible();

  fireEvent.click(screen.getByTestId('delete-chip-1'));
  expect(testValue).toHaveTextContent('2');

  fireEvent.click(screen.getByTestId('ClearIcon'));

  expect(testValue).toHaveTextContent('0');
});

test('Value changes correctly with uncontrolled select component', () => {
  renderWithOphTheme(
    <div data-testid={'test-select'}>
      <OphSelectMultiple
        options={[
          { value: '1', label: 'First' },
          { value: '2', label: 'Second' },
          { value: '3', label: 'Third' },
          { value: '4', label: 'Fourth' },
          { value: '5', label: 'Fifth' },
        ]}
        open={true}
        clearable={true}
        placeholder={'Placeholder'}
      ></OphSelectMultiple>
    </div>,
  );

  const select = screen.getByTestId('test-select');
  expect(select).toHaveTextContent('Placeholder');

  fireEvent.click(screen.getByText('First'));
  fireEvent.click(screen.getByText('Second'));
  fireEvent.click(screen.getByText('Fifth'));

  expect(select.getElementsByClassName('MuiChip-root').length).toBe(3);

  expect(screen.getByTestId('delete-chip-2')).toBeVisible();
  expect(screen.getByTestId('delete-chip-5')).toBeVisible();

  fireEvent.click(screen.getByTestId('delete-chip-1'));
  expect(select.getElementsByClassName('MuiChip-root').length).toBe(2);

  fireEvent.click(screen.getByTestId('ClearIcon'));

  expect(select.getElementsByClassName('MuiChip-root').length).toBe(0);
  expect(select).toHaveTextContent('Placeholder');
});
