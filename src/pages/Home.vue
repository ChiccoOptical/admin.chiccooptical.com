<template>
  <div
    class="w-full h-screen bg-green-300 p-6 pb-0 flex flex-col"
  >
    <h1 class="text-5xl font-bold">Welcome, Jun</h1>

    <div id="homeBody" class="grid grid-cols-5 gap-x-4 h-full">
      <div id="" class="col-span-3"></div>

      <!-- MESSAGE THINGY -->
      <div id="messages" class="col-span-2 rounded-t-xl bg-white px-4">
        <!-- TITLE -->
        <div id="messagesHead" class="pt-8 pl-4 pb-4">
          <h1 class="text-4xl font-bold">Eye Exam Requests</h1>
        </div>
        <!-- EVERYTHING BELOW -->
        <div class="overflow-y-auto overflow-x-hidden messageScrollBar">
          <div
            v-for="(message, index) in messages"
            :key="index"
            id="littleMessage"
            class="p-4 flex flex-row items-center justify-between cursor-pointer"
          >
            <div>
              <h2 class="text-xl font-bold">{{message.name}}</h2>
              <p>{{message.message}}</p>
            </div>
            <div>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import db from "@/firebase";
import "firebase/firestore";
import message from '@/types/message'

export default Vue.extend({
  name: "Home",
  created() {
    db.firestore().collection('eyeexam').get().then(snapshot=>{
      snapshot.forEach(data=>{
        this.messages.push(data.data() as message)
      })
    })
  },
  data(){
    return{
      messages:[] as message[]
    }
  }
});
</script>

<style scoped>
#messages {
  border: 2px solid #cccccc;
  filter: drop-shadow(10px 0px 20px #0000003d);
}
#messagesHead {
  border-bottom: 2px solid #cccccc;
}
#littleMessage {
  border-bottom: 2px solid #cccccc;
}

.messageScroll::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
.messageScroll::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
.messageScroll::-webkit-scrollbar-thumb {
  background: #5c5c5c;
  border: 0px none #ffffff;
  border-radius: 50px;
}
.messageScroll::-webkit-scrollbar-thumb:hover {
  background: #303030;
}
.messageScroll::-webkit-scrollbar-thumb:active {
  background: #404040;
}
.messageScroll::-webkit-scrollbar-track {
  background: #ffffff;
  border: 0px none #ffffff;
  border-radius: 0px;
}
.messageScroll::-webkit-scrollbar-track:hover {
  background: #cfcfcf;
}
.messageScroll::-webkit-scrollbar-track:active {
  background: #a3a3a3;
}
.messageScroll::-webkit-scrollbar-corner {
  background: transparent;
}
</style>
