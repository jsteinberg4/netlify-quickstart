import { Title } from "solid-start";

export default function Home() {
  return (
    <main>
      <Title>Welcome to Block Party Boston</Title>
      <body>
        <img
          src="https://assets-prd.punchdrink.com/wp-content/uploads/2017/02/Article-House-Rules-Stump.jpg"
          alt="Tree Stump Clipart"
          class="clipart"
        />
        <div class="container">
          <h1>Welcome to Block Party Boston</h1>
          <p>Coming soon...</p>
          {/* <button onclick="redirectToEvents()">Explore Events</button> */}
        </div>
      </body>
    </main>
  );
}
