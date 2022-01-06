import logo from './logo.svg';
import './App.css';
import posts from './updated.json'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Latest updates for development blogs (English) listed on iOS Dev Directory
        </p>
<br></br>
{/* <div class="grid grid-cols-1 gap-4 md:grid-cols-4">
                {
                    posts.map(post => (

<div class="card">
  <div class="card-body">
    <h2 class="card-title">{post.updated}</h2>
    <p>{post.title}</p>
    <div class="card-actions">
<a class="btn btn-primary" target={post.feed_url} href={post.feed_url}>RSS</a>
<a class="btn btn-ghost" target={post.site_url} href={post.site_url}>Twitter</a>
    </div>
  </div>
</div>
					))
                }
</div> */}
<div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th class="normal">Updated</th>
        {/* <th>Updated</th>
        <th>Updated</th>
        <th>Updated</th> */}
        <th>Title</th>
        <th>Visit</th>
      </tr>
    </thead>
    <tbody>
                {
                    posts.map(post => (

      <tr>
        <td>{post.latestPostDate}</td>
        {/* <td>{post.updated}</td>
        <td>{post.updated}</td>
        <td>{post.updated}</td> */}
        <td>{post.title}</td>
        {/* <td><a class="btn btn-ghost" target={post.site_url} href={post.site_url}>{post.title}</a></td> */}
        <td><a class="btn btn-primary" target={post.site_url} href={post.site_url}>Go</a></td>
      </tr>

                    ))
                }
    </tbody>
  </table>
</div>
      </header>
    </div>
  );
}

export default App;
