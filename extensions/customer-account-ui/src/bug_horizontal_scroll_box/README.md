## Bug

Horizontal `ScrollBox` on the Customer Account page does not work — content that is wider than the viewport should be horizontally scrollable but is not.

## Environment / Reproduction
- The extension's target is `customer-account.page.render`
- **Viewport width during test**: 414 px  
- **Page extension root**: `s-scroll-box` (`id="my-scroll-box"`)  
- **Child of `s-scroll-box`**: `s-box` (`id="my-very-wide-box"`) with `minInlineSize="1000px"` to simulate wide content  
- **In Customer Account UI**: the scroll box has two ancestor wrappers (`wrapper A` and `wrapper B`) with widths 414 px and 1024 px respectively. These wrappers are not controllable by extension developers.  
  - See attached screenshot: `customer-account-ui-extension-scrollbox-issue.png`.

## Expected vs Actual

- **Expected**: `wrapper B` should follow `wrapper A`’s width so that the `ScrollBox` is constrained and can show a horizontal scrollbar.  
- **Actual**: `wrapper B` expands to fit its descendant content width (same for `my-scroll-box`), so no horizontal scrollbar appears. Setting `min-inline-size` or `inline-size` to `100%` on the scroll box has no effect.

## Scope

The same behavior occurs on a production store using React UI extensions (`ScrollBox` used to work there; the issue appeared recently). So this is not limited to the dev store with Preact + Polaris Web Components.

## Conclusion

This is likely caused by a recent layout/style change in how Shopify renders Customer Account UI for all stores, which indirectly breaks horizontal scrolling for `ScrollBox`.

## Extra note

If you set `s-box` (`id="my-very-wide-box"`) with `minInlineSize="1500px"` instead of `"1000px"`, you will always see a scrollbar in both wide and narrow windows, but you still cannot see the full scrollbar and the box’s right border in a narrow window.  

- See the second attached screenshot: `customer-account-ui-extension-scrollbox-issue2.png`.

