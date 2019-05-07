import React from 'react';
import Travel from './Travel';


const travels = [
    {
        destination: "Pompei",
        country: "Italie",
        photo: "https://2static1.fjcdn.com/comments/Lost+my+tardis+n+pompei+im+afraid+_0546af35d9d774a4030d10adf48d2ab9.jpg",
        distance: "1634 km"
    },
    {
        destination: "New York",
        country: "United States",
        photo: "http://2.bp.blogspot.com/-fMysll2fqD8/VZryqn-iy_I/AAAAAAAAQ8I/BVUN71hBxlQ/s1600/tardis14.jpg",
        distance: "6458 km"
    },
    {
        destination: "Daintree",
        country: "Australia",
        photo: "https://www.themebeta.com/media/cache/728/files/chrome/images/201612/13/e08e8d81b2c48823ff980a9763afba82.jpeg",
        distance: "23270 km"
    },
    {
        destination: "Nambib",
        country: "Namibie",
        photo: "https://zupimages.net/up/19/19/medr.jpg",
        distance: "15879 km"
    },
    {
        destination: "Rovaniemi",
        country: "Finland",
        photo: "http://www.stamcafe.com/images/doctor-who-bbc-christmas-ident-tardis-snow.jpg",
        distance: "2958 km"
    }
];


const Travels = () => (
    <div>
        {travels.map(travel =>
        <Travel {...travel} />
        )}
    </div>
);

export default Travels;