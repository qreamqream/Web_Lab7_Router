<script setup>
import { computed } from "vue";
import { storeBooking } from "../store/bookingList";
import { travelList } from "../store/travelList";
import { useRoute } from "vue-router";
const route = useRoute();

defineProps({
  id: String,
});

const travel = computed(() => {
  return travelList.value[route.params.id - 1];
});

const bookingListByTravel = computed(() => {
  return storeBooking.state.bookingList.filter(
    (booking) => booking.name === travel.value.name
  );
});
</script>

<template>
  <div class="container text-center mx-auto">
    <img
      :src="travel.img"
      alt="travel"
      class="fixed-image-height rounded-lg mx-auto"
    />
    <h1 class="text-3xl font-semibold py-2">{{  travel.name }}</h1>
    <p class="mt-2">{{ travel.description }}</p>

    <div class="table-container mb-2">
      <div class="table-card">
        <table
          class="w-full bg-coffee text-white table-auto"
          v-if="bookingListByTravel.length > 0"
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
            <tr v-for="(booking, index) in bookingListByTravel" :key="index">
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
  </div>
</template>

<style scoped>
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
