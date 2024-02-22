export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"


export const API_OPTIONS =   {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDUzYzJlYmMzOGZmN2NhN2E2ZmQwMDE2MGRiMGIyYSIsInN1YiI6IjY1ZDMzYjE4NTFjMDFmMDE3Y2MxM2FlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.flZAwLD_-cZZPNtgvkemZxP68OX_-D8o5zF3G4XKN1Q'
    }
  };

  export const IMG_POSTER_CDN = "https://image.tmdb.org/t/p/original/";
  export const BG_LOGIN = "https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"
  export const SUPPORTED_LANGUAGES = [
    {identifier:"en" ,name:"English"},
    {identifier:"hindi" ,name:"Hindi"},
    {identifier:"spanish" ,name:"Spanish"}
  ]
  export const OPENAI_KEY = process.env.REACT_APP_GPT_KEY