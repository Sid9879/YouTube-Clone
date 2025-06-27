# React + Vite

# 🎥 YouTube Clone – React JS + RapidAPI Project 🔴

A fully functional **YouTube UI Clone** built using **React JS**, designed to deliver a modern and responsive user experience.  
This project replicates the core layout and features of YouTube, including  **category-based browsing**, and **video playback** using data fetched from the **YouTube v3 API** via RapidAPI.

🔗 Live Site: https://you-tube-clone-nine-kohl.vercel.app/  
📦 GitHub Repo: https://github.com/Sid9879/YouTube-Clone

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚀 FEATURES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📺 Watch videos with playback and info  
🧩 Browse videos by categories  
🧭 React Router v6 navigation  
📱 Fully responsive for all screen sizes  
🔄 Dynamic content via Axios + RapidAPI

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧱 TECH STACK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Frontend: React JS  
Routing: React Router DOM  
API: Axios + YouTube Data API v3 (RapidAPI)  
Styling: CSS or Tailwind CSS  
Hosting: Vercel

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📁 PROJECT STRUCTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

YouTube-Clone/  
├── public/  
│   └── index.html  
├── src/  
│   ├── components/         → Navbar, Sidebar, VideoCard  
│   ├── pages/              → Feed, VideoDetail, ChannelDetail  
│   ├── utils/              → fetchFromAPI.js  
│   ├── App.js              → Routing logic  
│   └── index.js            → React entry  
├── .env                    → API keys (excluded from repo)  
└── package.json

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🌐 API INTEGRATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This project uses the **YouTube Data API v3** via **RapidAPI**.

To set it up, create a `.env` file in the root directory:

REACT_APP_RAPID_API_KEY=your_api_key_here

Obtain your API key from: https://rapidapi.com/hub

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Homepage with trending videos  
- Video playback screen  
- Category navigation (e.g., Music, Sports, Gaming)  

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧪 LOCAL SETUP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Clone the repository:

git clone https://github.com/Sid9879/YouTube-Clone.git  
cd YouTube-Clone  
npm install  
npm start

Then open http://localhost:3000 in your browser.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📌 FUTURE ENHANCEMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔐 Add Google authentication  
🌙 Dark mode toggle  
💬 Show comments from YouTube  
📈 Add view count and like info  
📱 Improve mobile navigation

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🙋‍♂️ AUTHOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**Siddharth Singh**  
GitHub: https://github.com/Sid9879

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧠 Built with React. Inspired by YouTube. Powered by RapidAPI.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
