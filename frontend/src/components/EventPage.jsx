import React,{useState, useEffect} from 'react'
import NavBar from './NavBar';

const EventPage = () => {
    const [showModal,setShowModal] = useState(false);
    const playTrailer = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    // useEffect(() => {
    //     const script = document.getElementById();
    //     script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    //     script.async = true;
    //     script.dataset.payment_button_id = 'pl_NyheRa9X967bVs';
    //     document.body.appendChild(script);

    //     return () => {
    //         document.body.removeChild(script);
    //     };
    // }, []);

  return (
    <>
    <NavBar currentPage="eventpage"/>
        <div className='text-center'>
            <h6 className='text-6xl font-sans mt-5 bg-slate-200'>Seedhe Maut: Lunch Break Tour 2024</h6>
            <div className=''>
                <div className='relative top-5 left-0 w-full h-full flex justify-center items-center'>
                <img className='w-[500px] h-[500px] rounded-lg border-solid border-black-400' src="https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2022/3/8/vycpwzww6qw9lfgqhszi/seedhe-maut" alt="" />
                <div className='w-[500px] relative left-20'>
                    <h1 className='font-medium font-sans text-2xl '>Description</h1>
                    <h3>Seedhe Maut is a hip hop duo from New Delhi, India, consisting of Siddhant Sharma and Abhijay Negi. The two met at Spit Dope Inc., a Delhi underground battle rap league organised by MC Kode and Encore ABJ. </h3>
                    <div>
                    {showModal && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg">
                        <button className="relative top-0 ml-100 right-0 text-red-700" onClick={closeModal}>Close</button>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/4nJ0T5bV3Yg?si=SLP1__m451BWkGwV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            )}
                   <div id="buy"></div>
                    <button type="button" className="text-white mt-6 bg-gray-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-black-600 dark:hover:bg-black-700 dark:focus:ring-black-900" onClick={playTrailer}>Watch Event Trailer</button>
                </div>
                </div>
                </div>
                
                

            </div>
        </div>
    </>
  )
}

export default EventPage