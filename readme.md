Bug reproduciton steps:
1. start the localhost listener by running `yarn install` and then `yarn run start` from the `listener` folder.
2. host `index.html` from `web-app` folder on an https domain (or use the already hosted ones from:  https://badiladata.blob.core.windows.net/firefox/index.html)
3. access the hosted index.html file from step 2 using Firefox
4. click on the "Click me for demo" button 
5. a message with the text "Request errored with status: 0" should appear. 

Repeating steps 3 and 4 from Chrome and Edge should result in the message "Request finished with status: 200" being displayed