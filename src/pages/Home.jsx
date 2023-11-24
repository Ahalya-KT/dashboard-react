import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Cards from "../components/Cards";
import Button from "../components/Button";
import Lastcards from "../components/Lastcards";
import Connectbtn from "../components/Connectbtn";
import { FaBell } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";

function Home() {
  return (
    <div className="w-full">
      {/* navbar */}
      <Navbar />

      <div className="flex">
        {/* sidebar div1 */}
        <div>
          <Sidebar />
        </div>

        {/* div2 */}
        <div className="w-full">
          <div>
            <p className="text-2xl font-semibold py-14 px-12">
              Choose a plan that's just right for you
            </p>
            <div>{/* <MonthlyBtn /> */}</div>
          </div>

          {/* cards */}
          <div className="flex flex-col lg:flex-row lg:px-20 px-5 items-center justify-center gap-10 ">
            <Cards
              title="Basic"
              amnt="$89.99/mo"
              amunt2="$9.99/mo"
              button={<Button color="bg-orange-200" />}
              subtitle="What you'll get:"
              user="Upto 25 Users"
              storage="Upto 25gb Storage"
              email="Email Support"
              feature="EXPLORE FEATURES"
            />

            <Cards
              title="Standard"
              amnt="$189.99/mo"
              amunt2="$99.99/mo"
              button={<Button color="bg-rose-400" />}
              subtitle="What you'll get:"
              user="Upto 50 Users"
              storage="Upto 60gb Storage"
              email="Email+Chat Support"
              feature="EXPLORE FEATURES"
            />

            <Cards
              title="Premium"
              amnt="$389.99/mo"
              amunt2="$199.99/mo"
              button={<Button color="bg-purple-400" />}
              subtitle="What you'll get:"
              user="Upto 75 Users"
              storage="Upto 100gb Storage"
              email="Email+Chat+Whatsapp Support"
              feature="EXPLORE FEATURES"
            />
          </div>

          {/* last cards */}
          <div className="flex flex-row  items-center justify-centerlg:px-20 lg:py-9 px-8 gap-6 shadow-md">
            <Lastcards
              btn={<Connectbtn color="bg-lime-300" title="Free Forever" />}
              title="Free Starter"
              subtitle="The quickest and easiest way to try protocols with basic functionalitiies "
              button={<Button color="bg-lime-300" />}
              category="What you'll get"
              user="upto 8 users"
              store="Upto 3gb storage"
              mail="Email Support"
              about="Basic of Documents,Tasks Flow,Voting,Accounting,Banking,Notes,Investor,Director and Team Management included"
            />

            <Lastcards
              btn={<Connectbtn color="bg-cyan-600" title="Lets Connect" />}
              title="Enterprise plan"
              subtitle="Effortiessly customise and fine-tune services as your needs shifts,ensuring the perfect tools for succesS "
              button={<Button color="bg-cyan-600" />}
              category="What you'll get"
              user="upto 8 users"
              store="Upto 3gb storage"
              mail="Email Support"
              about="Customization of all other features"
            />
          </div>
        </div>

        {/* div 3 */}
        <div className=" bg-teal-50 w-28 relative hidden lg:block">
          <div className="p-5">
            <FaBell size={25} className="text-blue-700 bg-white" />
          </div>
          <div className="p-5 absolute bottom-56  ">
            <AiOutlinePlus size={25} className="text-pink-500 " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
