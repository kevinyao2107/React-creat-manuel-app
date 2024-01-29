export function Navigation() {
  return (
    <ul>
      <NavLink href='/'>Home</NavLink>
      <NavLink href='/about'>About</NavLink>
    </ul>
  );
}

function NavLink({ href, children }) {
  return (
    <li>
      <a href={href}>{children}</a>
    </li>
  );
}

export function Comments() {
  return (
    <>
      <h2>Comments</h2>
      <Comment text='Hello!' author='Sophie' />
      <Comment text='How are you?' author='Sunil' />
    </>
  );
}

function Comment({ text, author }) {
  return (
    <p>
      {text} — <i>{author}</i>
    </p>
  );
}

export const AboutMe = () => {
  return <div>A propos de moi</div>;
};

export const Footer = () => {
  return (
    <ul>
      <li>
        <h1>Entreprise</h1>
        <a href=''>Qui sommes nous</a>
        <a href=''>A propos de nous</a>
      </li>
      <li>
        <h1>Entreprise</h1>
        <a href=''>Qui sommes nous</a>
        <a href=''>A propos de nous</a>
      </li>
      <li>
        <h1>Entreprise</h1>
        <a href=''>Qui sommes nous</a>
        <a href=''>A propos de nous</a>
      </li>
    </ul>
  );
};
