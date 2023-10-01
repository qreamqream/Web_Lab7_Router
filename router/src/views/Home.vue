<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="(destination, index) in travelList" :key="index">
        <div class="bg-white rounded-lg shadow-lg p-4">
          <router-link :to="{ name: 'booking', params: { id: index + 1 } }">
            <img
              :src="destination.img"
              class="w-full fixed-image-height rounded-t-lg"
              alt="..."
              @click="goToBooking"
            />
          </router-link>

          <!-- onclike -->
          <div class="p-4">
            <h5 class="text-xl font-semibold mb-2">{{ destination.name }}</h5>
            <p class="text-gray-600">{{ destination.description }}</p>
            <div class="mt-4">
              <div class="mb-4">
                <label
                  class="block text-sm text-gray-600 mt-1"
                  for="numBookings"
                  >จำนวนโต๊ะ</label
                >
                <input
                  class="border rounded-md py-2 px-3 w-full"
                  type="number"
                  v-model="destination.numBookings"
                  placeholder="Number of Bookings"
                />
              </div>
              <div class="mb-4">
                <label class="block text-sm text-gray-600 mt-1" for="bookerName"
                  >ชื่อผู้จอง</label
                >
                <input
                  class="border rounded-md py-2 px-3 w-full"
                  type="text"
                  v-model="destination.bookerName"
                  placeholder="Booker's Name"
                />
              </div>
              <div class="mb-4">
                <label
                  class="block text-sm text-gray-600 mt-1"
                  for="bookingDate"
                  >วันที่</label
                >
                <input
                  class="border rounded-md py-2 px-3 w-full"
                  type="date"
                  v-model="destination.bookingDate"
                />
              </div>
              <div class="mb-4">
                <label
                  class="block text-sm text-gray-600 mt-1"
                  for="phoneNumber"
                  >เบอร์โทร</label
                >
                <input
                  class="border rounded-md py-2 px-3 w-full"
                  type="text"
                  v-model="destination.phoneNumber"
                  placeholder="Phone Number"
                />
              </div>
              <div class="mb-4">
                <label
                  class="block text-sm text-gray-600 mt-1"
                  for="bookingTime"
                  >เวลา</label
                >
                <input
                  class="border rounded-md py-2 px-3 w-full"
                  type="time"
                  v-model="destination.bookingTime"
                />
              </div>
              <button class="w-full centered" @click="booking(destination)">
                Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <h1 id="listBooking" class="text-center text-2xl font-semibold mt-10 mb-5">
    List Booking
  </h1>
  <div class="table-container mb-2">
    <div class="table-card">
      <table
        class="w-full bg-coffee text-white table-auto"
        v-if="storeBooking.state.bookingList.length > 0"
        aria-describedby="listBooking"
      >
        <thead>
          <tr>
            <th class="px-4 py-2">#</th>
            <th class="px-4 py-2">Name</th>
            <th class="px-4 py-2">Bookings</th>
            <th class="px-4 py-2">Booker's Name</th>
            <th class="px-4 py-2">Booking Date</th>
            <th class="px-4 py-2">Phone Number</th>
            <th class="px-4 py-2">Booking Time</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(booking, index) in storeBooking.state.bookingList" :key="index">
            <td class="px-4 py-2">{{ index + 1 }}</td>
            <td class="px-4 py-2">{{ booking.name }}</td>
            <td class="px-4 py-2">{{ booking.numBookings }}</td>
            <td class="px-4 py-2">{{ booking.bookerName }}</td>
            <td class="px-4 py-2">{{ booking.bookingDate }}</td>
            <td class="px-4 py-2">{{ booking.phoneNumber }}</td>
            <td class="px-4 py-2">{{ booking.bookingTime }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import {  storeBooking } from "../store/bookingList";
import { travelList } from "../store/travelList";

const router = useRouter();

const booking = (destination) => {
  if (destination.numBookings > 0) {
    storeBooking.addBooking({
      name: destination.name,
      numBookings: destination.numBookings,
      bookerName: destination.bookerName,
      bookingDate: destination.bookingDate,
      phoneNumber: destination.phoneNumber,
      bookingTime: destination.bookingTime,
    });
  }
};
</script>

<style>
.fixed-image-height {
  height: 600px; /* Set your desired fixed height for the images */
  object-fit: cover; /* Preserve the aspect ratio */
}

button {
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 500;
  color: #000;
  background-color: #f5efe6;
  border: #000;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  padding: 10px 20px; /* ปรับขนาดของปุ่มตามที่คุณต้องการ */
}

.centered {
  display: flex;
  align-items: center;
  justify-content: center;
}

button:hover {
  background-color: #d9bfa6;
  box-shadow: 0px 15px 20px rgba(46, 0, 0, 0.1);
  color: #fff;
  transform: translateY(-7px);
}

button:active {
  transform: translateY(-1px);
}

/* สไตล์สำหรับตาราง */
table {
  width: 100%;
  border-collapse: collapse;
}

table,
th,
td {
  border: 1px solid #f5efe6;
}

th,
td {
  padding: 10px;
  text-align: center;
  color: #382200;
}

/* สไตล์สำหรับหัวข้อ */
th {
  background-color: #b98a5b;
  color: #f5efe6;
  font-weight: bold;
}

/* สไตล์สำหรับข้อมูลแถว */
tr:nth-child(even) {
  background-color: #d9bfa6;
}

.table-container {
  overflow-x: auto;
  margin-left: auto;
  margin-right: auto;
  max-width: 160vh;
}

@media screen and (max-width: 600px) {
  .table-container table {
    font-size: 14px;
  }
  .table-container th,
  .table-container td {
    padding: 8px;
  }
}
</style>
