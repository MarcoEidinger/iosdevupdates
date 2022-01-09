import React from "react";
import blogs from "../../content/blogs.json";
import Navbar from "../components/navbar";
import Stats from "../components/stats";
import BlogPost from "../components/blogPost";
import ListPaging from "../components/listPaging";
import Footer from "../components/footer";
import Seo from "../components/seo"

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { startElement: 0, endElement: 30 };
  }

  previousPage = () => {
    if (this.state.startElement === 0) {
      return;
    }
    this.setState((prevState) => ({
      startElement: prevState.startElement - 30,
      endElement: prevState.endElement - 30,
    }));
    window.scrollTo(0, 0);
  };

  nextPage = () => {
    if (this.state.endElement + 30 > blogs.sites.length) {
      return;
    }
    this.setState((prevState) => ({
      startElement: prevState.startElement + 30,
      endElement: prevState.endElement + 30,
    }));
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <main>
		<Seo />
        <Navbar />
        <div>
          <Stats stats={blogs.stats} />
          <div class="divider px-16"></div>
        </div>
        {this.state.startElement !== 0 && (
          <ListPaging
            previousPage={this.previousPage}
            nextPage={this.nextPage}
          />
        )}
        <br></br>
        <div class="grid grid-cols-1 gap-1 md:grid-cols-1 justify-start px-16 text-left">
          {blogs.sites
            .slice(this.state.startElement, this.state.endElement)
            .map((site) => (
              <BlogPost site={site} key={site.title}/>
            ))}
        </div>
        <ListPaging previousPage={this.previousPage} nextPage={this.nextPage} />
        <Footer />
      </main>
    );
  }
}

export default IndexPage;
