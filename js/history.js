const API_URL = "https://be-2-bandung-10-production-8992.up.railway.app";

async function getRoomDetails(rooms_id) {
  try {
    const response = await fetch(`${API_URL}/rooms/${rooms_id}`);
    const roomData = await response.json();
    return roomData.rooms; // Assuming 'room_name' is the property containing the room names
  } catch (error) {
    console.error("Error fetching room details:", error);
    return "Room Details Unavailable";
  }
}

async function getBooking() {
  try {
    const response = await fetch(`${API_URL}/form`);
    const booking = await response.json();

    const getForm = document.getElementById("getForm");
    booking.data.forEach(async (bookingItem) => {
      const roomName = await getRoomDetails(bookingItem.rooms_id);

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
          <td class="td">${roomName}</td>
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

// const API_URL = "https://be-2-bandung-10-production-8992.up.railway.app";

// async function getRoomDetails(rooms_id) {
//   try {
//     const response = await fetch(`${API_URL}/rooms/${rooms_id}`);
//     const roomData = await response.json();
//     // console.log(roomData, "Ini Room Data");
//     return roomData.rooms; // Assuming 'room_name' is the property containing the room names
//   } catch (error) {
//     console.error("Error fetching room details:", error);
//     return "Room Details Unavailable";
//   }
// }

// async function getBooking() {
//   try {
//     const response = await fetch(`${API_URL}/form`);
//     const booking = await response.json();
//     // console.log(booking.data, "Rooms");

//     const getForm = document.getElementById("getForm");
//     booking.data.forEach((bookingItem) => {
//       console.log(bookingItem);
//       const div = document.createElement("tr");
      
//       const formatDate = (dateString) => {
//         const date = new Date(dateString);
//         const formattedDate = `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${date.getFullYear()}`;
//         return formattedDate;
//       };

//       const formattedCheckIn = formatDate(bookingItem.check_in);
//       const formattedCheckOut = formatDate(bookingItem.check_out);

//       div.innerHTML = `
//       <tr id="getForm" class="tr">
//         <td class="td">${bookingItem.fullname}</td>
//         <td class="td">${bookingItem.email}</td>
//         <td class="td">${bookingItem.phone}</td>
//         <td class="td">${bookingItem.rooms_id}</td>
//         <td class="td">${formattedCheckIn}</td>
//         <td class="td">${formattedCheckOut}</td>
//         <td class="td">${bookingItem.adults_amount}</td>
//         <td class="td">${bookingItem.childs_amount}</td>  
//       </tr>
//       `;
//       getForm.appendChild(div);
//     });
//   } catch (err) {
//     console.error(err);
//   }
// }

// getBooking();
