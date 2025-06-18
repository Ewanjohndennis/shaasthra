import './loader.css';
const Loader = () => (
  <div className="fullscreen-loader">
    <div className="loader-inner">
      <div className="dots-wrapper">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <p className="loading-text">Loading...</p>
    </div>
  </div>
);

export default Loader;
