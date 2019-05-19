## Highlight

Highlights pair well with PainPoints to increase visual appeal..

---

#### Examples

**Simple**

```jsx { "props": { }}
import PainPoint from '../PainPoint/PainPoint';

<div>
  <Highlight centerItems>
    <PainPoint
      padding={5}
      title="Let's build something great."
      body={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam ac tortor vitae purus faucibus.`}
      centerItems
      actions={[{ url: '#h2', content: 'Find out more', tags: ['guide'] }]}
    />
  </Highlight>
  <br />
  <br />
  <br />
  <br />
  <Highlight centerItems flip>
    <PainPoint
      padding={5}
      title="Or let's build something else."
      body={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam ac tortor vitae purus faucibus.`}
      actions={[{ url: '#h3', content: 'Find out more', tags: ['guide'] }]}
    />
  </Highlight>
  <br />
  <br />
  <br />
  <br />
  <Highlight centerItems>
    <PainPoint
      padding={5}
      title="Finally let's build this."
      body={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam ac tortor vitae purus faucibus.`}
      actions={[{ url: '#h4', content: 'Find out more', tags: ['guide'] }]}
    />
  </Highlight>
</div>;
```

---

#### Import

```jsx static
import { Highlight } from '@crensoft/mui-marketing';
```

---
