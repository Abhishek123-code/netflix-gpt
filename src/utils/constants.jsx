export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BACKGROUND =
  "https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_large.jpg";

export const USER_PHOTO =
  "https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Cat-1024.png";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_TMDB_API_KEY,
  },
};

export const supportedLanguages = [
  { identifier: "en", name: "English" },
  { identifier: "hn", name: "Hindi" },
  { identifier: "ben", name: "Bengali" },
];

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
