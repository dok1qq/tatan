## Task tracker

Task tracker synced with firebase

### Getting started
1) Firebase
- Create [firebase project](https://console.firebase.google.com/?hl=ru)
- Create 'tasks' collection
- Setup Read, Write rules, no auth needed
- Add firebase config to project 'fb-config.ts'
2) Run
```console
> npm i && npm start
```
3) Deploy
- Add deploy config to project '.firebaserc'
```
> ./deploy.sh
```

### Stack:
- React + TS
- Vite
- Firebase
