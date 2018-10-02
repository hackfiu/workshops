# UPE WebDev Workshop - Portfolio

```
     _______     _______       ___________________       __________________
    /       \   /       \     /                   \     /                  \
    |       |   |       |     |                   |     |                  |
    \__     |   |     __/     \_       ___       _/     \_       ______    |
       \    |   |    /          |     |   |     |         |     |      \___/
        \    \_/    /           |     |   |     |         |      \___
         \         /            |     |   |     |         |          \
          \       /             |     |   |     |         |      ____/
           |     |              |     |   |     |         |     |      ____
           |     |             _|     |   |     |_       /      |_____/    \
          /       \           /       |   |       \     /                  |
          |       |           |       /   |       /     |                  |
          \_______/           \______/    \______/      \__________________/
```

In this repository are the final resources from the end of session 1 
of the WebDev workshop. During the workshop we went over the following:

- What is a website?
- What is HTML?
- Types of HTML tags
    - `<html>`
    - `<link>`
    - `<img>`
    - `<br>`
    - `<span>`
    - `<h1>`
    - `<div>`
    - `<p>`
- What is CSS?
- Types of CSS selectors
    - `.class`
    - `#id`
    - `+`
- CSS Properties
    - `width:`
    - `vh/vw` Units
    - `margin-left:`
    
###Changelog
**February 3, 2017**
- Added `<meta name="viewport" content="width=device-width, initial-scale=1">` to document head
- Added Lorem Ipsum text to text areas
- Added a `.list` class to all `<ul>` tags used in `.page`s to better semantically define those tags
- Wrapped all `<img>` tags inside of `.list`with `<div class="image"></div>` for better styling application

**January 30, 2017**
- Added background.jpg to the img folder
- Added `<div class="background spacer"></div>` to the `#hero` section to account for future CSS styling

**January 29, 2017**
- Images have been added to the img folder
- Images in the html now point to actual images stored in the
  img folder
- A resource folder was added with a [file](resources/places-to-learn-more.md) containing links to extra resources
- Changed the css for the `.page` width to `calc(100% - 30vw)` instead of `30vw`
