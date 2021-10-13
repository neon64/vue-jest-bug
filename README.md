# A weird bug with Vue-Jest

To reproduce, install all deps:

```
npm install
```

And then run the unit test

```
npm run test:unit
```

Observe that one test fails, the other works. The only difference between the two components is the presence of a comment,

    // vue-class-component


Why should a comment affect the actual code, it's just a comment after all, right?

I haven't looked too much into why this is an issue, but I suspect this line of code could be to blame: https://github.com/vuejs/vue-jest/blob/master/packages/vue3-jest/lib/generate-code.js#L35

## How was this found?

This is a much simplified version of a real component I have been working on for a private project. It took quite a few hours of pulling my hair out to realise that after trying everything, the presence of a *comment* was the real issue!!