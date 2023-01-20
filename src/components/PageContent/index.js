import React from "react";
import About from "../About";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import PageContent from "../PageContent";
import Resume from "../Resume";


function Page({ currentPage }) {
    const pageRender = () => {
      switch (currentPage.name) {
        case "About":
          return <About />;
        case "Portfolio":
          return <Portfolio />;
        case "Contact":
          return <Contact />;
        case "Resume":
          return <Resume />;
        default:
          return <About />;
      }
    };
  
    return (
      <div>
        {/* <h2>{currentPage.name}</h2> */}
        <PageContent>
          {pageRender()}
          </PageContent>
      </div>
    );
  }
  
  export default Page;