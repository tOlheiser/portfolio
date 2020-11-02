# Things I've Learned

My site is inspired by Brittany Chiang's portfolio site. Yes, I could fork her repo, but I'm rusty. I want firsthand experience with Gatsby, React Hooks, and Styled Components. Also, I feel that the best way to get better at coding is practice. This practice will give me a lot of momentum when I move onto other projects in my opinion.

## October 4th, 2020 - At a crossroads. CSS Modules or Styled Components?
In developing my portfolio site, I was VERY rusty with React to begin with, have no familiarity with Gatsby.js, and this is also my first time working with Hooks. 

**Stumbling Block #1: CSS Modules feel... clunky.** I've noticed that requiring a CSS file to style one or two elements felt cumbersome when this is something you find yourself doing often. When I first learned of Styled Components, it looked VERY strange. But after reading about it more and more, it's something I'd like to try.

## Googlings
**Q: How do I import something with a different name?***Makes my code more readable.*
**Solution:** Inside curly braces, enter the name of the module followed by 'as' and your preferred alias.
**Source:** https://stackoverflow.com/questions/39282253/how-can-i-alias-a-default-import-in-javascript
```javascript 
import { foo as bar } from 'my-module';
```

## Look Into:
* Themeing using Style Components
* Using context to pass styles down

## Working Efficiently

It's tough to assess what needs to be done, when, in what order, etc.

**Scenario: I just completed my basic nav**

**Things I still have left to do on the nav:**
* *General Styling* - Style my hamburger menu & links. *Coming back to this later, as the hamburger menu may cause bugs elsewhere*
* *Polish Positioning* - Polish the positioning of my Desktop nav elements (vertically centered)
* *Interactivity* - Add a hover effect to my logo
* *Interactivity* - Add a hover effect to my links
* *Interactivity* - Reveal nav when scrolling up
* *Interactivity* - Animate elements on-load

Completing all my features on the Nav, then moving onto the next section where I complete all the features, and so on feels tedious. 

**Solution:** I'll do 'broad strokes'.

### Workflow: Complete #1 on each section before moving on to #2, and so on.
1. Get the content on the page for all views with some general styling.
2. Polish the positioning & breakpoints.
3. Bring your page to life with interactivity. Scrolling animations, animations on-load, click & hover events, etc.

## Conditionally Positioning Elements

I came to a crossroads where I needed to position something, either 'left: 40px', or 'right: 40px'. If right was 40px, what do I make left's value? If you just use 'auto', that won't mess up your positioning when you specify the right value.

## First major hijinks working with Styled Components

For some odd reason, I assumed that styled components would inheret whatever props the parent component had.

```js
const Side = ({orientation}) => (
  <StyleDiv position={orientation}
)

// props need to be passed into styled components for them to be used.
```

