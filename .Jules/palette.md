## 2026-08-12 - Accessible Custom Dropdown Pattern
**Learning:** When building custom dropdowns (like LanguageSelector), native `<select>` accessibility is lost. We must manually add ARIA roles (`listbox`, `option`), states (`aria-expanded`, `aria-selected`), and keyboard interactions (Escape to close) to maintain usability for screen reader and keyboard users.
**Action:** Ensure all future custom select/dropdown components implement the complete `listbox` ARIA pattern and include global keydown listeners for standard interactive keys (Escape, Arrow Up/Down).
