import React from 'react'

function Footer() {
  return (
    <footer class="relative bottom-0 left-0 z-20 p-4 w-full bg-[#4997d0] border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
    <span class="md:text-sm text-white text-sm sm:text-sm sm:text-center">© 2022 <a href="https://flowbite.com/" class="hover:underline">Aakash Development</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-0  text-white text-lg  dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>
    </ul>
</footer>
  )
}

export default Footer