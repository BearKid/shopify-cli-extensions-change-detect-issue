export function HorizontalScrollBoxBug() {
  return (
    <s-scroll-box id="my-scroll-box">
      <s-box
        id="my-very-wide-box"
        border="base base solid"
        minInlineSize="1000px"
      >
        <s-paragraph>
          You should failed to see the right border of the `s-box` in a narrow
          browser window. Please see the readme.md file for more details.
        </s-paragraph>
      </s-box>
    </s-scroll-box>
  );
}
