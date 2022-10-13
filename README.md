# Flashcards

## Description
Make studying that much easier with this easy-to-use flashcards application. A user will be able to add any data set they want to study to this application, make an attempt at each, and take note of any cards they would like to revisit.

## Contributors
[!Spencer Haka](github.com/speekins)

## Example
[![FlashCards Video](https://user-images.githubusercontent.com/74210902/195671107-2b83a58f-2355-4243-a36e-7bf1691ac482.png)](https://loom.com/share/7011ab8c41fc40b08154b309c063a097)

## Technology Used
- JavaScript
- Node.js
- TDD--Mocha/Chai

## Set-Up
Fork the repo from github.com/speekins/flashcards and clone the forked repository to a local machine by typing "git clone" followed by the SSH key or HTTPS link provided (click the green "code" button/dropdown near the top right of the screen. Once cloned, `cd` into the `flashcards` folder and type `node index.js` which will run the file with the flashcards provided. Attempt every card until the end at which time the script stops running, or hold down `control` + `c` to quit.

## Takeaways
This project focuses heavily on TDD (using Mocha framework with Chai testing library) and OOP (Object Oriented Programing). In my opinion, the most challenging part is segmenting the logic of the program to several different objects and understanding what each object and its methods are to accomplish. In this case, a group (array) of data is passed to a new instance of the `Game` class which populates a new `Deck` with new instances of `Card` utilizing the array of data to create each `Card` instance. A `Round` consists of one pass through the entire `Deck` and a `Turn` stores the users guess attempt for each `Card`. Juggling so many objects was a challenge, but provided an opportunity to sharpen my OOP skills.
Additionally, TDD was challenging because it requires thoughtful decisions about what the code will do before "hacking & slashing" at it. TDD proves for a much more intentional approach, but it was not always easy to see what the code needed to do before I had written it.
