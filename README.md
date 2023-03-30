# TwoAngels

- Optimise images - check speed
- Mobile is even slower than desktop:
  - I think one of the main issues is that image size has not been specified
    So the page is not making space for the image before the inital paint,
    and the calculation of the size is what is causing the slow response
  - The other issue is likely that the images are all sized for desktop, so
    it will likely be a good optimisation to create a device detection function and serve different sized images depending on the device.
- data submission handling
  - Data is being successfully submitted to netlify, I'm just uncertain how to get it from there to my Fathers email address...
- Changing Domain Name (How to get current site deployed at TwoAngels.co.za)
  - How is the domain served?

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

## To do:

- Copy writing:

  - bedrooms (luxury and family suites)
  - Activities:
    - home page teaser
    - each activity option on activities page.
    - https://www.sanparks.org/parks/garden_route/tourism/activities/hiking_nature_walks.php

- Styling:
- Home page accomodation thumbnails.
- check responsiveness.

- Refactor

  - code base
  - Readme

- Deployment and hosting:
- Netlify Docs
- Design

- Other:
  - Privacy policy page
  - sitemap (XML)
  - Security

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
