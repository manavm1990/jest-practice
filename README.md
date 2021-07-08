# Jest Practice

This repo uses the Oceanic Next theme as part of the extensions/settings in `.vscode`. The reason why is b/c it plays nicely with the _Babel JavaScript_ extension's enhanced syntax highlighting.

If you really hate it, no worries ;). Just change it, but you **might** lose some syntax highlighting benefits.

On that note 🎵, **don't forget to** install any missing recommended extensions if prompted to do so in the bottom right of your screen (not the ones on the bottom left under 'Extensions!').

If you want, you could install _Jest Snippets_ from [here](https://marketplace.visualstudio.com/items?itemName=andys8.jest-snippets).

You will also want to make sure that _ESLint_ and _Prettier_ are enabled in the bottom right.

Aside from that, `npm i`. You also need to: `npm install --save-dev jest`.

You should also update `package.json` with your `"author"` info etc. and **add**:

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

Then, run **two terminals** (make sure you are in the correct directory). One of these is: `npm start` which will use `nodemon` to just keep your files 🏃🏾‍♂️. In a separate terminal you will run `npm test` to run `jest` (and maybe do some `commit`s).
