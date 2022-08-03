## What is React.useMemo?

- This is a built-in hook in React.
- It allows users to memoize expensive functions.

- From Wikipedia: Memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again

- This hook accepts 2 arguments: 
   ** A callback function ** - That computes a result
   ** Dependency array ** - Array of variables whose change causes rerendering

- const memoizedResult = useMemo(callbackfunction, dependencyarray)
- const memoizedResult = useMemo(() => expensiveFunction(parameters), [dependencies])

- During the initial rendering, the callback function is invoked, the calculated result memoized and a component is returned(rendering)

- Here is the catch;
*** -- If the dependencies do not change, the callback function is not invoked, instead, the memoized values is returned. ***
*** -- If the dependencies change, the callback function is invoked, the calculated result memoized and the component is rerendered. ***


- Therefore, the example included on this repo works as follows:
Everytime you change the input of the factorialOf function, the factorial of the parameter provided is calculated and  factorialOf(n) is logged to console. However, after clicking the re-render button, factorialOf(n) isn't logged becaused useMemo(() => factorialOf(number), [number]); returns the factorial calculated value.

###### Note: When memoization is used inpappropriately, it can harm performance.