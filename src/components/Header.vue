<template>
  <div>
    <nav class="flex items-center justify-between flex-wrap bg-black p-6">
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div
          class="inline-block text-sm px-4 py-2 leading-none text-white border border-transparent hover:border-white mt-4 lg:mt-0"
        >
          <router-link to="/">Tasks</router-link>
        </div>
        <div
          class="inline-block text-sm px-4 py-2 leading-none text-white border border-transparent hover:border-white mt-4 lg:mt-0"
        >
          <router-link to="/account">My Account</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>