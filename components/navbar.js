let navbar = () => {
  return `<div style=" padding: 10px" id="inside-navbar">
    <input
      style="
        background-color:#272A30;
        color:white;
        padding: 0.5rem;
        width: 50%;
        border: 1px solid lightgrey;
      "
      type="text"
      placeholder="Search Food Item"
    />
    <button
      style="
        background-color: red;
        border: none;
        padding: 10px 30px;
        color: white;
        border-radius: 0.4rem;
      "
    >
      Sign Up
    </button>
    <button
      style="
        background-color: red;
        border: none;
        padding: 10px 30px;
        color: white;
        border-radius: 0.4rem;
      "
    >
      Login
    </button>
  </div>`;
};
export default navbar;
