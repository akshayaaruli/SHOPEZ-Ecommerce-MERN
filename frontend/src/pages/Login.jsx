function Login() {

  return (

    <div className="container mt-5">

      <div
        className="card shadow-lg border-0 p-5 mx-auto"
        style={{
          maxWidth: "500px",
          borderRadius: "20px"
        }}
      >

        <h2 className="text-center fw-bold">

          ✨ Welcome Back

        </h2>

        <p className="text-center text-muted mb-4">

          Sign in to continue shopping at Fashion Hub.

        </p>

        <input
          type="email"
          className="form-control mb-3"
          placeholder="📧 Email Address"
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="🔒 Password"
        />

        <button
          className="
          btn
          btn-dark
          w-100
          fw-bold
          "
          onClick={() =>
            alert("🎉 Login Successful! Welcome back to Fashion Hub.")
          }
        >

          Sign In

        </button>

        <p className="text-center text-muted mt-4">

          Don't have an account?

        </p>

        <a
          href="/register"
          className="
          btn
          btn-outline-dark
          w-100
          "
        >

          Create Account

        </a>

      </div>

    </div>

  );

}

export default Login;