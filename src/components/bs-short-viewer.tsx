import "./bs-short-viewer.scss";

function BsShortViewer() {
  return (
    <div className="bs-short-viewer-content">
      <img
        className="bs-svc-thumbnail"
        src="https://assets-global.website-files.com/644a9d9ce529ef8812f82a28/647fb85c69e95444243ef9bd_Henley%27s%20Gentlemen%27s%20Grooming%20-%20Barbershop%20and%20Mens%20Grooming.webp"
      />
      <div className="bs-svc-title-container">
        <h1 className="bs-svc-name white">The Gentleman's Cut Barber Shop</h1>
      </div>
      <div className="bs-svc-services-container">
        <div className="bs-svc-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z" />
          </svg>
        </div>
        <div className="bs-svc-text-start">
          <span className="gray">Serviços: </span>
          <span className="white">Cabelo, barba e sobrancelha</span>
        </div>
      </div>
      <div className="bs-svc-status-container">
        <div className="bs-svc-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
          </svg>
        </div>
        <div className="bs-svc-text-start lightred">Fechado</div>
        <div className="bs-svc-text-end white small">ABRE ÁS 19:30 HOJE</div>
      </div>

      <hr className="bs-svc-separator white" />

      <p className="bs-svc-viewmore-or-book gray">Mais informações</p>
    </div>
  );
}

export default BsShortViewer;
