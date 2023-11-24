import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Cards from "../components/Cards";
import Button from "../components/Button";
import Lastcards from "../components/Lastcards";

function Home() {
  return (
    <div>
      {/* navbar */}
      <Navbar />

      <div className="flex">
        {/* sidebar */}
        <div>
          <Sidebar />
        </div>

        <div>
          <div>
            <p className="text-2xl font-semibold py-14 px-12">
              Choose a plan that's just right for you
            </p>
            <div>{/* <MonthlyBtn /> */}</div>
          </div>

          {/* cards */}
          <div className="flex w-1/3 gap-16 px-20">
            <div className="">
              <Cards
                title="Basic"
                amnt="$89.99/mo"
                amunt2="$9.99/mo"
                button={<Button />}
                subtitle="What you'll get:"
                user="Upto 25 Users"
                storage="Upto 25gb Storage"
                Email="Email Support"
                feature="EXPLORE FEATURES"
              />
            </div>

            <div className="">
              <Cards
                title="Standard"
                amnt="$189.99/mo"
                amunt2="$99.99/mo"
                button={<Button />}
                subtitle="What you'll get:"
                user="Upto 50 Users"
                storage="Upto 60gb Storage"
                Email="Email+Chat Support"
                feature="EXPLORE FEATURES"
              />
            </div>

            <div className="">
              <Cards
                title="Premium"
                amnt="$389.99/mo"
                amunt2="$199.99/mo"
                button={<Button />}
                subtitle="What you'll get:"
                user="Upto 75 Users"
                storage="Upto 100gb Storage"
                Email="Email+Chat+Whatsapp Support"
                feature="EXPLORE FEATURES"
              />
            </div>
          </div>

          {/* last cards */}
          <div className="flex">
            <div className="py-14 px-20 ">
              <Lastcards
                title="Free Starter"
                subtitle="The quickest and easiest way to try protocols with basic functionalitiies "
                button={<Button />}
                category="What you'll get"
                user="upto 8 users"
                store="Upto 3gb storage"
                mail="Email Support"
                about="Basic of Documents,Tasks Flow,Voting,Accounting,Banking,Notes,Investor,Director and Team Management included"
              />
            </div>
            <div className="py-14 px-20">
              <Lastcards
                title="Enterprise plan"
                subtitle="Effortiessly customise and fine-tune services as your needs shifts,ensuring the perfect tools for succesS "
                button={<Button />}
                category="What you'll get"
                user="upto 8 users"
                store="Upto 3gb storage"
                mail="Email Support"
                about="Customization of all other features"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
