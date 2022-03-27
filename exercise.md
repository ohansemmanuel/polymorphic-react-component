# 1. Build your own Polymorphic component

This exercise will test your understanding of the core concepts in the class.

You will build a `Border` polymorphic React component.

Here is the basic usage of the component:

```jsx
export const UserComponent = () => {
  return (
    <Border as="blockquote" color="blue" width={4} variant="solid">
      You only truly learn by practicing
    </Border>
  );
};
```

The Border component renders a styled border around whatever the children node is.

<br />

![https://i.imgur.com/qBqR3la.png](https://i.imgur.com/qBqR3la.png)

<br />

## Requirements:

1. The component must accept a polymorphic `as` prop
2. The component must render the passed in `as` element type
3. The component should support its own props e.g., `color`, `width` and `variant`. Where `color` is any valid `color` string, and `width` a number that defines the width of the border and `variant` the style of the border. See the valid CSS border styles on [W3schools](https://www.w3schools.com/css/css_border.asp)
4. Using typescript, the component should display a type error during development if an invalid element type is passed
5. Using typescript, the component should display a type error if wrong attributes are passed for valid element types
6. Using typescript, the component should display a type error if wrong refs are passed to the component

# 2. Extend the polymorphic utility type to take in a user defined name e.g., 'as' or 'component' or 'what-a-user-wants'

The reusable utility built in the class assumes the user defined polymorphic prop is always `as`. Create your own version of a reusable utility that lets a user use any string they want as the polymorphic prop e.g., `as`, `component`, or `whatever`.
