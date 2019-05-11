import { render } from 'react-testing-library';

/**
 * Render ReactElement and tests that it throws error
 */
export default function expectRenderThrow(
  ele: React.ReactElement,
  err: string | Error | RegExp = /.*/,
) {
  jest.spyOn(console, 'error');
  // @ts-ignore
  console.error.mockImplementation(() => {});
  expect(() => {
    render(ele);
  }).toThrow(err);
  // @ts-ignore
  console.error.mockRestore();
}
