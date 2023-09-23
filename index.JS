const Navbar = {
    template: `
      <nav>
        <div class="company-name">
          <h1>Redback Operation</h1>
        </div>
        <ul class="nav-list">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/Intro">Introduction</router-link></li>
          <li><router-link to="/0">Product</router-link></li>
          <li><router-link to="/1">Solutions</router-link></li>
        </ul>
      </nav>
    `,
  };
  
  const Home = {
    template: `
      <div>
        <Navbar></Navbar>
        <section class="Welcome">
          <p>Welcome to Redback Operation..</p>
          <section class="Welcome">
            <div class="right-align">
              <p>"Red Back Operation" is a company or initiative focused on the development of wearable technology designed to enhance the lives of elderly individuals. Our primary mission is to provide innovative solutions that cater to the unique needs and challenges faced by seniors. These wearables typically incorporate features such as health monitoring, fall detection, and medication management.</p>
            </div>
          </section>
        </section>
      </div>
    `,
  };
  
  const Introduction = {
    template: `
      <div>
        <Navbar></Navbar>
        <section class="intro-section">
          <p>Here at Redback Operations, we aim to provide the best of technology for the elderly to make their lives easier.</p>
        </section>
        <section class="intro2-section">
          <p>The project aims to develop user-friendly wearable devices for the elderly, addressing challenges like health monitoring, fall detection, medication management, and social connectivity. The wearables, known as "senior wearables" or "aging-in-place wearables," include smartwatches, fitness trackers, and medical alert bracelets.</p>
        </section>
      </div>
    `,
  };
  
  const Product = {
    template: `
      <div>
        <Navbar></Navbar>
        <!-- Your Product content here -->
      </div>
    `,
  };
  
  const Solutions = {
    template: `
      <div>
        <Navbar></Navbar>
        <!-- Your Solutions content here -->
      </div>
    `,
  };
  
  const routes = [
    { path: "/", component: Home },
    { path: "/Intro", component: Introduction },
    { path: "/0", component: Product },
    { path: "/1", component: Solutions },
  ];
  
  const router = new VueRouter({
    routes,
  });
  
  var test = new Vue({
    el: "#app",
    router,
    components: {
      Navbar,
    },
  });
  
