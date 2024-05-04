export default function About() {
  return (
    <main className="about">
      <div className="header-section">
        <h1>About</h1>
        <p>
          After a failed attempt to develop a text-based and AI-powered RPG
          called "Project Holodeck", I decided to reuse my assets and point the
          project to a different direction. Lesson learned: it's good to work on
          a great project you're passionate about, but it's even better to work
          on a good project that won't leave you overwhelmed. Small project is
          better than no project at all. No shame in starting small.
        </p>

        <p>
          "Super Clicker" (soon to be renamed) is supposed to be a simple (or
          super?) clicker game. Because there's nothing more satisfying than
          clicking a thing, seeing an animation, some numbers going up, things
          happening on the screen and all that. As soon as I'm done with that,
          I'll be adding twists. One major feature is that every action from the
          user will go immediately to a server to be validated. No cheating will
          be possible (at least not by changing code in the browser).
        </p>
        <p>
          I hope you enjoy it. If you have any questions, comments, or
          suggestions, feel free to{' '}
          <a href="mailto:german.n.piccioni@gmail.com">send me an email</a>.
        </p>
        <p>
          You can also check out{' '}
          <a href="https://github.com/n4mr3g" target="_blank">
            my GitHub
          </a>{' '}
          or{' '}
          <a
            href="https://www.linkedin.com/in/german-piccioni/"
            target="_blank"
          >
            my LinkedIn
          </a>{' '}
          profiles.
        </p>
      </div>
    </main>
  );
}
