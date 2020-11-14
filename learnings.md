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

## Improving the rendering for Icon

Currently, this is what I have: 

```js
<StyledSocialList>
  <li>
    <a href="https://github.com/tOlheiser" aria-label="Github">
      <Icon name="GitHub" />
    </a>
  </li>
  <li>
    <a href="https://www.linkedin.com/in/tanner-olheiser/" aria-label="Linkedin">
      <Icon name="Linkedin" />
    </a>
  </li>
  <li>
    <a href="https://codepen.io/tolheiser" aria-label="Codepen">
      <Icon name="Codepen" />
    </a>
  </li>
  <li>
    <a href="https://twitter.com/OlheiserSK" aria-label="Twitter">
      <Icon name="Twitter" />
    </a>
  </li>
</StyledSocialList>
```

Instead of rendering each list item manually, I'd like to map these out. If I add/remove/modifty social media icons I don't want to have to do it manually in this long format.

### Change 1: Added a config.js file

In this file, I'll store an array of objects that contain data about my social media icons. I'll map over this array to get the data.

```js 
// config.js

export const socialMedia = [
  {
    platform: "GitHub",
    address: "https://github.com/tOlheiser"
  },
  {
    platform: "Linkedin",
    address: "https://www.linkedin.com/in/tanner-olheiser/"
  },
  {
    platform: "Codepen",
    address: "https://codepen.io/tolheiser"
  },
  {
    platform: "Twitter",
    address: "https://twitter.com/OlheiserSK"
  }
]
```

### Change 2: Mapping over the array 

```js
// social.js

// Because socialMedia is a named import, you have to put curly braces around it. If it was a defualt import, you wouldn't need them.
import {socialMedia} from '../content/config';

// ...

const Social = () => (
  <Sidebar position="left">
    <StyledSocialList>
    {/* if socialMedia is true/has data, map over it */}
    {/* Destructure the platform and address variables */}
      {socialMedia && socialMedia.map(({platform, address}, i) => (
        <li key={i}>
          <a href={address} aria-label={platform}>
            <Icon name={platform}/>
          </a>
        </li>
      ))}
      
    </StyledSocialList>
  </Sidebar>
)
```

## Responsive Typography
1. Work with REMs. It makes life easier. I didn't start with rem, and when I went back to change this, it was pretty tedious.
2. You only really need to make the headings responsive. You wouldn't scale down paragraph text generally. It's at the desired size on desktop & mobile.
Tip: Given this: 'clamp(3rem, 6vw, 5.4rem)' - 3rem is the minimum, 5.4rem is the maximum. The middle value (6vw) is tuned to define how early/late the size of the text changes when you scale down the screen.

## Issue: Overflow
I noticed that, despite having overflow-x hidden, my page would still have an extra little bit of width, it would just be hidden. Giving my page containers 100vw caused this issue. Giving the containers a width of 100vw is unnecessary when it already takes up to space of the parent element (body), which has a width of 100%.

## Importing PDFs
Something that was giving me far too much trouble was importing my pdf into my site, then linking to it. 

Fix: In the javascript file you want to use, you want to import the pdf you'd like to use:
```js
import resume from "../../public/static/resume.pdf"
```

Then in the href source:
```js
<a href={resume}>View Resume</a>
```

Having the patience reading the docs would have saved me some time... whereas instead I chose to jump right to google.

*"With webpack you can import a file right in a JavaScript module. This tells webpack to include that file in the bundle. Unlike CSS imports, importing a file gives you a string value. This imported file’s value is the final path you can reference in your code, e.g. as the src attribute of an image or the href of a link to a PDF."*

## CSS Properties to Play With for Responsive Design

**MIN()** - Chooses the smallest of the two values.
*width: min(500px, 70%)*
**MAX()** - Opposite of min (biggest of the two values).
*Better alternative to using two lines to write width & max-width.*
**CLAMP()** - min size, ideal size, max size
*Typically you'd use an absolute min or max size (px, em, rem, etc), and then place a width the portion of the container or viewport in the middle. The makes it scale.*
**ch** - character width. you can apply this to the width of a paragraph element so you don't get lengths that are too long/short

Note: Do NOT use viewport units for font sizes. It's bad for usability because if the user tries to magnify the content, the text won't scale. 