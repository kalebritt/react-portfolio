// //import css
// import "./App.css";
// //apollo client
// // import {
// //   ApolloClient,
// //   InMemoryCache,
// //   ApolloProvider,
// //   createHttpLink,
// // } from "@apollo/client";
// import { Routes, Route, BrowserRouter } from "react-router-dom";
// //import components
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Navigation from "./components/Nav";
// import Page from "./components/Page";
// import PageContent from "./components/PageContent";
// import Portfolio from "./components/Portfolio";
// import Resume from "./components/Resume";

// //start the app function
// function App() {
//   return (
//     <BrowserRouter>
//       <div className="outterdiv">
//         <Navigation />
//         <div className="bodydiv">
//           <Routes>
//             <Route path="/About" element={<About />} />,
//             <Route path="/Contact" element={<Contact />} />,
//             <Route path="/Footer" element={<Footer />} />,
//             <Route path="/Header" element={<Header />} />
//             <Route path="/Page" element={<Page />} />
//             <Route path="/PageContent" element={<PageContent />} />
//             <Route path="/Portfolio" element={<Portfolio />} />
//             <Route path="/Resume" element={<Resume />} />
//           </Routes>
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;


import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Page from "./components/Page";
import "./App.css";

function App() {
  const [pages] = useState([
    {
      name: "About",
    },
    {
      name: "Portfolio",
    },
    {
      name: "Contact",
    },
    {
      name: "Resume",
    },
  ]);
  const [currentPage, setCurrentPage] = useState(pages[0]);
  return (
    <div className="background">
      <Header>
        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </Header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
    </div>
  );
}

export default App;
