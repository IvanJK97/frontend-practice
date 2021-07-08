import { Menu } from "./items.js";

const menuItems = document.querySelector(".menu-items");

const btns = document.querySelectorAll(".filter-btns button");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.dataset.category === "all") {
      renderMenu(Menu);
    } else {
      // Can use either button's textContent or innerText, but should use data-* attributes associated with HTML element
      // https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
      const filteredList = Menu.filter(
        (item) => item.category === btn.dataset.category
      );
      renderMenu(filteredList);
    }
  });
});

const renderMenu = (menu) => {
  // Removing all child elements of menuItems: https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
  menuItems.textContent = "";
  menu.forEach((item) => {
    const menuItem = document.createElement("div");
    // How to create element with a class: https://stackoverflow.com/questions/55224589/document-createelementdiv-with-a-class/55224626
    menuItem.className = "menu-item";
    // Creating element and adding it to the DOM: https://stackoverflow.com/questions/7327056/appending-html-string-to-the-dom/7327125
    menuItem.innerHTML = `<img src="${item.img}" alt="${item.title}" class="menu-img" />
           <div class="item-title">
               <h4 class="item-name">${item.title}</h4>
               <h4 class="item-price"> $${item.price}</h4>
           </div>
           <h5 class="description">${item.desc}</h5>`;
    menuItems.appendChild(menuItem);
  });
};

renderMenu(Menu);
