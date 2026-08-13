import { describe, it, expect } from 'vitest';
import { structureHtmlFragment } from './safeHtml';

describe('structureHtmlFragment edge cases', () => {
  it('returns empty string for null', () => {
    // @ts-expect-error - testing invalid input
    expect(structureHtmlFragment(null)).toBe('');
  });

  it('returns empty string for undefined', () => {
    // @ts-expect-error - testing invalid input
    expect(structureHtmlFragment(undefined)).toBe('');
  });

  it('returns empty string for empty string', () => {
    expect(structureHtmlFragment('')).toBe('');
  });

  it('returns empty string for whitespace string', () => {
    expect(structureHtmlFragment('   ')).toBe('');
  });

  it('returns empty string for non-string input', () => {
    // @ts-expect-error - testing invalid input
    expect(structureHtmlFragment(123)).toBe('');
    // @ts-expect-error - testing invalid input
    expect(structureHtmlFragment({})).toBe('');
  });
});

describe('structureHtmlFragment stripping wrappers', () => {
  it('strips DOCTYPE', () => {
    expect(structureHtmlFragment('<!DOCTYPE html><p>content</p>')).toBe('<p>content</p>');
    expect(structureHtmlFragment('<!doctype html public "-//W3C//DTD HTML 4.0 Transitional//EN"><p>content</p>')).toBe('<p>content</p>');
  });

  it('strips html, head, body tags', () => {
    expect(structureHtmlFragment('<html><head></head><body><p>content</p></body></html>')).toBe('<p>content</p>');
    expect(structureHtmlFragment('<html lang="en"><head></head><body class="main"><p>content</p></body></html>')).toBe('<p>content</p>');
  });

  it('strips title tags and their contents', () => {
    expect(structureHtmlFragment('<title>My Title</title><p>content</p>')).toBe('<p>content</p>');
    expect(structureHtmlFragment('<TITLE>Another Title</TITLE><p>content</p>')).toBe('<p>content</p>');
  });

  it('strips style tags and their contents', () => {
    expect(structureHtmlFragment('<style>body { color: red; }</style><p>content</p>')).toBe('<p>content</p>');
    expect(structureHtmlFragment('<style type="text/css">\n.foo { display: none; }\n</style><p>content</p>')).toBe('<p>content</p>');
  });

  it('strips script tags and their contents', () => {
    expect(structureHtmlFragment('<script>alert("hello");</script><p>content</p>')).toBe('<p>content</p>');
    expect(structureHtmlFragment('<script type="text/javascript" src="app.js"></script><p>content</p>')).toBe('<p>content</p>');
  });
});

describe('structureHtmlFragment header conversions', () => {
  it('converts h1 tags to h2', () => {
    expect(structureHtmlFragment('<h1>Main Title</h1>')).toBe('<h2>Main Title</h2>');
    expect(structureHtmlFragment('<h1 class="header">Main Title</h1>')).toBe('<h2 class="header">Main Title</h2>');
  });

  it('converts markdown headers to HTML headers', () => {
    expect(structureHtmlFragment('#### Heading 4')).toBe('<h3>Heading 4</h3>');
    expect(structureHtmlFragment('### Heading 3')).toBe('<h3>Heading 3</h3>');
    expect(structureHtmlFragment('## Heading 2')).toBe('<h2>Heading 2</h2>');
    expect(structureHtmlFragment('# Heading 1')).toBe('<h2>Heading 1</h2>');
  });

  it('converts markdown headers with surrounding text', () => {
    // Note: The raw markdown processing wraps non-tag lines in <p> and empty lines are handled.
    // We test the markdown replacement itself.
    expect(structureHtmlFragment('Text\n## Subtitle\nMore text')).toBe('Text\n<h2>Subtitle</h2>\nMore text');
  });
});

describe('structureHtmlFragment structured HTML logic', () => {
  it('removes <p> wrapping block elements', () => {
    expect(structureHtmlFragment('<p><ul><li>item</li></ul></p>')).toBe('<ul><li>item</li></ul>');
    expect(structureHtmlFragment('<p><h2>Header</h2></p>')).toBe('<h2>Header</h2>');
    expect(structureHtmlFragment('<p>\n  <div>Content</div>\n</p>')).toBe('<div>Content</div>');
  });

  it('auto-bolds Topic patterns within <p> or <li> (unless http/www)', () => {
    // Topic: followed by space
    expect(structureHtmlFragment('<p>Feature Name: description goes here</p>')).toBe('<p><strong>Feature Name:</strong> description goes here</p>');
    expect(structureHtmlFragment('<li>Key Benefit: awesome</li>')).toBe('<li><strong>Key Benefit:</strong> awesome</li>');

    // Does not bold http/www
    expect(structureHtmlFragment('<p>http://example.com: 80</p>')).toBe('<p>http://example.com: 80</p>');
    expect(structureHtmlFragment('<p>WWW.SITE.COM: 443</p>')).toBe('<p>WWW.SITE.COM: 443</p>');

    // Already bolded
    expect(structureHtmlFragment('<p><strong>Already Bold:</strong> text</p>')).toBe('<p><strong>Already Bold:</strong> text</p>');
  });

  it('converts consecutive <h2> tags to <h3>', () => {
    expect(structureHtmlFragment('<h2>First</h2>\n<h2>Second</h2>')).toBe('<h2>First</h2>\n<h3>Second</h3>');
    expect(structureHtmlFragment('<h2>First</h2><h2>Second</h2><h2>Third</h2>')).toBe('<h2>First</h2><h3>Second</h3><h2>Third</h2>');
  });

  it('removes empty tags', () => {
    expect(structureHtmlFragment('<p></p>')).toBe('');
    expect(structureHtmlFragment('<p>  </p>')).toBe('');
    expect(structureHtmlFragment('<h2></h2>')).toBe('');
    expect(structureHtmlFragment('<h3></h3>')).toBe('');
    expect(structureHtmlFragment('<ul></ul>')).toBe('');
    expect(structureHtmlFragment('<ol></ol>')).toBe('');
  });
});

describe('structureHtmlFragment unstructured text logic', () => {
  it('converts <br> to newlines', () => {
    expect(structureHtmlFragment('Line 1.<br>Line 2.<br/>Line 3.<br />Line 4.')).toBe('<p>Line 1.</p>\n\n<p>Line 2.</p>\n\n<p>Line 3.</p>\n\n<p>Line 4.</p>');
  });

  it('builds lists from explicit bullets', () => {
    expect(structureHtmlFragment('- Item 1\n* Item 2\n• Item 3')).toBe('<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n  <li>Item 3</li>\n</ul>');
  });

  it('builds lists and auto-bolds feature topics in bullets', () => {
    // Note: If the line starts with a feature topic, it builds a list even without bullet
    expect(structureHtmlFragment('Topic One: Description of topic one is long enough\nAnother Topic: Description of another topic is also long enough')).toBe('<ul>\n  <li><strong>Topic One:</strong> Description of topic one is long enough</li>\n  <li><strong>Another Topic:</strong> Description of another topic is also long enough</li>\n</ul>');
  });

  it('converts major section headings to h2', () => {
    expect(structureHtmlFragment('Part 1\nOverview:\nKey Features')).toBe('<h2>Part 1</h2>\n\n<h3>Overview:</h3>\n\n<h2>Key Features</h2>');
  });

  it('converts short sub-headings to h2 (or h3 if h2 exists)', () => {
    // First short string with no ending punctuation becomes h2
    expect(structureHtmlFragment('Short Heading\nAnother Short Heading')).toBe('<h2>Short Heading</h2>\n\n<h3>Another Short Heading</h3>');
  });

  it('wraps regular lines in <p> and auto-bolds Topic patterns', () => {
    expect(structureHtmlFragment('This is a regular sentence.\nHere is another one.')).toBe('<p>This is a regular sentence.</p>\n\n<p>Here is another one.</p>');
    expect(structureHtmlFragment('My Feature: this is a regular line that gets bolded because it has a topic. But it has ending punctuation so it is not a sub-heading.')).toBe('<p><strong>My Feature:</strong> this is a regular line that gets bolded because it has a topic. But it has ending punctuation so it is not a sub-heading.</p>');
  });
});
