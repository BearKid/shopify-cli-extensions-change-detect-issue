import "@shopify/ui-extensions/preact";
import { render } from "preact";
import { HorizontalScrollBoxBug } from "./bug_horizontal_scroll_box/HorizontalScrollBoxBug.jsx";

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <HorizontalScrollBoxBug />
  );
}