import { useEffect, useState } from "react";
import { GiPistolGun } from "react-icons/gi";
import { AiOutlineReload } from "react-icons/ai";
import { GiDiceTarget } from "react-icons/gi";
import { legends, Maps, weaponsWithImages } from "../dictionaries/Loadout";
import LoadoutGrid from "./LoadoutGrid";
import {
  KingsCanyon,
  StormPoint,
  WorldsEdge,
  Olympus,
  BrokenMoon,
} from "../dictionaries/POIs";

const Form = () => {
  const [username1, setUsername1] = useState("");
  const [username2, setUsername2] = useState("");
  const [username3, setUsername3] = useState("");
  const [loadoutLoaded, setLoadoutLoaded] = useState(false);
  const [loadout, setLoadout] = useState([]);
  const [poi, setPoi] = useState("");
  const [randomPoi, setRandomPoi] = useState("");
  const [selectIgl, setIgl] = useState("");

  useEffect(() => {}, [loadoutLoaded]);

  const updateUsername1 = (e) => {
    setUsername1(e.target.value);
  };

  const updateUsername2 = (e) => {
    setUsername2(e.target.value);
  };

  const updateUsername3 = (e) => {
    setUsername3(e.target.value);
  };

  const usernames = [username1, username2, username3];
  // Enter the people playing and select one at random as IGL
  const getIgl = () => {
    let randomIgl;
    if (!username3) {
      randomIgl = Math.floor(Math.random() * usernames.length);
    } else {
      randomIgl = Math.floor(Math.random() * (usernames.length));
    }
    const igl = usernames[randomIgl];
    console.log(igl);
    setIgl(igl);
  };
  
  const handleSubmission = (e) => {
    e.preventDefault();
    setLoadoutLoaded(true);
    generateLoadout();
    // console.table(generateLoadout());
  };

  const getPrimaryWeapon = () => {
    let primaryLoadoutData =
      weaponsWithImages[Math.floor(Math.random() * weaponsWithImages.length)];
    console.log(primaryLoadoutData);
    const data = {
      weapon: primaryLoadoutData.weapon,
      img: primaryLoadoutData.img,
    };
    return data;
  };

  const getSecondaryWeapons = () => {
    let secondaryLoadoutData =
      weaponsWithImages[Math.floor(Math.random() * weaponsWithImages.length)];
    const data = {
      weapon: secondaryLoadoutData.weapon,
      img: secondaryLoadoutData.img,
    };
    return data;
  };

  const getLegend = () => {
    let selectALegend = legends[Math.floor(Math.random() * legends.length)];
    const data = {
      weapon: selectALegend.legend,
      img: selectALegend.img,
    };
    return data;
  };

  const getPOI = () => {
    let pointOfInterest;
    if (poi === "KingsCanyon") {
      pointOfInterest =
        KingsCanyon[Math.floor(Math.random() * KingsCanyon.length)];
    } else if (poi === "Olympus") {
      pointOfInterest = Olympus[Math.floor(Math.random() * Olympus.length)];
    } else if (poi === "StormPoint") {
      pointOfInterest =
        StormPoint[Math.floor(Math.random() * StormPoint.length)];
    } else if (poi === "WorldsEdge") {
      pointOfInterest =
        WorldsEdge[Math.floor(Math.random() * WorldsEdge.length)];
    } else if (poi === "BrokenMoon") {
      pointOfInterest =
        BrokenMoon[Math.floor(Math.random() * BrokenMoon.length)];
    } else {
      console.debug("there is no point");
    }
    console.log(pointOfInterest);
    setRandomPoi(pointOfInterest);
  };

  const generateLoadout = () => {
    getPOI();
    getIgl();
    let loadOutForAllTeamMembers = [
      {
        username: username1,
        primary: getPrimaryWeapon(),
        secondary: getSecondaryWeapons(),
        legend: getLegend(),
      },
      {
        username: username2,
        primary: getPrimaryWeapon(),
        secondary: getSecondaryWeapons(),
        legend: getLegend(),
      },
      {
        username: username3,
        primary: getPrimaryWeapon(),
        secondary: getSecondaryWeapons(),
        legend: getLegend(),
      },
    ];
    console.log(loadOutForAllTeamMembers);
    setLoadout(loadOutForAllTeamMembers);
  };

  return (
    <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
      <div class="max-w-lg mx-auto">
        {/* <p class="max-w-md mx-auto mt-4 text-center text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
          sunt dolores deleniti inventore quaerat mollitia?
        </p> */}
        {loadoutLoaded === true ? (
          ""
        ) : (
          <>
            <h1 class="text-2xl font-bold text-center text-indigo-600 sm:text-3xl">
              Enter teammates below:
            </h1>
            <form
              action=""
              class="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl bg-apexred-900"
              onSubmit={handleSubmission}
            >
              {/* <p class="text-lg font-medium">Sign in to your account</p> */}

              <div>
                <label for="team1" class="relative text-sm font-medium">
                  Teammate 1
                  <div class="flex mt-2">
                    <span class="animate-ping w-2.5 h-2.5 bg-green rounded-full absolute top-0 left-24"></span>
                    <span class="w-2.5 h-2.5 absolute top-0 left-28 text-xs">
                      required
                    </span>
                    <span class="w-2.5 h-2.5 bg-green rounded-full absolute top-0 left-24"></span>
                  </div>
                </label>

                <div class="relative mt-1">
                  <input
                    type="team1"
                    id="team1"
                    class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    placeholder="username1"
                    onChange={updateUsername1}
                    required={true}
                  />

                  <span class="absolute inset-y-0 inline-flex items-center right-4">
                    <GiPistolGun />
                  </span>
                </div>
              </div>

              <div>
                <label for="team2" class="relative text-sm font-medium">
                  Teammate 2
                  <div class="flex mt-2">
                    <span class="animate-ping w-2.5 h-2.5 bg-green rounded-full absolute top-0 left-24"></span>
                    <span class="w-2.5 h-2.5 absolute top-0 left-28 text-xs">
                      required
                    </span>
                    <span class="w-2.5 h-2.5 bg-green rounded-full absolute top-0 left-24"></span>
                  </div>
                </label>

                <div class="relative mt-1">
                  <input
                    type="team2"
                    id="team2"
                    class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    placeholder="username2"
                    onChange={updateUsername2}
                    required={true}
                  />

                  <span class="absolute inset-y-0 inline-flex items-center right-4">
                    <GiPistolGun />
                  </span>
                </div>
              </div>

              <div>
                <label for="team3" class="text-sm font-medium">
                  Teammate 3
                </label>

                <div class="relative mt-1">
                  <input
                    type="team3"
                    id="team3"
                    class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    placeholder="username3"
                    onChange={updateUsername3}
                  />

                  <span class="absolute inset-y-0 inline-flex items-center right-4">
                    <GiPistolGun />
                  </span>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-8 lg:grid-cols-2">
                <div class="relative">
                  <input
                    class="hidden group peer"
                    type="radio"
                    name="mapOption"
                    value="kingscanyon"
                    id="kingscanyon"
                    onClick={() => setPoi("KingsCanyon")}
                  />

                  <label
                    class="block p-4 text-sm font-medium transition-colors border border-gray-100 rounded-lg shadow-sm cursor-pointer peer-checked:border-blue-500 hover:bg-white peer-checked:ring-1 peer-checked:bg-white"
                    for="kingscanyon"
                  >
                    <span> Kings Canyon </span>

                    <img
                      class="object-cover h-32 w-full"
                      src={Maps.KingsCanyon}
                    />
                  </label>
                </div>

                <div class="relative">
                  <input
                    class="hidden group peer"
                    type="radio"
                    name="mapOption"
                    value="BrokenMoon"
                    id="BrokenMoon"
                    onClick={() => setPoi("BrokenMoon")}
                  />

                  <label
                    class="block p-4 text-sm font-medium transition-colors border border-gray-100 rounded-lg shadow-sm cursor-pointer peer-checked:border-blue-500 hover:bg-white peer-checked:ring-1 peer-checked:bg-white"
                    for="BrokenMoon"
                  >
                    <span> Broken Moon </span>

                    <img
                      class="object-cover h-32 w-full"
                      src={Maps.BrokenMoon}
                    />
                  </label>
                </div>

                <div class="relative">
                  <input
                    class="hidden group peer"
                    type="radio"
                    name="mapOption"
                    value="worldsedge"
                    id="worldsedge"
                    onClick={() => setPoi("WorldsEdge")}
                  />

                  <label
                    class="block p-4 text-sm font-medium transition-colors border border-gray-100 rounded-lg shadow-sm cursor-pointer peer-checked:border-blue-500 hover:bg-white peer-checked:ring-1 peer-checked:bg-white"
                    for="worldsedge"
                  >
                    <span> Worlds Edge </span>

                    <img
                      class="object-cover h-32 w-full"
                      src={Maps.WorldsEdge}
                    />
                  </label>
                </div>
                <div class="relative">
                  <input
                    class="hidden group peer"
                    type="radio"
                    name="mapOption"
                    value="stormpoint"
                    id="stormpoint"
                    onClick={() => setPoi("StormPoint")}
                  />

                  <label
                    class="block p-4 text-sm font-medium transition-colors border border-gray-100 rounded-lg shadow-sm cursor-pointer peer-checked:border-blue-500 hover:bg-white peer-checked:ring-1 peer-checked:bg-white"
                    for="stormpoint"
                  >
                    <span> Stormpoint </span>

                    <img
                      class="object-cover h-32 w-full"
                      src={Maps.Stormpoint}
                    />
                  </label>
                </div>
                <div class="relative">
                  <input
                    class="hidden group peer"
                    type="radio"
                    name="mapOption"
                    value="olympus"
                    id="olympus"
                    onClick={() => setPoi("Olympus")}
                  />

                  <label
                    class="block p-4 text-sm font-medium transition-colors border border-gray-100 rounded-lg shadow-sm cursor-pointer peer-checked:border-blue-500 hover:bg-white peer-checked:ring-1 peer-checked:bg-white"
                    for="olympus"
                  >
                    <span> Olympus </span>

                    <img class="object-cover h-32 w-full" src={Maps.Olympus} />
                  </label>
                </div>
              </div>

              <button
                type="submit"
                class="block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg bg-apexblue"
              >
                Ready Up
              </button>

              {/* <p class="text-sm text-center text-gray-500">
            No account?
            <a class="underline" href="">
              Sign up
            </a>
          </p> */}
            </form>
          </>
        )}
      </div>

      {loadoutLoaded === true && (
        <>
          {" "}
          <div class="block m-auto flex gap-x-4">
            <button
              class="flex items-center justify-center text-sm px-8 py-4 font-bold transition bg-green-100 border-4 border-black rounded-xl focus:outline-none focus:ring shadow-[6px_6px_0_0_#000] hover:shadow-none active:bg-green-50 w-64 h-20 m-auto"
              onClick={() => setLoadoutLoaded(false)}
            >
              New Loadout{" "}
              <span aria-hidden="true" class="ml-2 text-lg" role="img">
                <AiOutlineReload />
              </span>
            </button>

            <button
              class="flex items-center justify-center text-sm px-8 py-4 font-bold transition bg-green-100 border-4 border-black rounded-xl focus:outline-none focus:ring shadow-[6px_6px_0_0_#000] hover:shadow-none active:bg-green-50 w-64 h-20 m-auto"
              onClick={() => generateLoadout()}
            >
              Reroll{" "}
              <span aria-hidden="true" class="ml-2 text-lg" role="img">
                <GiDiceTarget />
              </span>
            </button>
          </div>
          <LoadoutGrid loadouts={loadout} poi={randomPoi} selectIgl={selectIgl} />
        </>
      )}
    </div>
  );
};

export default Form;
