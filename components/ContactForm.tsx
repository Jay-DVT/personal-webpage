export default function ContactForm() {
    return (
    <form className='sm:ml-3' name="contact" action="/success" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <p className='mt-1'>
          <label htmlFor="yourname">
            Your Name:
          </label> 
            <br />
          <input className='w-full' type="text" name="name" id="yourname" />
        </p>
        <p className='mt-1'>
          <label htmlFor="youremail">
            Your Email:
          </label> <br />
          <input className='w-full' type="email" name="email" id="youremail" />
        </p>
        <p className='mt-1'>
          <label htmlFor="yourmessage">
            Message:
          </label> <br />
          <textarea className='w-full' name="message" id="yourmessage"></textarea>
        </p>
        <p className='mt-1'>
          <button 
            className={`py-2 text-black rounded-[10px] bg-gradient-to-r from-[#38FF34] to-[#CAFC01] hover:text-[#CAFC01] hover:from-transparent hover:border-[#CAFC01] border-2 border-transparent px-[70px] font-bold`} 
            type="submit">Send</button>
        </p>
      </form>
    )
  }

