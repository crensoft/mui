## AppBar

AppBar component

---

#### Examples

**Default**

```jsx { "props": { "style": { "minHeight": 200, "backgroundColor": "#ddd" } } }
import AppBarLogo from './components/AppBarLogo';
import AppMenu from './components/AppMenu';
const menus = [
  [
    {
      title: 'Pricing',
    },
    {
      title: 'Portfolio',
    },
    {
      title: 'About',
    },
    {
      title: 'contact us',
      btn: {
        variant: 'contained',
        color: 'primary',
      },
    },
  ],
];

<AppBar>
  <AppBarLogo img="/img/logo.svg" />
  <AppMenu menu={menus[0]} />
</AppBar>;
```

---

#### Import

```jsx static
import { AppBar } from '@crensoft/mui-core';
```

---
