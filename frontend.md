## React Assignment

1. How can you implement shared functionality across a component tree?
solution - To achieve shared functionality across the widget tree in React, you can use the theming API, custom hooks, or advanced components, each of which is suitable for different situations. The Content API lets you create content that holds shared values ​​or functions and makes them available to all elements in the tree, making it ideal for global state management or theming. Custom hooks support code reuse and modularization by helping you encapsulate reusable logic and state behavior in a way that can be used by a component. Higher-order components (HOCs) provide an option to wrap components with additional functionality and pass in props, which can help enhance existing components with shared functionality. These concepts provide a flexible solution for shared functionality by allowing devices to access and use certain behaviors or states without having to call back.

2. Why is the `useState` hook appropriate for handling state in a complex component?
solution - The useState hook is ideal for managing state in complex components because it simplifies and modularizes state management in functional components. useState allows developers to manage multiple states independently using a simple API, improving code readability and maintainability. This interface encapsulates state management in objects and provides a clean way to change state without the boilerplate code required in object classes. useState also supports update functionality, which is useful for handling state changes that depend on previous values ​​or asynchronous operations. It also integrates with other hooks such as useEffect to facilitate synchronization of state and effects. Overall, useState simplifies the process of maintaining state in complex components, making it easier to use and manage dynamic and interactive functions in functional React components.

3. Design a user interface resembling the provided page. Fetch the data from the server and dynamically map the information cards to the fetched data. Ensure that the search functionality is also implemented.

![Logo](UI-Screen-1.png)
