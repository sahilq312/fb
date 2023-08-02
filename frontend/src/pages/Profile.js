import React, { useEffect, useState } from "react";
/* <div key={userData.id} className='w-full flex flex-col '>
      <h1 className='text-3xl'>{userData.name}</h1>
      <p >{userData.email}</p>
    </div> */
const Profile = () => {
  const [userData, setUserData] = useState("");
  const token = localStorage.getItem("token");
  useEffect(() => {
    fetch(
      "http://localhost:5000/user/profile",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": `${token}`,
        },
      },
      [token]
    )
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      });
  });
  return (
    <section className=" bg-blueGray-50">
      <div className="w-full px-2 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg mt-3">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4 flex justify-center">
                <div className="relative pt-6">
                  <img
                    alt="img"
                    src={"https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"}
                    className="shadow-xl w-40 rounded-full  align-middle border-none"
                  />
                </div>
              </div>
              <div className="w-full px-4 text-center mt-6">
                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                  <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      22
                    </span>
                    <span className="text-sm text-blueGray-400">Friends</span>
                  </div>
                  <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      10
                    </span>
                    <span className="text-sm text-blueGray-400">Photos</span>
                  </div>
                  <div className="lg:mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      89
                    </span>
                    <span className="text-sm text-blueGray-400">Comments</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700">
                {userData.name}
              </h3>
              <p className=" text-slate-400  ">{userData.email}</p>
              <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                Los Angeles, California
              </div>
              <div className="mb-2 text-blueGray-600 mt-10">
                <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                Solution Manager - Creative Tim Officer
              </div>
              <div className="mb-2 text-blueGray-600">
                <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                University of Computer Science
              </div>
            </div>
            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4">
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                    {userData.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
