
import  { useEffect, useState } from 'react';

function Searchbar(): JSX.Element {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollTop: number = window.pageYOffset;
      const stickyThreshold: number = 80;
      setIsSticky(scrollTop >= stickyThreshold);
    };

    window.addEventListener('scroll', handleScroll);

    return (): void => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <div className={`Searchbar${isSticky ? ' sticky' : ''}`}>
      <form>
        <input type="text" placeholder="Search..." />
        <button type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
}
export default Searchbar;