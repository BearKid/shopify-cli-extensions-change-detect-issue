import '@shopify/ui-extensions/preact';
import {render} from "preact";

export default async () => {
  render(<Extension />, document.body)
}

function Extension() {
  return (
    <s-banner>
      <s-text>
        Hello Page 3
      </s-text>
    </s-banner>
  );
}