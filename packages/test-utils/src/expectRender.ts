import { render } from 'react-testing-library';

export default function expectRender(ele: React.ReactElement) {
  const { container } = render(ele);
  expect(container.firstChild).not.toBeNull();
}
