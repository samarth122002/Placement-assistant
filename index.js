
require('dotenv').config();
const { App } = require('@slack/bolt');
const fs = require('fs');
const path = require('path');

const loadPlacementData = () => {
  const dataPath = path.join(__dirname, 'placementData.json');
  if (fs.existsSync(dataPath)) {
    return JSON.parse(fs.readFileSync(dataPath));
  }
  return [];
};


const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

app.command('/placements', async ({ command, ack, say }) => {
  await ack();

  const placementData = loadPlacementData();

  let message = "\uD83D\uDCCB Current Placement Openings:\n";
  message += "\n";
  message += `Company        | Role               | Education                 | Posts\n`;
  message += `---------------|--------------------|---------------------------|-------\n`;

  placementData.forEach(item => {
    message += `${item.company.padEnd(14)}| ${item.role.padEnd(18)}| ${item.education.padEnd(25)}| ${item.posts}\n`;
  });

  message += "";
  await say(message);
});

(async () => {
  await app.start(process.env.PORT || 3000);
  console.log('⚡ AI Placement Assistant is running with Cursor integration!');
})();