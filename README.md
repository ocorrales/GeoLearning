# GeoLearning

Static geography challenge game for kids. It can run directly from `index.html` and can be deployed to GitHub Pages.

## Game format

- Each session ends after 10 questions or 3 minutes, whichever happens first.
- Each question has a 15 second timer.
- The leaderboard only accepts scores after the session ends, so players are compared on the same rules.
- Study mode is available, but the country card is hidden while a challenge question is active.
- Players can restart a session before submitting a score.

## Local use

Open `index.html` in a browser. Without Supabase config, scores are saved in `localStorage` only.

## GitHub Pages deploy

1. Push this folder to a GitHub repository.
2. In GitHub, go to `Settings` -> `Pages`.
3. Set source to the repository branch and root folder.
4. Open the generated `https://<owner>.github.io/<repo>/` URL.

## Online leaderboard with Supabase

1. Create a Supabase project.
2. Open the Supabase SQL editor.
3. Run the SQL in `supabase-schema.sql`.
4. Copy `config.example.js` to `config.js`.
5. Fill in:

```js
window.GEOLEARNING_CONFIG = {
  supabaseUrl: "https://YOUR_PROJECT_ID.supabase.co",
  supabaseAnonKey: "YOUR_SUPABASE_ANON_KEY",
};
```

The anon key is designed to be used in browser apps. Access is controlled by the Row Level Security policies in `supabase-schema.sql`.

## Child privacy note

The app asks for a nickname only. Do not ask children to enter real full names, emails, school names, or other personal information.
