

- Displays available companies, roles, education criteria, and posts.
- Uses JSON file (`placementData.json`) for real-time updates.
- Editable with Cursor AI editor.

## Setup
Make sure you have:

1. Node.js installed

2. Ngrok installed 

3. A Slack Workspace and Slack App created

## Next step

1. Install dependencies:
   ```
   npm install
   ```

2. Create `.env` file:
   ```
   SLACK_BOT_TOKEN=(slack-bot-token)
   SLACK_SIGNING_SECRET=(signing-secret)
   PORT=3000
   ```

3. Run app:
   ```
   node index.js
   ```

4. Expose port using ngrok:
   ```
   npx ngrok http 3000
     ```

5. Use `/placement2` command in Slack.
