import { createRoot } from 'react-dom/client';
import { Comments, Footer, Navigation } from './Components.js';
import App from './App.js';

// const navDomNode = document.getElementById('navigation');
// const navRoot = createRoot(navDomNode);
// navRoot.render(<Navigation />);

// const commentDomNode = document.getElementById('root');
// const commentRoot = createRoot(commentDomNode);
// commentRoot.render(<Comments />);

// const aboutMe = document.getElementById('about');
// const aboutMeRoot = createRoot(aboutMe);
// aboutMeRoot.render(<AboutMe />);

// const footer = document.getElementById('footer');
// const footerRoot = createRoot(footer);
// footerRoot.render(<Footer />);

const app = document.getElementById('root');
const appRoot = createRoot(app);
appRoot.render(<App />);
