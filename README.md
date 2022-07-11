# simple-trello

How to run the app:

1. Clone the repository
2. cd to trello-board folder
3. Run "npm install" (you should have node v16.15.1)
4. Run "npm start"

Added extra features:

1. User is able to remove columns
2. I wrote a simple test with puppeteer. If you have linux OS, you should go to the "e2e" folder and comment the "executablePath" in the "e2e.test.js", but if you have windows OS, set it to the path of your accessible browser's executable file. for example, my path to run test in firefox was "C:/Program Files (x86)/Mozilla Firefox/firefox.exe". then you can run the test by run "npm run e2e". if the test was successful, you can see a screenshot of the last transaction in e2e folder.

Features i could and liked to add but i did'nt have more time:

1. User login
2. The ability to add boards (in my app the user can't create boards)
3. The ability to remove cards (in my app the user can't remove specific cards)
4. Good styling (there is no specific styling)
5. Complete tests
6. Drag & drop feature
7. Use push notifications and alerts
8. Complete registration of cards (i just considered title and dueDate for cards)
