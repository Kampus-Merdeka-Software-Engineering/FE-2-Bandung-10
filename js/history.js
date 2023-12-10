
// const API_LOCAL = "http://localhost:3000"
// //GET Booking by id
// document.addEventListener("DOMContentLoaded", async () => {
//   getBooking();
//   if (window.location.pathname.includes("history.html")) {
//     await getBooking();
//   }
// });
// async function getBooking() {
//   try {
//     const response = await fetch("http://localhost:3000/form");
//     const booking = await response.json();
//     console.log(booking)
//     displayBookingForm(booking);
//     //koneksi ke html
//     // const bookingForm = document.getElementById("getForm");
//     // booking.forEach((booking) => {
//     //   const newBookingTable = document.createElement("td");
//     //   newBookingTable.className = "td";

//     //   newBookingTable.innerHTML = `
//     //   <td class="th">${booking.fullname}</td>
//     //   <td class="th">${booking.email}</td>
//     //   <td class="th">${booking.phone}</td>
//     //   <td class="th">${booking.rooms_id}</td>
//     //   <td class="th">${booking.check_in}</td>
//     //   <td class="th">${booking.check_out}</td>
//     //   <td class="th">${booking.adults_amount}</td>
//     //   <td class="th">${booking.childs_amount}</td>
//     //   `
      
//     //   bookingForm.appendChild(newBookingTable); 
//     // })
//   } catch (err) {
//     console.error(err);
//   }
// }

// function displayBooking(booking) {
//   const bookingArray = Array.isArray(booking) ? booking : [booking];
//   const getForm = document.getElementById("getForm");

//   bookingArray.forEach((bookingItem) => {
//     const td = document.createElement("tr");
//     td.innerHTML = `
//       <td class="th">${bookingItem.fullname}</td>
//       <td class="th">${bookingItem.email}</td>
//       <td class="th">${bookingItem.phone}</td>
//       <td class="th">${bookingItem.rooms_id}</td>
//       <td class="th">${bookingItem.check_in}</td>
//       <td class="th">${bookingItem.check_out}</td>
//       <td class="th">${bookingItem.adults_amount}</td>
//       <td class="th">${bookingItem.childs_amount}</td>
//     `;
//     getForm.appendChild(td);
//   });
// }

// // const bookingForm = async (booking) => {
// //   const getForm = document.getElementById("getForm")
// //   booking.forEach(booking => {
// //     const tr = document.createElement("tr")
// //     tr.innerHTML = `
// //       <td class="th">${booking.fullname}</td>
// //       <td class="th">${booking.email}</td>
// //       <td class="th">${booking.phone}</td>
// //       <td class="th">${booking.rooms_id}</td>
// //       <td class="th">${booking.check_in}</td>
// //       <td class="th">${booking.check_out}</td>
// //       <td class="th">${booking.adults_amount}</td>
// //       <td class="th">${booking.childs_amount}</td>
// //       `

// //       getForm.appendChild(tr);
// //   });
// // }
const API_URL = "https://be-2-bandung-10-production-8992.up.railway.app";

document.addEventListener("DOMContentLoaded", async () => {
  if (window.location.pathname.includes("history.html")) {
    await getBooking();
  } else {
    console.error("Error", error);
  }
});

async function getBooking() {
  try {
    const response = await fetch(`${API_URL}/form`);
    const booking = await response.json();
    console.log(booking);
    displayBooking(booking);
  } catch (err) {
    console.error(err);
  }
}

function displayBooking(booking) {
  const bookingArray = Array.isArray(booking) ? booking : [booking];
  const getForm = document.getElementById("getForm");

  bookingArray.forEach((bookingItem) => {
    console.log(bookingItem);
    const td = document.createElement("td");
    // td.innerHTML = `
    //   <td class="th">${bookingItem.fullname}</td>
    //   <td class="th">${bookingItem.email}</td>
    //   <td class="th">${bookingItem.phone}</td>
    //   <td class="th">${bookingItem.rooms_id}</td>
    //   <td class="th">${bookingItem.check_in}</td>
    //   <td class="th">${bookingItem.check_out}</td>
    //   <td class="th">${bookingItem.adults_amount}</td>
    //   <td class="th">${bookingItem.childs_amount}</td>
    // `;
    getForm.appendChild(td);
  });
}
