import navbar from "../components/navbar.js";
import sidebar from "../components/sidebar.js";

var header = document.getElementById("navbar");
header.innerHTML = navbar();
// console.log(navbar);

var side = document.getElementById("sidebar");
side.innerHTML = sidebar();
// console.log(sidebar);

let order_status = false;
let paid = false;

window.onload = () => {
  getMenu();
};
const getMenu = async () => {
  const res = await fetch(
    `https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json`
  );
  const data = await res.json();
  //   console.log(data);
  const cardsContainer = document.getElementById("cardsContainer");
  data.forEach((element) => {
    //main cards container

    const div = document.createElement("div");
    div.setAttribute("class", "card");

    //Image of card Item
    const imageDiv = document.createElement("div");
    const img = document.createElement("img");
    img.src = element.imgSrc;
    img.setAttribute("class", "divImg");
    imageDiv.appendChild(img);

    //Adding Item Name inside card
    const h3 = document.createElement("h3");
    h3.innerText = element.name;
    const price = document.createElement("p");
    price.innerText = "$" + element.price;
    const leftDiv = document.createElement("div");
    leftDiv.append(h3, price);
    // Button Div
    const rightDiv = document.createElement("div");
    const button = document.createElement("button");
    button.innerText = "+";
    rightDiv.appendChild(button);
    //main div for flex
    const flexDiv = document.createElement("div");
    flexDiv.setAttribute("class", "flexDiv");
    flexDiv.append(leftDiv, rightDiv);
    div.append(img, flexDiv);
    div.setAttribute("class", "individual-card");
    cardsContainer.append(div);
  });

  const resolvedObj = {
    order_status: true,
    paid: false,
  };

  TakeOrder(data)
    .then(function (orderObj) {
      console.log(orderObj);
      return orderObj;
    })
    .then(function (resolvedObj) {
      return orderPrep(resolvedObj);
    })
    .then(function (paymentInfo) {
      console.log(paymentInfo);
      return payOrder(paymentInfo);
    })
    .then(function (paymentInfo) {
      return paymentInfo;
    })
    .then(function (paymentInfo) {
      console.log(paymentInfo);
      thankyouFnc(paymentInfo);
    })
    .catch(function (err) {
      console.log(err.message);
    });

  // Prompt : TakeOrder() function: (15 marks)
  // Returning a promise:
  // Resolving the promise after 2500 milliseconds
  // Selecting 3 random burgers and adding them to the order object

  function TakeOrder(data) {
    const pr = new Promise(function (resolve, reject) {
      if (!validateCart(data)) {
        const err = new Error("Data is not valid");
        reject(err);
      }
      const orderArray = data.slice(0, 3);
      const orderObj = { ...orderArray };
      if (orderObj) {
        setTimeout(function () {
          resolve(orderObj);
        }, 2500);
      }
    });
    return pr;
  }

  //   Prompt : orderPrep() function: (15 marks)
  //   Returning a promise
  //   Resolving the promise after 1500 milliseconds
  //   Returning the object with order_status as true and paid as false

  function orderPrep(orderObj) {
    return new Promise(function (resolve, reject) {
      if (!orderObj) {
        const err = new Error("Data is not valid");
        reject(err);
      }

      if (orderObj) {
        setTimeout(function () {
          resolve(resolvedObj);
        }, 1500);
      }
    });
  }

  // Prompt : payOrder() function: (15 marks)
  // Returning a promise
  // Resolving the promise after 1000 milliseconds
  // Returning the object with order_status as true and paid as true

  function payOrder(paymentInfo) {
    return new Promise(function (resolve, reject) {
      //Error Handling
      if (!paymentInfo) {
        const err = new Error("Data is not valid");
        reject(err);
      }
      //Handle resolve
      const orderComplete = {
        order_status: true,
        paid: true,
      };
      if (paymentInfo) {
        setTimeout(function () {
          resolve(orderComplete);
        }, 1000);
      }
    });
  }

  // Prompt : thankyouFnc() function: (5 marks)
  // Displaying an alert message on the screen

  function thankyouFnc(paymentInfo) {
    //Error Handling
    if (!paymentInfo) {
      const err = new Error("Data is not valid");
      reject(err);
    }

    if (paymentInfo) {
      alert("Order Completed. Thank You for the order ");
    }
  }

  function validateCart(data) {
    if (!data) {
      return false;
    }
    return true;
  }

  //   const TakeOrder = () => {
  //     const orderArray = data.slice(0, 3);
  //     const orderObj = { ...orderArray };

  //     // orderObj.push();
  //     console.log(orderObj);
  //     myStopFunction();

  //     const orderPrep = () => {
  //       //   let order_status: true;

  //       paid = false;
  //       alert("order_status:true , paid:false");
  //       stopOrderInterval(orderInterval);

  //       const payOrder = () => {
  //         order_status = true;
  //         paid = true;
  //         alert("order_status:true , paid:true");
  //         stopPayOrderInterval(payorderInterval);
  //         return { order_status: true, paid: true };
  //       };

  //       const payorderInterval = setInterval(payOrder, 1000);
  //     };
  //     //Set & clear Interval for Order : True , paid : False
  //     const orderInterval = setInterval(orderPrep, 1500);
  //   };

  //Set and clear interval for getting 3 random items

  //   const myInterval = setInterval(TakeOrder, 2500);

  //   function myStopFunction() {
  //     clearInterval(myInterval);
  //   }
  //   function stopOrderInterval(orderInterval) {
  //     clearInterval(orderInterval);
  //   }
  //   function stopPayOrderInterval(payorderInterval) {
  //     clearInterval(payorderInterval);
  //   }
};
