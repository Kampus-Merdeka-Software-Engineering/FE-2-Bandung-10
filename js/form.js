
//GET Booking by id

// async function sendBooking() {
//   try {
  //     const response = await fetch(`${API_BASE_URL}/*geth7id*`);
  //     const data = await response.json();
  //     //koneksi ke html
  //     const messageContainer = document.getElementById("");
  //     messageContainer.innerHTML = "";
  //     data.data.forEach((message) => {
    //       const newMessageList = document.createElement("li");
    //       newMessageList.textContent = `${message.name}: ${message.message}`;
    //       messageContainer.appendChild(newMessageList);
    //     })
    //   } catch (err) {
      //     console.error(err);
      //   }
      // }
      
      //POST Booking API /form
      
      // document.addEventListener("DOMContentLoaded", function () {
        //   const messageForm = document.getElementById("form");
        
        //   messageForm.addEventListener("submit", async function (event) {
          //     event.preventDefault();
 
          //     const fullname = document.getElementById("fullname").value;
          //     const email = document.getElementById("email").value;
          //     const phone = document.getElementById("phone").value;
          //     const roomsSelector = document.getElementById("rooms");
          //     const rooms_id = roomsSelector.value;
          //     const check_in = document.getElementById("checkin").value;
          //     const check_out = document.getElementById("checkout").value;
          //     const adults_amount = document.getElementById("adults").value;
          //     const childs_amount = document.getElementById("childs").value;
          
          //     if (!fullname || !email || !phone || !rooms_id || !check_in || !check_out || !adults_amount || !childs_amount) {
            //       showSweetAlert(
              //         "Error",
              //         "Please complete all the columns in the form!",
              //         "error"
              //       );
              //       return;
              //     }
              
              //     const formData = {
                //       fullname, 
                //       email, 
                //       phone,
                //       rooms_id,
                //       check_in,
                //       check_out ,
                //       adults_amount,
                //       childs_amount,
                //     };
                
                //     try {
                  //       const response = await fetch(
                    //         `${API_URL}/form`,
                    //         {
                      //           method: "POST",
//           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify(formData),
  //         }
  //       );
  
  //       if (!response.ok) {
    //         throw new Error("The form submission encountered an error.");
    //       }
    
    //       showSweetAlert(
      //         "Success",
      //         "Booking Rooms has been sent. Check it in the History page",
      //         "success"
      //       ).then(() => {
        //         window.location.href = "index.html";
        //       });
        //     } catch (error) {
          //       console.error("Error:", error.message);
          //       showSweetAlert(
            //         "Error",
            //         "The message sending failed. Please try again later.",
            //         "error"
            //       );
            //     }
            //   });
            
            //   function showSweetAlert(title, text, icon) {
              //     return Swal.fire({
                //       title: title,
                //       text: text,
                //       icon: icon,
                //       confirmButtonColor: "#645cff",
                //     });
                //   }
                // });
                
const API_URL = "https://be-2-bandung-10-production-8992.up.railway.app";
//POST Booking
document.addEventListener("DOMContentLoaded", function () {
  const messageForm = document.getElementById("form");
 
  messageForm.addEventListener("submit", function (event) {
    event.preventDefault();
 
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const rooms_id = document.getElementById("rooms").value;
    const check_in =  new Date(document.getElementById("checkin").value).toISOString();
    const check_out = new Date(document.getElementById("checkout").value).toISOString();
    const adults_amount = document.getElementById("adults").value;
    const childs_amount = document.getElementById("childs").value;
 
    if (!fullname || !email || !phone || !rooms_id || !check_in || !check_out || !adults_amount || !childs_amount) {
      showSweetAlert(
        "Error",
        "Please complete all the columns in the form!",
        "error"
      );
      return;
    }
 
    const formData = {
      fullname, 
      email, 
      phone,
      rooms_id,
      check_in: new Date(Date.parse(check_in)),
      check_out: new Date(Date.parse(check_out)),
      adults_amount,
      childs_amount,
    };
 
    // Kirim data ke backend
    fetch(`${API_URL}/form`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("The form submission encountered an error.");
        }
        return response.json();
      })
      .then((data) => {
        showSweetAlert(
          "Success",
          "Booking Rooms has been sent. Check it in the History page",
          "success",
        ).then(() => {
          //setelah sukses arahkan ke home
          window.location.href = "index.html";
        });
      })
      .catch((error) => {
        console.error("Error:", error.message);
        showSweetAlert(
          "Error",
          "The message sending failed. Please try again later.",
          "error",
        );
      });
  });

  function showSweetAlert(title, text, icon) {
    return Swal.fire({
      title: title,
      text: text,
      icon: icon,
      confirmButtonColor: "#645cff",
 // disini untuk ubah tulisan
   });
  }
});

  //GET Rooms API /rooms
  async function setupRoomsPage() {
    try {
      const response = await fetch(`${API_URL}/rooms`);
      const roomsData = await response.json();
      console.log(roomsData, "Rooms")
  
      const selector = document.getElementById("rooms");
      roomsData.data.forEach((room) => {
        const optionRooms = document.createElement("option");
        optionRooms.value = room.id;
        optionRooms.textContent = room.rooms; // Assuming room.name is the property containing room names
        selector.appendChild(optionRooms);
      });
    } catch (error) {
      console.error("Error", error);
    }
  }
  
  setupRoomsPage();
  
  

