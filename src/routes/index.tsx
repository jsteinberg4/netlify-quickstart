import { Title } from "solid-start";

export default function Home() {
  return (
    <main>
      <Title>Welcome to Alleghany Block Parties</Title>
    <style>
      body {
        font-family: "Roboto", sans-serif;
        margin: 0;
        padding: 0;
        background: url("https://images.unsplash.com/photo-1606373664971-bf9b25eb508d?q=80&w=2571&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
          center/cover no-repeat fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
      }

      .container {
        text-align: center;
        padding: 20px;
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }

      h1 {
        color: #000000;
        font-size: 36px;
        margin-bottom: 10px;
      }

      p {
        color: #000000;
        font-size: 18px;
        margin-bottom: 20px;
      }

      button {
        background-color: #3f51b5;
        color: #fff;
        padding: 10px 20px;
        font-size: 16px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s;
      }

      button:hover {
        background-color: #303f9f;
      }

      .clipart {
        position: absolute;
        bottom: 50px;
        /* left: 100px; */
        width: 30%; /* Adjust the size as needed */
        height: auto;
        z-index: 0; /* Ensure the clipart is behind the container */
      }
    </style>
      <body>
        <img
          src="https://assets-prd.punchdrink.com/wp-content/uploads/2017/02/Article-House-Rules-Stump.jpg"
          alt="Tree Stump Clipart"
          class="clipart"
        />
        <div class="container">
          <h1>Welcome to Alleghany Block Party</h1>
          <p>Coming soon...</p>
        </div>
      </body>
    </main>
  );
}
