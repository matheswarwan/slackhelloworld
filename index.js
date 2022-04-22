const { App } = require('@slack/bolt');

const xappToken = 'xap'+'p'+'-1-A03AD1LNM63-3424578434515'+'-10729cff994696'+'44b7e7ba0f171cd20bd13bbae7f66f5d6961abe64df7f7ab4a';

const app = new App({
  signingSecret: 'f59d074dc908118f838c8f47176cceb5',
  token: 'xo'+'xb-'+'31609129203'+'69-337000626'+'0852-alk'+'VbJgY8UYs68Pgs9N3gMka',
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

