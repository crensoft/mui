## Intro

Intro component

---

#### Examples

**Simple**

```jsx { "props": { }}
<Intro
  title="Let's build something great."
  center
  main
  body={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam ac tortor vitae purus faucibus.`}
/>
```

**Advanced**

```jsx { "props": { }}
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCube, faCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faCube, faCircle);

<Intro
  title="Welcome to Awesome"
  icon="cube"
  label="#Tag"
  center
  main
  titleColor="textSecondary"
  iconColor="primary"
  divider
  dividerColor="iconColor"
  body={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam ac tortor vitae purus faucibus.`}
/>;
```

**Colorful**

```jsx { "props": { }}
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCube, faCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faCube, faCircle);

<Intro
  title="Colorful Heading"
  icon="cube"
  circleIcon
  titleColor="iconColor"
  iconColor="primary"
  body={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam ac tortor vitae purus faucibus.`}
/>;
```

**TODO:**

- Label color

---

#### Import

```jsx static
import { Intro } from '@crensoft/mui-marketing';
```

---
