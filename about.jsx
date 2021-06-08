import { useWiggle } from "../hooks/wiggle";
import { animated } from "react-spring";
import * as React from "react";
{/* Add imports from README Next steps here */}


/*
The About function defines the component that makes up the About page
- This component is attached to the /about path in router.jsx
*/

export default function About() {
  {/* Declare style and trigger for wiggle effect from README here */}
  
  return (
    <div className="page">
      {/* Extend h1 tag from README here */}
      <h1 className="title">
        About this site
      </h1>
      {/* Extend p tag from README here */}
      <p>
        Welcome to the Glitch React starter, where you can instantly create a
        React site that's fully customizable.
      </p>
      <p>
        <em>
          If you're completely new to React, learning the{" "}
          <a href="https://reactjs.org/docs/hello-world.html">main concepts</a>{" "}
          will get you off to a great start. You'll also see comments and links
          to supporting resources throughout the code.
        </em>
      </p>
      <p>
        This page is a great spot to tell the world a few details about the new
        React app you built on Glitch! Check out your project's{" "}
        <code>readme</code> file to learn more about how to customize your
        content.
      </p>
      <ul>
        <li>
          🎉 Right now, you are using this website code and you can use this to make amazing websites :D.
        </li>
      </ul>

      <p>
        {" "}
        We can't wait to see what you create!
      </p>
      <p>
        Built with <a href="https://reactjs.org/">React</a> and{" "}
        <a href="https://vitejs.dev/">Vite</a> on{" "}
        Enjoy :D.
      </p>
    </div>
  );
}
