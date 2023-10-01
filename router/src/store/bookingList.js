import { ref, reactive } from "vue";


export const storeBooking = {
    state: reactive({
        bookingList: [],
        // bookingList : JSON.parse(window.localStorage.getItem("bookingList")) || [],
    }),
    addBooking(booking) {
        this.state.bookingList.push(booking);
        // window.localStorage.setItem("bookingList", this.state.bookingList);
    },
}
