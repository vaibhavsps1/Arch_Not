import {hoc1, hoc2, hoc3, hoc4, hoc5, hoc6, hoc7, hoc8, hoc9} from './images';

export const HOCdata = [
  {
    title: 'introduction',
    description1: `
    - In app, we often need to reuse the same logic in multiple components. 
    - This logic can include applying a certain styling to components, requiring authorization, or adding a global state.
    - To achieve this, we can use two patterns:
        1. Higher Order Component (HOC) pattern
        2. Render Props pattern
    `,
    description2: `
    - Both patterns allow us to reuse component logic throughout our application.

    - Both patterns have their own advantages and disadvantages, and choosing one over the other depends on the specific use case. However, both patterns are powerful tools for creating reusable components in React applications.`,
  },
  {
    title: 'Quick overview of two patterns',
    description: `
    - Let's understand what those two patterns with a very simple code example & later in this article we will see in details of each pattern with complex examples.
        1. Higher Order Component (HOC) pattern
        2. Render Props pattern
    `,
  },
  {
    title: 'Higher order component (HOC)',
    description: `HOC pattern is a way of reusing component logic by wrapping a component with a higher-order function. This function takes in a component as an argument and returns a new component with additional functionality. The new component can then be used in place of the original component.
    
    - Here are some codes for basic understanding HOC.
    - In the Below code ParentElement is the HOC component.
    `,
    image: hoc1,
  },
  {
    title: 'Render Props Pattern',
    description: `- Pass JSX elements to components through props.
- The Render Props pattern is another way of reusing component logic. It involves passing a function as a prop to a component. This function returns an element that the component can render. The function can also pass additional data to the element.

Props rendering occurred by props.ChildComponentOne & props.ChildComponentTwo.
`,
    image: hoc2,
  },
  {
    title: 'Another way of Props rendering (by children as function)',
    description: `- Besides regular JSX components, we can pass functions as children to React components. This function is available to us through the children prop, which is technically also a render prop.
    - In the above code props.children(stateValue) created props rendering.
    `,
    image: hoc3,
  },
  {
    title: 'HOC',
    description: `A Higher Order Component (HOC) is a component that receives another component. The HOC contains certain logic that we want to apply to the component that we pass as a parameter. After applying that logic, the HOC returns the element with the additional logic.`,
    description1: `We always wanted to add a certain styling to multiple components in our application. Instead of creating a style object locally each time, we can simply create a HOC that adds the style objects to the component that we pass to it.`,
    image: hoc4,
  },
  {
    title: null,
    description: `We just created a StyledButton and StyledText component, which are the modified versions of the Button and Text component. They now both contain the style that got added in the withStyles HOC!
    
    - Let’s create a HOC called withLoader. A HOC should receive an component, and return that component. In this case, the withLoader HOC should receive the element which should display Loading… until the data is fetched.

    - Let’s create the bare minimum version of the withLoader HOC that we want to use!
    `,
    image: hoc5,
  },
  {
    title: null,
    description: `function withLoader(Element) {
    return (props) => <Element />;
=}   

    - We want this element to contain logic that tells us whether the data is still loading or not.
    
    - A HOC returns an element, a functional component props => {} in this case, to which we want to add the logic that allows us to display a text with Loading… as the data is still being fetched. Once the data has been fetched, the component should pass the fetched data as a prop.

    - The Higher Order Component pattern allows us to provide the same logic to multiple components, while keeping all the logic in one single place. The withLoader HOC doesn't care about the component or URL it receives as long as it's a valid component and a valid API endpoint, it'll simply pass the data from that API endpoint to the component that we pass.

    1. In the useEffect hook, the withLoader HOC fetches the data from the API endpoint that we pass as the value of url. While the data hasn't returned yet, we return the element containing the Loading... text.

    2. Once the data has been fetched, we set data equal to the data that has been fetched. Since data is no longer null, we can display the element that we passed to the HOC!
    
    We no longer want to just export the plain DogImages component. Instead, we want to export the "wrapped" withLoading HOC around the DogImages component.

    export default withLoader(DogImages,
  "https://dog.ceo/api/breed/labrador/images/random/6");

  - The Higher Order Component pattern allows us to provide the same logic to multiple components, while keeping all the logic in one single place. The withLoader HOC doesn't care about the component or URL it receives as long as it's a valid component and a valid API endpoint, it'll simply pass the data from that API endpoint to the component that we pass.
    `,
    image: hoc6,
  },
  {
    title: `Making of Compose multiple HOC component`,
    description: `We can also compose multiple Higher Order Components. Let's say that we also want to add functionality that shows a Hovering! text box when the user hovers over the DogImages list.
We need to create a HOC that provides a hovering prop to the element that we pass. Based on that prop, we can conditionally render the text box based on whether the user is hovering over the DogImages list.
A well-known library used for composing HOCs is recompose. Since HOCs can largely be replaced by React Hooks, the recompose library is no longer maintained`,
    image: hoc7,
  },
  {
    title: null,
    description: `We can replace the HOC pattern with React Hooks.
    
Instead of having a higher order component, we export a hook that adds a mouseOver and mouseLeave event listener to the element. We cannot pass the element anymore like we did with the HOC. Instead, we'll return a ref from the hook for that should get the mouseOver and mouseLeave events.

    The useEffect hook adds an event listener to the component, and sets the value hovering to true or false, depending on whether the user is currently hovering over the element. Both the ref and hovering values need to be returned from the hook: ref to add a ref to the component that should receive the mouseOver and mouseLeave events, and hovering in order to be able to conditionally render the Hovering! text box.

    Instead of wrapping the DogImages component with the withHover HOC, we can use the useHover hook right inside the DogImages component.

Instead of wrapping the DogImages component with the withHover component, we can simply use the useHover hook within the component directly.`,
    image: hoc8,
  },
  {
    title: ``,
    description: `Generally speaking, React Hooks don't replace the HOC pattern.
    In most cases, Hooks will be sufficient and can help reduce nesting in your tree.
    As the React docs tell us, using Hooks can reduce the depth of the component tree. Using the HOC pattern, it’s easy to end up with a deeply nested component tree.
    
    By adding a Hook to the component directly, we no longer have to wrap components.

Using Higher Order Components makes it possible to provide the same logic to many components, while keeping that logic all in one single place. Hooks allow us to add custom behaviour from within the component, which could potentially increase the risk of introducing bugs compared to the HOC pattern if multiple components rely on this behaviour.

🔥 Best use-cases for a HOC:
- The same, un customized behaviour needs to be used by many components throughout the application.
- The component can work standalone, without the added custom logic.
    
🔥 Best use-cases for Hooks:
- The behaviour has to be customized for each component that uses it.
- The behaviour is not spread throughout the application, only one or a few components use the behaviour.
- The behaviour adds many properties to the component.
`,
    image: hoc9,
  },
  {
    title: `When custom Hooks are better than HOC?`,
    description: ``,
    image: hoc9,
  },
];
