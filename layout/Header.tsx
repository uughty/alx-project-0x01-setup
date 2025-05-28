const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex space-x-4">
        <a href="/">Home</a>
        <a href="/posts">Posts</a>
        <a href="/users">Users</a>
      </nav>
    </header>
  );
};

export default Header;
