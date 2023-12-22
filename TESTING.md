# Testing

Return back to the [README.md](README.md) file.

I've tested every aspect of the project to ensure a good user experience.
- Key testing areas include:
  - Responsive Design.
  - HTML Structure.
  - CSS Styling.
  - JS Structure.
  - Browser Compatibility.
  - Performance.
  - Usability and Accessibility.

After testing, including responsiveness checks, HTML/CSS structure validation, and usability assessments, I am confident that the CSS/HTML project functions seamlessly.

## Code Validation

### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

| Page | W3C URL | Screenshot | Notes |
| --- | --- | --- | --- |
| Home | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjesperba01.github.io%2FProject-2%2Findex.html) | ![screenshot](assets/documentation/testing/htmltest2.png) | No Errors |

### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.

| File | Jigsaw URL | Screenshot | Notes |
| --- | --- | --- | --- |
| style.css | [Jigsaw](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fjesperba01.github.io%2FProject-2) | ![screenshot](assets/documentation/testing/csstest.png) | Pass: No Errors |

### JavaScript

I have used the recommended [JShint Validator](https://jshint.com) to validate all of my JS files.

| File | Screenshot | Notes |
| --- | --- | --- |
| script.js | ![screenshot](assets/documentation/testing/jstest.png) | No Errors |

## Browser Compatibility

| Browser | Home | Notes |
| --- | --- | --- |
| Chrome | ![screenshot](assets/documentation/browsers/chrome.png) | Works as expected |
| Edge | ![screenshot](assets/documentation/browsers/edge.png) | Works as expected |
| Safari (Mobil edition)| ![screenshot](assets/documentation/browsers/safari.png) | Works as expected |

## Responsiveness

I've tested my deployed project on multiple devices to check for responsiveness issues.
to make it easier and test my desired devices at the same time i've used a chrome extension calle Responsive viewer that yoou can download here
[Responsive viewer](https://chromewebstore.google.com/detail/responsive-viewer/inmopeiepgfljkpkidclfgbgbmfcennb)
and another chrome extension called GoFullPage that you can fin here [GoFullPage](https://chromewebstore.google.com/detail/gofullpage-full-page-scre/fdpohaocaechififmbbbbbknoalclacl)

Tested devices: Iphone 8, 7, plus 7, plus 6s, plus | Galaxy S9, Note 8, S8 | Ipad(standard) | Nexus 10 | Desktop | Ipad mini | Ipad pro | laptop 1/2 |

![screenshit](assets/documentation/responsiveness/responsive-quiz.png)

## Lighthouse Audit

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues.

| Page | Mobile | Desktop | Notes |
| --- | --- | --- | --- |
| Home | ![screenshot](assets/documentation/ligthhouse/ligth-mobil.png) | ![screenshot](assets/documentation/ligthhouse/ligth-desktop.png) | No issues |

## Defensive Programming

| Page | User Action | Expected Result | Pass/Fail | Comments |
| --- | --- | --- | --- | --- |
| Home | | | | |
| | Click on start button | starts game | Pass | |
| | Click on answer button | shows correct or wrong and shows next button | Pass | |
| | Click on next button | shows next question | Pass | |
| | Click on restart button | restarts the game | Pass | |
| | Click on link to my github | oppens new tab whit my github | Pass | |

## Bugs

- Time dosent stop when you run out of questions.

  - To fix this, I added "clearIntrevalt" to endgame function and called it when there were no more questions ![screenshot](assets/documentation/bugs/buglos1.png)
  ![screenshot](assets/documentation/bugs/buglos2.png).