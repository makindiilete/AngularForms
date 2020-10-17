/*
Now we have learnt that we can use ngOnChanges to do the same thing we did with getters and setters so the question is which should you use?
NOTE : - You first need to be aware that ngOnChanges work only with child component..

1)  If you have only one prop (one input property) you want to track, you should use getter and setter but if you have many props passed to the component that you want to keep track of, it is preferred to use ngOnChanges because that we you will have less line of code, using getters and setters to manage many props, you will need to create different getter and setter for each props, that will be a total of 10 getters and 10 setters for 10 props, this way it is advisable to use ngOnChanges bcos from only a single hook, we can keep track of all the props changes and the hook give us access to the (previous value, current value, first change).

2)  Because the life cycle hook give us access to the 'firstChange' property, we can take advantage of that to execute a logic only the first time the value of a prop changes
*/
