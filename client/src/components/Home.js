import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Home() {
  return (
    <>
      <Navbar />
      <div
        className="nav"
        
      >
        
        <h1 className="p-8 ml-12 text-4xl font-bold text-[#1D6697]">
          Automatic Pairing
        </h1>
        <div className="home">
          <div className="home">
            <h2 className="text-black bg-white border-[#1D6697] border-4 p-4 w-4/5 font-medium rounded-lg shadow-lg text-centre">
              Putting students into random <br></br> pairings takes FOREVER.{" "}
              <br></br> Automatic pairing app is here to <br></br> save you
              hours each week! <br></br> Providing a fun, free, and easy way to{" "}
              <br></br> create student study pairs. We provide a solution to the
              pairing problem. For the teachers, leaders,<br></br>
              lectures and other groups who are involved in dealing with users
              or people,<br></br>
              this system is for you. <br></br>
              It allows you to automatically put people into pairs and keep
              track of the pairs at just a click of a button. <br></br>
              This gives efficiency in dealing with large number <br></br>
              of people.
            </h2>
          </div>
         

        

        <div className="contact mt-20">
          <div className="background">
            <div>
              <div className="mx-40">
                <h1 className="text-6xl pb-8 pt-4">Contact us </h1>
                <h3 className="text-2xl pb-4">
                  Our friendly team would like to hear from you
                </h3>
                <div className="bg-[#EDF4F9] border-2 border-[#1D6697] rounded-3xl w-2/3 ">
                  <div className="p-8">
                    <form>
                      <label for="fname">Full Name</label>
                      <br></br>
                      <input
                        type="text"
                        id="fname"
                        className="border-b-2 border-b-[#1D6697] shadow-lg rounded-2xl w-3/4 pl-4 pt-4 pb-4"
                        name="firstname"
                        placeholder="Full name.."
                      />
                      <br></br>
                      <label for="email">Email Address</label>
                      <br></br>
                      <input
                        type="text"
                        id="email"
                        className="border-b-2 border-b-[#1D6697] shadow-lg rounded-2xl w-3/4 pl-4 pt-4 pb-4"
                        name="email"
                        placeholder="Email Address.."
                      />
                      <br></br>
                      <label for="phone">Phone Number</label>
                      <br></br>
                      <input
                        type="text"
                        id="phone"
                        className="border-b-2 border-b-[#1D6697] shadow-lg rounded-2xl w-3/4 pl-4 pt-4 pb-4"
                        name="phone "
                        placeholder="Phone Number.."
                      />
                      <br></br>
                      <label for="message">Message</label>
                      <br></br>
                      <textarea
                        id="message"
                        className="border-b-2 border-b-[#1D6697] shadow-lg rounded-2xl w-3/4 pl-4 pt-4 pb-4"
                        name="message"
                        placeholder="Write something.."
                      ></textarea>
                      <br></br>
                      <input
                        type="submit"
                        className="bg-[#1D6697] shadow-lg text-white rounded-2xl pr-4 pl-4 pt-4 pb-4 justify-center"
                        value="Send Message"
                      />
                      <br></br>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        {/* <footer className="bg-[#1D6697] h-36 text-white">
          <div className="flex">
            <div className="pr-96 pl-4 pt-8">
              <h3>Feel free to reach us out!</h3>
            </div>
            <div className="pr-96 pt-8">
              <h3>Visit us Today!</h3>
              <a href="#" class="fa fa-facebook"></a>
              <a href="#" class="fa fa-twitter"></a>
              <a href="#" class="fa fa-instagram"></a>
              <h3>Copyright: AutomaticPairing</h3>
            </div>
            <div className="pt-8">
              <h3>Get in touch</h3>
              <h3>Email</h3>
              <h4>02-200-000</h4>
            </div>
          </div>
        </footer> */}
      </div>
    </>
  );
}

export default Home;
