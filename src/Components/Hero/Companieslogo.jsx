import Airbnb from "../Logos/Airbnb";
import Google from "../Logos/Google";
import Mailchimp from "../Logos/Mailchimp";
import Masable from "../Logos/Masable";
import Microsoft from "../Logos/MIcrosoft";
import Spotify from "../Logos/Spotify";

export default function Companieslogo() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
          <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
            <a href="#" className="flex items-center lg:justify-center">
              <Airbnb></Airbnb>
            </a>
            <a href="#" className="flex items-center lg:justify-center">
              <Google></Google>
            </a>
            <a href="#" className="flex items-center lg:justify-center">
              <Microsoft></Microsoft>
            </a>
            <a href="#" className="flex items-center lg:justify-center">
              <Spotify></Spotify>
            </a>
            <a href="#" className="flex items-center lg:justify-center">
              <Mailchimp></Mailchimp>
            </a>
            <a href="#" className="flex items-center lg:justify-center">
              <Masable></Masable>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
