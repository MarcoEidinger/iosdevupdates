import React from "react";
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        buildTimeZone
      }
    }
  `)

  return (
    <footer id="footer" class="p-4 footer bg-neutral footer-center">
      <div>
        <p>Last updated at {data.site.buildTimeZone}</p>
        <p>
          Site designed and built by{" "}
          <a
            class="link text-info"
            href="https://twitter.com/marcoeidinger"
            target="_blank"
            rel="noreferrer"
          >
            Marco Eidinger
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
