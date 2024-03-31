import React from 'react'

const ReSell = () => {
  return (
    <>
   <div className='blackticket'>
   <form >
    <h1 className='text-center text-4xl text-white bg-red-600 px-5 py-5 mt-10 mr-80 ml-80 rounded-lg'>ReSell Event Tickets</h1>
    <div class="grid gap-6 mb-6 md:grid-cols-2 ml-10 mr-10 mt-10">
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900">First name</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Arpit" required />
        </div>
        <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 ">Last name</label>
            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Jaswal" required />
        </div>
        <div>
            <label for="Event Name" class="block mb-2 text-sm font-medium text-gray-900 ">Event Name</label>
            <input type="text" id="event" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Seedhe Maut Lunch Break Tour 2024" required />
        </div>  
        <div>
            <label for="mobile" class="block mb-2 text-sm font-medium text-gray-900">Phone number(+91)</label>
            <input type="tel" id="mobile" class="bg-gray-50 border  border-gray-300 dark:text-white text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="9876543210" pattern="[0-9]{10}" required />
        </div>
        {/* <div>
            <label for="website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Website URL</label>
            <input type="url" id="website" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" required />
        </div> */}
        <div>
            <label for="Number of tickets" class="block mb-2 text-sm font-medium text-gray-900 ">Number of tickets</label>
            <input type="number" id="tickets" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required />
        </div>
        <div>
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Email address</label>
        <input type="email" id="email" class="bg-gray-50 mr-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="anonymous@gigbuddy.com" required />
        </div>
    </div>
    <div className='flex justify-center items-center mt-12'>
    <button type="submit" class="text-white  bg-blue-700 ml-10 mr-10 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </div>

</form>
</div>  
    </>
  )
}

export default ReSell