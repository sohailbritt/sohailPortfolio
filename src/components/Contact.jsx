import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import sentMessage from '../assets/sent.json';

const Contact = () => {

  const form = useRef();
  const [UIupdate, setUIupdate] = useState(false);

  const UpdateMe = () => {
    setUIupdate(true);
    setTimeout(()=>{
      setUIupdate(false);
    },2500)
  }
 const sendEmail = (e) => {
  e.preventDefault();
  emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
      .then((result) => {
        result !== undefined ?  UpdateMe() : setUIupdate(false);
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
        alert('Failed to send the message, please try again.');
      });

 }

  return (
    <div>
        <div>
        <div>
        <div>
        <h1 className='text-white mt-24 ml-72 text-3xl'>Contact Me</h1>
        <div className='text-white ml-72 mt-24 w-4/6 p-8 ' style={{ border: "1px solid rgb(33 33 33)"}} >
{/* ------------------------------------------------------ */}
        <div className='ml-4 '>
        {UIupdate === false ? (<form className="w-[850px]" ref={form} onSubmit={sendEmail}>
            {/* ---------name------------- */}
      <input name="user_name" className="w-[850px] mt-4 bg-transparent appearance-none w-4/5 py-2  text-[#999999] font-light border-b-[1px] border-[#333333] leading-tight focus:outline-none focus:bg-transparent focus:border-b-[1px] focus:border-[#eee] focus:text-[#eee]" placeholder='Name' type="text" required />
{/* ---------------------email------------------- */}
     <input name="user_email" className="w-[850px] mt-12 bg-transparent appearance-none w-4/5 py-2  text-[#999999] font-light border-b-[1px] border-[#333333] leading-tight focus:outline-none focus:bg-transparent  focus:border-b-[1px] focus:border-[#eee] focus:text-[#eee]" placeholder='Email' type="email" required />
{/* ----------------------textarea--------------- */}
     <textarea placeholder="Describe yourself here..." name="message" className="w-[850px] mt-28 bg-transparent appearance-none w-4/5 py-2  text-[#999999] font-light border-b-[1px] border-[#333333] leading-tight focus:outline-none focus:bg-transparent focus:border-b-[1px] focus:border-[#eee] focus:text-[#eee] resize-none " row='4' col='50' type="text" required > </textarea>

     <button className="mt-12 mb-7 inline-flex items-center justify-center px-4 py-2 text-md font-light text-[#4bffa5] whitespace-no-wrap bg-none border rounded-none border-[#4bffa5] shadow-sm hover:bg-[#4bffa5] text-[#bbb] hover:text-black hover:border-[0px] focus:outline-none focus:shadow-none" type='submit'>
       Send Message
     </button>
</form>) : (<Player
                      autoplay
                      src={sentMessage}
                      style={{ height: '275px', width: '230px' }}>
                          <Controls visible={false} buttons={['play', 1, 'frame', 'debug']} />
                      </Player>)}

        </div>
        </div>
    </div>
    </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    </div>

  )
}

export default Contact