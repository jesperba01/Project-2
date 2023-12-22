# [PROJECT 2](https://jesperba01.github.io/Project-2)

## Quiz game challange,
For this quiz you have the chance to compete whit friends who is the smartets by answering correctly to the most questions whitin the time frame.

## Mockup

![screenshot](documentation/mockup.png)

## UX

For the design i went whit soft cornors, ligth colors and a soft font for a friendly feel to it

### Colour Scheme

- `black` used for border and text color.
- `white` used for background.
- `hue 200` used for primary background.
- `hue 0` used for secondary background.
- `hue 45` used for secondary background.

I've used CSS `:root` variables to easily update the global colour scheme by changing only one value, instead of everywhere in the CSS file.

```css
:root {
    --hue-neutral: 200;
    --hue-wrong: 0;
    --hue-correct: 145;
}

```

### Typography

[Font] monospace, used for entire webbsite. 

## Features

- **Start button**

  - Button that starts the game for the user.

![screenshot](documentation/features/start.png)

- **Next button**

  - Button thats sets the next question after answering the previous one.

![screenshot](documentation/features/next.png)

- **Answer Buttons**

  - Buttons whit questions whit correct and wrong answers for the user to chose.

![screenshot](documentation/features/answbutton.png)

- **Restart button**

  - Start button renamed at the end of a game so the user can play again.

![screenshot](documentation/features/reset.png)

- **Score counter**

  - counts the amount of correct answers for the user.

![screenshot](documentation/features/score.png)

- **Game timer**

  - Shows how much time the user have left to answer questions.

![screenshot](documentation/features/timer.png)

- **Questions counter**

  - Shows the user how many questions answerd and how many left.

![screenshot](documentation/features/qcounter.png)

- **Link**

  - Link for the user if they whant to see my github.

![screenshot](documentation/features/link.png)

### Existing Features

### Future Features

- Score board
  - A score board to help people remeber their score when they compete whit friends.

## Tools & Technologies Used

- [HTML](https://en.wikipedia.org/wiki/HTML) used for the main site content.
- [CSS](https://en.wikipedia.org/wiki/CSS) used for the main site design and layout.
- [CSS :root variables](https://www.w3schools.com/css/css3_variables.asp) used for reusable styles throughout the site.
- [CSS Flexbox](https://www.w3schools.com/css/css3_flexbox.asp) used for an enhanced responsive layout.
- [JavaScript](https://www.javascript.com) used for user interaction on the site.
- [Git](https://git-scm.com) used for version control. (`git add`, `git commit`, `git push`)
- [GitHub](https://github.com) used for secure online code storage.
- [GitHub Pages](https://pages.github.com) used for hosting the deployed front-end site.
- [Codeanywhere](https://codeanywhere.com) used as a cloud-based IDE for development.

## Testing

For all testing, please refer to the [TESTING.md](TESTING.md) file.

## Deployment

The site was deployed to GitHub Pages. The steps to deploy are as follows:

- In the [GitHub repository](https://github.com/jesperba01/Project-2), navigate to the Settings tab
- From the source section drop-down menu, select the **Main** Branch, then click "Save".
- The page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found [here](https://jesperba01.github.io/Project-2)

### Local Deployment

This project can be cloned or forked in order to make a local copy on your own system.

#### Cloning

You can clone the repository by following these steps:

1. Go to the [GitHub repository](https://github.com/jesperba01/Project-2)
2. Locate the Code button above the list of files and click it
3. Select if you prefer to clone using HTTPS, SSH, or GitHub CLI and click the copy button to copy the URL to your clipboard
4. Open Git Bash or Terminal
5. Change the current working directory to the one where you want the cloned directory
6. In your IDE Terminal, type the following command to clone my repository:
	- `git clone https://github.com/jesperba01/Project-2.git`
7. Press Enter to create your local clone.

Alternatively, if using Gitpod, you can click below to create your own workspace using this repository.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/jesperba01/Project-2)

Please note that in order to directly open the project in Gitpod, you need to have the browser extension installed.
A tutorial on how to do that can be found [here](https://www.gitpod.io/docs/configure/user-settings/browser-extension).

#### Forking

By forking the GitHub Repository, we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original owner's repository.
You can fork this repository by using the following steps:

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/jesperba01/Project-2)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. Once clicked, you should now have a copy of the original repository in your own GitHub account!

## Credits

[Youtube](https://www.youtube.com/watch?v=riDzcEQbX6k) For this project i followed a tutorial. features 1,2,3 and 4 are from the tutorial although they have been changed they are originaly form this tutorial.

### Content

| Source | Location | Notes |
| --- | --- | --- |
| [Markdown Builder](https://tim.2bn.dev/markdown-builder) | README and TESTING | tool to help generate the Markdown files |
| [Chris Beams](https://chris.beams.io/posts/git-commit) | version control | "How to Write a Git Commit Message" |
| [W3Schools](https://www.w3schools.com/css/css3_variables.asp) | entire site | how to use CSS :root variables |
| [YouTube](https://www.youtube.com/watch?v=riDzcEQbX6k) | quiz | core quiz logic |

### Media

| Source | Location | Type | Notes |
| --- | --- | --- | --- |
| [Mentimeter](https://www.mentimeter.com/blog/audience-energizers/55-free-trivia-and-fun-quiz-question-templates) | questions | text | Questions and answers |

### Acknowledgements

- I would like to thank my Code Institute mentor, [Tim Nelson](https://github.com/TravelTimN) for their support throughout the development of this project.
- I would like to thank my Code Institute mentor, [Julia Konovalova](https://github.com/TravelTimN) for their support throughout the development of this project.
- I would like to thank the [Code Institute](https://codeinstitute.net) tutor team for their assistance with troubleshooting and debugging some project issues.
- I would like to thank the [Code Institute Slack community](https://code-institute-room.slack.com) for the moral support.
- I would like to thank my family (Annelie/Alexander/Victor/Peter), for helping me whit feedback and constructive criticism.