const { App } = require('@slack/bolt');

const xappToken = 'xapp-1-A03AD1LNM63-3436895691841-9bb830728a84ff9a64d3a531c1821522df8c0a81e78827b1c4b8945b7fb1fb54';

const app = new App({
  signingSecret: 'ca8a41417c924e82450054bbe8935b64',
  token: 'xoxb-3160912920369-3370006260852-d1COFTicKjtUk4csvtBDEglf',
  socketMode: true, 
  appToken: xappToken
});

app.message('hello', async ({ message, say }) => {
    // say() sends a message to the channel where the event was triggered
    await say(`Hey there <@${message.user}>!`);
  });
  


/* Add functionality here */

(async () => {
  // Start the app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();

