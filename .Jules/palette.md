## 2024-05-18 - Added ARIA attributes to Language Selector dropdown
**Learning:** Found that custom dropdowns utilizing `div` and `button` elements need proper `aria-haspopup` and `aria-expanded` attributes to communicate their state to screen readers, in addition to a standard `aria-label`.
**Action:** Always verify custom interactive components (like selectors, modals, dropdowns) include standard ARIA state attributes, not just static labels.
