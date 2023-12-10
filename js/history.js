
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

// async function fetchBooking() {
  //   try {
    //     const response = await fetch(`${API_URL}/form`);
    //     const booking = await response.json();
    //     // console.log(booking.data,"ini booking")
    //     const bookingContainer = document.getElementById("getForm");
    //     bookingContainer.innerHTML = `
    //       <li class="th">${book.fullname}</li>
    //       <li class="th">${book.email}</li>
    //       <li class="th">${book.phone}</li>
    //       <li class="th">${book.rooms_rooms}</li>
    //       <li class="th">${book.check_in}</li>
    //       <li class="th">${book.check_out}</li>
    //       <li class="th">${book.adults_amount}</li>
    //       <li class="th">${book.childs_amount}</li>;
    //     `;
    //     booking.data.forEach((book) => {
      //       const newBookingList = document.createElement("li");
      //       newBookingList.textContent = `${book.fullname}: ${book.email}: ${book.phone}: ${book.rooms_rooms}: ${book.check_in}: ${book.check_out}: ${book.adults_amount}: ${book.childs_amount}`;
      //       bookingContainer.appendChild(newBookingList);
      //     })
      //   } catch (err) {
        //     console.error(err);
        //   }
        // }
        // fetchBooking();
        
        
        // async function setupRoomsPage() {
          //   try {
            //     const response = await fetch(`${API_URL}/rooms`);
            //     const roomsData = await response.json();
            //     // console.log(roomsData.data, "Rooms")
            
            //     const selector = document.getElementById("rooms");
            //     roomsData.data.forEach((room) => {
              //       const optionRooms = document.createElement("option");
              //       optionRooms.value = room.id;
              //       optionRooms.textContent = room.rooms; // Assuming room.name is the property containing room names
              //       selector.appendChild(optionRooms);
              //     });
              //   } catch (error) {
//     console.error("Error", error);
//   }
// }

// setupRoomsPage();

const API_URL = "https://be-2-bandung-10-production-8992.up.railway.app";
async function getBooking() {
  try {
    const response = await fetch(`${API_URL}/form`);
    const booking = await response.json();
    // console.log(booking.data, "Rooms");

    const getForm = document.getElementById("getForm");
    booking.data.forEach((bookingItem) => {
      console.log(bookingItem);
      const div = document.createElement("tr");
      
      const formatDate = (dateString) => {
        const date = new Date(dateString);
        const formattedDate = `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${date.getFullYear()}`;
        return formattedDate;
      };

      const formattedCheckIn = formatDate(bookingItem.check_in);
      const formattedCheckOut = formatDate(bookingItem.check_out);
      div.innerHTML = `
      <tr id="getForm" class="tr">
        <td class="td">${bookingItem.fullname}</td>
        <td class="td">${bookingItem.email}</td>
        <td class="td">${bookingItem.phone}</td>
        <td class="td">${bookingItem.rooms_id}</td>
        <td class="td">${formattedCheckIn}</td>
        <td class="td">${formattedCheckOut}</td>
        <td class="td">${bookingItem.adults_amount}</td>
        <td class="td">${bookingItem.childs_amount}</td>  
      </tr>
      `;
      getForm.appendChild(div);
    });
  } catch (err) {
    console.error(err);
  }
}

getBooking();
