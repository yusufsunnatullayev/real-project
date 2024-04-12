const User = () => {
  return (
    <div className="w-50">
      <div class="col-12">
        <label for="username" class="form-label">
          Username
        </label>
        <div class="input-group has-validation">
          <span class="input-group-text">@</span>
          <input
            type="text"
            class="form-control"
            id="username"
            placeholder="Username"
            required=""
          />
          <div class="invalid-feedback">Your username is required.</div>
        </div>
      </div>

      <div class="col-12">
        <label for="email" class="form-label">
          Email
        </label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="you@example.com"
        />
        <div class="invalid-feedback">
          Please enter a valid email address for shipping updates.
        </div>
      </div>
      <label for="email" class="form-label mt-3">
        Bio
      </label>
      <div class="form-floating">
        <textarea
          class="form-control"
          id="floatingTextarea2"
          style={{ height: 100 }}
        ></textarea>
      </div>
      <button className="btn btn-success mt-3">Save</button>
    </div>
  );
};

export default User;
