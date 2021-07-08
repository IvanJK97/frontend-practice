# List of questions that can expand and shrink by clicking on icon (similar to accordion component)

- Following the design from seventh project of https://www.youtube.com/watch?v=3PHXvlpOkf4
  - Difference is this accordion can have multiple questions open at once instead of just one

# Lessons and challenges

- Added rotation animation for icon on hover with `transform: rotate` and `transition-duration`
- Created a bit of animation when expanding and shrinking using the `transition` property on height. Have to calculate dynamic height of elements within answer because height: auto doesn't work, and it needed an actual height value.
  - Find height of elements with offsetHeight individually, but also have to add margin to set height
  - Shrink by setting height to 0 and overflow of hidden
- Use `!important` for display to override previous properties
