## PainPoint

PainPoints combine Intro and ActionGroup components to create compelling
sections aimed towards getting the user to discover about the service.

---

#### Examples

**Simple**

```jsx { "props": { }}
<PainPoint
  intro={{
    title: "Let's build something great.",
    inline: true,
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam ac tortor vitae purus faucibus.`,
  }}
  actions={[{ url: '#h2', content: 'Find out more', tags: ['guide'] }]}
/>
```

---

#### Import

```jsx static
import { PainPoint } from '@crensoft/mui-marketing';
```

---
