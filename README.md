# ReactJS Basics

**Implementing CSS in React
There are many ways to import css, styling in React one common way is to 
```
import './App.css'

return (
    <div classNam="name"></div>
)
```

Another way is import it as a module and call the 'App.className'
```
import styles from './App.module.css'

return (
    <div classNam={styles.name}></div>
)
```

**Ternary Operators

```
age >= 18 ? console.log("Over Age") : console("Under Age");
{isGreen && <h1>It's Green</h1> : <h1>It's not Green</h1>}
```

**Conditional Rendering in React
We can use Ternary Operators in Javascript to do Conditional Rendering in React

```
<h1 style={{color: isGreen ? "green" : "red"}}>Text Color</h1>
```

**Working with Lists
Why???

✅ : To avoid getting a warning is React, we need to put a key prop inside any looped child. 
Warning: Each child in a list should have a unique “key” prop.
✅ : React can keep track of each of component even if their position or data changes.

!!JSX elements directly inside a map() call always need keys!
!!It is so your component remembers data unit with an unique name in its lifecycle.

Imagine that files on your desktop didn’t have names. Instead, you’d refer to them by their order — the first file, the second file, and so on. You could get used to it, but once you delete a file, it would get confusing. The second file would become the first file, the third file would be the second file, and so on.

File names in a folder and JSX keys in an array serve a similar purpose. They let us uniquely identify an item between its siblings. A well-chosen key provides more information than the position within the array. Even if the position changes due to reordering, the key lets React identify the item throughout its lifetime.

**State in React
What is State? 
: State is a built-in React object that is used to contain data or information about a component. Whenever the state of a component changes, component re-renders.

How is State different from the Props?
You can explain the difference between State and Props in 4 main factors.
1) Use Case : States are used to store the data of a component whereas the Props are used to pass them one another. 
2) Mutability : States are mutable whereas the Props are not. 
3) Component : States are used in Class component, whereas Props can be used in both Functional/ Class components
4) Updation : Event handlers can update states. Props are set by the parent component. 


. React LifeCycle
: mounting, updating, unmounting.

. useEffect
useEffect Hook is a hook that is used to control what happens depending on which stage of the lifecycle it is. 
**useEffect lets you synchronize a component with an external system.

. what does <React.StrictMode> do?
React.StrictMode highlights potential issues in a programme. It works encapsulating a portion of your full application as a component. **In Strict Mode, React double invokes render methods in order to flush out potential side effects.

. fetch Data from API

. React Router DOM
an external library 

. State Management in React
Prop Drilling ? : is the process of passing data from one component via several interconnected components to the component that needs it. 

. React Query
: a powerful library for managing data in React
React Query is a data-fetching library that helps with fetching, caching, synchronising, and updating the server state in your react application.

. What is Axios?
Axios is a popular HTTP client for making API requests in JavaScript applications. 

*Combining React Query with Axios, we can create a robust data management solution that is easy to use and maintain.

. How to Form right in React
: Using Library such as Yup, yupResolver, and useForm in react-hook-form.