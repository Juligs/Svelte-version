<script>
  import { Router, Route } from "svelte-routing";
  import './css/main.scss'
  import Home from "./routes/Home.svelte";
  import About from "./routes/About.svelte";
  import Blog from "./routes/Blog.svelte";
</script>

<div>
  <nav>
    <a href="./">Home</a>
    <a href="./about">About</a>
    <a href="./blog">Blog</a>
  </nav>

  <Router>
    <Route path="./" component={Home} />
    <Route path="./about" component={About} />
    <Route path="./blog" component={Blog} />
  </Router>
</div>
