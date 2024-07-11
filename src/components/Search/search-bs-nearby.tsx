import BsShortViewer from "../bs-short-viewer";
import "./search-bs-nearby.scss";

function SearchBsNearby() {
  return (
    <div className="search-bs-nearby-container">
      <div className="search-bs-nearby-header white">
        <h1 className="container-title">Próximos de você</h1>
      </div>
      <div className="search-bs-nearby-contents">
        <nav className="search-bs-nearby-contents-nav">
          <ul className="search-bs-nearby-contents-list">
            {[...Array(15)].map(() => {
              return (
                <li className="search-bs-nearby-content-list-element">
                  <BsShortViewer />
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default SearchBsNearby;
