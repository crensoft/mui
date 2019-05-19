## FeaturedList

FeaturedLists display a grid of pain points.

---

#### Examples

**Simple**

```jsx { "props": { }}
import PainPoint from '../PainPoint/PainPoint';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLaptopCode, faCalendarAlt, faChartBar } from '@fortawesome/free-solid-svg-icons';

library.add(faCalendarAlt, faLaptopCode, faChartBar);

const body = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam ac tortor vitae purus faucibus.`;

const features = [
  {
    title: 'BROWSER',
    body,
    icon: 'laptop-code',
  },
  {
    title: 'CALENDAR',
    body,
    icon: 'calendar-alt',
  },
  {
    title: 'STATS',
    body,
    icon: 'chart-bar',
  },
  {
    title: 'BROWSER 2',
    body,
    icon: 'laptop-code',
  },
  {
    title: 'CALENDAR 2',
    body,
    icon: 'calendar-alt',
  },
  {
    title: 'STATS 2',
    body,
    icon: 'chart-bar',
  },
];
<div>
  <FeaturedList features={features} />
</div>;
```

**Cards**

```jsx { "props": { "style": { "backgroundColor": "#ddd" } }}
import PainPoint from '../PainPoint/PainPoint';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLaptopCode, faCalendarAlt, faChartBar } from '@fortawesome/free-solid-svg-icons';

library.add(faCalendarAlt, faLaptopCode, faChartBar);

const body = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam ac tortor vitae purus faucibus.`;

const features = [
  {
    title: 'BROWSER',
    body,
    icon: 'laptop-code',
  },
  {
    title: 'CALENDAR',
    body,
    icon: 'calendar-alt',
  },
  {
    title: 'STATS',
    body,
    icon: 'chart-bar',
  },
  {
    title: 'BROWSER 2',
    body,
    icon: 'laptop-code',
  },
];
<div>
  <FeaturedList large cards intro={{ inline: true }} features={features} />
</div>;
```

**With icons**

```jsx
import PainPoint from '../PainPoint/PainPoint';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLaptopCode, faCalendarAlt, faChartBar } from '@fortawesome/free-solid-svg-icons';

library.add(faCalendarAlt, faLaptopCode, faChartBar);

const body = `Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.`;

const features = [
  {
    title: 'BROWSER',
    body,
    icon: 'laptop-code',
    actions: [
      {
        url: '#1',
        guide: true,
        tags: ['guide'],
        content: 'Visit the browser',
      },
    ],
  },
  {
    title: 'CALENDAR',
    body,
    icon: 'calendar-alt',
    actions: [
      {
        url: '#1',
        guide: true,
        tags: ['guide'],
        content: 'Visit the calendar',
      },
    ],
  },
  {
    title: 'STATS',
    body,
    icon: 'chart-bar',
    actions: [
      {
        url: '#1',
        guide: true,
        tags: ['guide'],
        content: 'Visit the stats',
      },
    ],
  },
];
<div>
  <FeaturedList center intro={{ iconSize: '6x' }} features={features} />
</div>;
```

---

#### Import

```jsx static
import { FeaturedList } from '@crensoft/mui-marketing';
```

---
