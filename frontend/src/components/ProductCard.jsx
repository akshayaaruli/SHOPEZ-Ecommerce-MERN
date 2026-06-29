import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div
      className="card shadow-lg border-0"
      style={{ borderRadius: "18px" }}
    >
      <div className="card-body text-center">

        <span className="badge bg-danger mb-2">
          New Arrival
        </span>

        <h4 className="fw-bold">
          {product.name}
        </h4>

        <h5 className="text-primary">
          ₹ {product.price}
        </h5>

        <button
          className="btn btn-primary w-100 mt-3"
          onClick={() => navigate("/cart")}
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
}