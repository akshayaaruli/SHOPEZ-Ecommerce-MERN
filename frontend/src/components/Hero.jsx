export default function Hero() {
  return (
    <div className="container mt-4">

      <div
        className="card border-0 overflow-hidden shadow-lg"
        style={{ borderRadius: "20px" }}
      >

        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
          alt="banner"
          height="500"
          style={{
            width: "100%",
            objectFit: "cover"
          }}
        />

        <div
          className="card-img-overlay d-flex align-items-center bg-dark bg-opacity-75"
        >
          <div className="ms-5">

            <h1 className="text-info fw-bold display-2">
              FASHION HUB
            </h1>

            <p className="text-white fs-3">
              Where Style Meets Confidence.
            </p>
              
            <a
              href="/products"
              className="btn btn-info btn-lg text-white"
            >
              Explore Collection
            </a>

          </div>
        </div>

      </div>

    </div>
  );
}