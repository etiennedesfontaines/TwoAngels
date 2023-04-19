# TwoAngels

## To do:

- Site still slow, namely the image loading.

  - Uncertain how to optimise further?
  - webP images?
  - Removing gradients from code and applying directly to images.
  - Using Webpack to launch site?

- check responsiveness.
- Issue with responsiveness: Small laptops and low res screens are reading as tablet.
  I think I may need to restyle mobile first. (enormous amount of work).
  Or find a fix using device detection.
- hamburger functionality compromised on 13 inch 2019 macbook - I believe it is due to a hover state triggering in movbile styling, but the issue isn't replecating on other laptops that have mobile styling applied.
  The issue is that the suits and cottages tab of the hamburger menu isn't clickable, so the --open class is not being applied.

- Refactor

  - Readme
  - Design

- Other:

  - sitemap (XML)
  - Security

- Configuring external dns for a custom domain.
- configuring and apx domain.
- data submission handling
- creating and sending transactional emails (api call to email client).
- async await
- SEO
- semantic html
- image optimisation, lazy loading etc
- jquery libraries for touch swipe functionality
- creating package.json file
- Installing and using node packages

## Issues - GitHub:

- mobile book now button, invisible after use.
- responsiveness for smaller mobile phones
- TabIndex for all nav items?
- Able to swipe carousels even when using desktop.
- Create componenets for reusable elements (time permitting)
- Add variable for 6.4 rem - change other variables so it makes sense in size order and name.
- folder for HTML files and reroute all necessary file paths?
- Seperate @media query style into appropriate style sheets.
- CSS mixins and variables to reduce any unecessary repetition.
- Cards: Device identification to allow JS to better understand whether it needs to populate mobile or desktop card, even when devices are in a landscapte orientation.
- Refactor carousel logic repetition
- Using text-shadow for bold hover state in Nav bar, would prefer to use bold and implement a solution to prevent layout shift. The solutions I tried weren't working and I couldn't afford to allocate more time to this at this point.
- homePage.js and hamburgerMenu.js both have temporary solutions for isMobile. Implement a more effective device detection method/ utilise an appropriate library.
- card population for mobile and desktop both require the page is reloaded to register whether or not it is mobile, consider putting this in a function that allows detection without page reload.

## Questions:

- Do all units include a TV?

## Table of contents

- [Overview](#overview)
- [Solutions links](#links)
- [Author](#etienne-desfontaines)

## Overview

Write a project overview

## Website Link

## Etienne Desfontaines

- Frontend Mentor - [@etiennedesfontaines](https://www.frontendmentor.io/profile/etiennedesfontaines)

- Exercism - [Etienne Desfontaines](https://exercism.io/profiles/etiennedesfontaines)
