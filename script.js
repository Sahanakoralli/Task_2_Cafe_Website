const items=[
{name:"Classic Cappuccino",cat:"Coffee",price:160,icon:"☕",desc:"Espresso, silky milk and a soft cocoa finish."},
{name:"Iced Latte",cat:"Coffee",price:190,icon:"🧋",desc:"Chilled espresso with creamy milk over ice."},
{name:"Butter Croissant",cat:"Food",price:140,icon:"🥐",desc:"Flaky, golden and baked fresh every morning."},
{name:"Avocado Toast",cat:"Food",price:280,icon:"🥑",desc:"Sourdough, avocado, herbs and lemon."},
{name:"Chocolate Cake",cat:"Dessert",price:220,icon:"🍰",desc:"Rich chocolate sponge with silky ganache."},
{name:"Berry Cheesecake",cat:"Dessert",price:240,icon:"🍓",desc:"Creamy cheesecake with seasonal berries."},
{name:"Fresh Lemonade",cat:"Beverage",price:130,icon:"🍋",desc:"Fresh lemon, mint and a little sweetness."},
{name:"Cold Cocoa",cat:"Beverage",price:180,icon:"🥤",desc:"Icy cocoa topped with light cream."}
];
const grid=document.getElementById("menuGrid");
function render(cat="All"){
 const list=cat==="All"?items:items.filter(i=>i.cat===cat);
 grid.innerHTML=list.map(i=>`<article class="menu-card"><div class="menu-photo">${i.icon}</div><div class="menu-body"><h3>${i.name}</h3><p>${i.desc}</p><span class="menu-price">₹${i.price}</span></div></article>`).join("");
}
document.querySelectorAll(".chip").forEach(btn=>btn.addEventListener("click",()=>{
 document.querySelectorAll(".chip").forEach(b=>b.classList.remove("active"));btn.classList.add("active");render(btn.dataset.cat);
}));
document.getElementById("reservationForm").addEventListener("submit",e=>{
 e.preventDefault();
 const msg=document.getElementById("reserveMessage");
 const date=new Date(document.getElementById("rdate").value+"T00:00:00");
 if(date<new Date(new Date().toDateString())){msg.style.color="#c4320a";msg.textContent="Please choose a future date.";return;}
 msg.style.color="#16824b";msg.textContent="Reservation request sent! We will contact you for confirmation.";
 e.target.reset();
});
render();
