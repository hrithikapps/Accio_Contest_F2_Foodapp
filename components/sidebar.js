let sidebar = () => {
  return `<div
      style="
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        width: fit-content;
      "
      id="inside-sidebar"
    >
      <div>
        <img
          style="background-color: black;
          height:298px;
          width:298px;
          margin-top:0px"
          src="../images/logosvg.svg"
          alt=""
        />
        <h3 style="margin-top: 0px; margin-bottom: 0px">
          Your Restaurant Menu
        </h3>
        <h5 style="color: red; margin-top: 0px">Your Slogan</h5>
      </div>
      <div>
        <h3>Quick Links</h3>
        <ol>
          <li><a href="/">Home</a></li>
          <li><a href="/">Your Orders</a></li>
          <li><a href="/">Wallet</a></li>
          <li><a href="/">Profile</a></li>
          <li><a href="/">Logout</a></li>
        </ol>
      </div>
      <div>
        <h3>More About Us</h3>
        <ol>
          <li><a href="/">Our Blog</a></li>
          <li><a href="/">Upcoming Dishes</a></li>
          <li><a href="/">Our Story</a></li>
          <li><a href="/">Social Media Links</a></li>
        </ol>
      </div>
    </div>`;
};
export default sidebar;
