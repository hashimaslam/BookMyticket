const fetch = require("node-fetch");

const items = [
  {
    id: "TH00120",
    theatre_name: "Abishek Cineplex, Chandini Chowk",
    city_id: 1
  },
  {
    id: "TH00121",
    theatre_name: "Apsara Cinema, Sahidabad",
    city_id: 1
  },
  {
    id: "TH00122",
    theatre_name: "DT-Cinemas, Greater Kailash 2",
    city_id: 1
  },
  {
    id: "TH00123",
    theatre_name: "Gagan Cinemas, Mandoli",
    city_id: 1
  },
  {
    id: "TH00124",
    theatre_name: "Apsara Cinema, Sahidabad",
    city_id: 1
  },
  {
    id: "TH00125",
    theatre_name: "BIG Cinemas",
    city_id: 2
  },
  {
    id: "TH00126",
    theatre_name: "Cinemax",
    city_id: 2
  },
  {
    id: "TH00127",
    theatre_name: "Maratha Mandir",
    city_id: 2
  },
  {
    id: "TH00128",
    theatre_name: "PVR Cinemas",
    city_id: 2
  },
  {
    id: "TH00129",
    theatre_name: "MovieTime Cinemas",
    city_id: 2
  },
  {
    id: "TH00130",
    theatre_name: "Prasads Multiplex",
    city_id: 3
  },
  {
    id: "TH00131",
    theatre_name: "Sandhya 35mm (Chikkadpally)",
    city_id: 3
  },
  {
    id: "TH00132",
    theatre_name: "Cine Planet (Kompally)",
    city_id: 3
  },
  {
    id: "TH00133",
    theatre_name: "Vishnu 70mm (Vanasthalipuram)",
    city_id: 3
  },
  {
    id: "TH00134",
    theatre_name: "Lakshmikala 70mm (Moosapet)",
    city_id: 3
  },
  {
    id: "TH00135",
    theatre_name: "Inox Cinema",
    city_id: 4
  },
  {
    id: "TH00136",
    theatre_name: "Gold Big Cinemas",
    city_id: 4
  },
  {
    id: "TH00137",
    theatre_name: "City Pride R Deccan Multiplex",
    city_id: 4
  },
  {
    id: "TH00138",
    theatre_name: "E Square Multiplex",
    city_id: 4
  },
  {
    id: "TH00139",
    theatre_name: "Fame JAI Ganesh Multiplex",
    city_id: 4
  },
  {
    id: "TH00140",
    theatre_name: "Luxe Cinema – Royapettah",
    city_id: 5
  },
  {
    id: "TH00141",
    theatre_name: "Udayam Theatre",
    city_id: 5
  },
  {
    id: "TH00142",
    theatre_name: "Escape Cinemas",
    city_id: 5
  },
  {
    id: "TH00143",
    theatre_name: "Mayajaal Cinemas",
    city_id: 5
  },
  {
    id: "TH00144",
    theatre_name: "Inox",
    city_id: 5
  },
  {
    id: "TH00145",
    theatre_name: "Fun Cinemas",
    city_id: 6
  },
  {
    id: "TH00146",
    theatre_name: "Eshwari Theatre",
    city_id: 6
  },
  {
    id: "TH00147",
    theatre_name: "Ajanth Talkies",
    city_id: 6
  },
  {
    id: "TH00148",
    theatre_name: "Lakshmi Theatre",
    city_id: 6
  },
  {
    id: "TH00149",
    theatre_name: "Vision Cinemas",
    city_id: 6
  },
  {
    id: "TH00150",
    theatre_name: "Kokers Movie House",
    city_id: 7
  },
  {
    id: "TH00151",
    theatre_name: "EVM Theatres",
    city_id: 7
  },
  {
    id: "TH00152",
    theatre_name: "Kanoos Cineamas",
    city_id: 7
  },
  {
    id: "TH00153",
    theatre_name: "Sagarika Theatre",
    city_id: 7
  },
  {
    id: "TH00154",
    theatre_name: "PVR Cinemas (LULU Mall)",
    city_id: 7
  },
  {
    id: "TH00155",
    theatre_name: "Cine Square CInemas",
    city_id: 8
  },
  {
    id: "TH00156",
    theatre_name: "Essem Entertainment Pvt. Ltd.",
    city_id: 8
  },
  {
    id: "TH00157",
    theatre_name: "IMAX 3D Theatre",
    city_id: 8
  },
  {
    id: "TH00158",
    theatre_name: "Cinepolis India Pvt. Ltd.",
    city_id: 8
  },
  {
    id: "TH00159",
    theatre_name: "Kirana store",
    city_id: 8
  },
  {
    id: "TH00160",
    theatre_name: "City Centre",
    city_id: 9
  },
  {
    id: "TH00161",
    theatre_name: "INOX",
    city_id: 9
  },
  {
    id: "TH00162",
    theatre_name: "Ajanta Cinema Hall",
    city_id: 9
  },
  {
    id: "TH00163",
    theatre_name: "Cinemax - Kolkata & IMAX",
    city_id: 9
  },
  {
    id: "TH00164",
    theatre_name: "RDB Big Cinemas",
    city_id: 9
  },
  {
    id: "TH00165",
    theatre_name: "PVR Anupam",
    city_id: 10
  },
  {
    id: "TH00166",
    theatre_name: "M2k Cinemas",
    city_id: 10
  },
  {
    id: "TH00167",
    theatre_name: "Wave Cinemas (Wave Mall)",
    city_id: 10
  },
  {
    id: "TH00168",
    theatre_name: "G3s Cinemas",
    city_id: 10
  },
  {
    id: "TH00169",
    theatre_name: "Delite Cinema",
    city_id: 10
  }
];

let thid = [];

items.map(items => {
  thid.push(items.id);
});

let city1 = thid.slice(0, 5);
let city2 = thid.slice(5, 10);
let city3 = thid.slice(10, 15);
let city4 = thid.slice(15, 20);
let city5 = thid.slice(20, 25);
let city6 = thid.slice(25, 30);
let city7 = thid.slice(30, 35);
let city8 = thid.slice(35, 40);
let city9 = thid.slice(40, 45);
let city10 = thid.slice(45, 50);
let result = [];
let datarr = [];
let count = 0;
fetch(
  `https://api.themoviedb.org/3/movie/now_playing?api_key=8360d0e72a693c7b24f696ce1b7e6268&language=en-US&page=1&region=IN`
)
  .then(res => res.json())
  .then(data => {
    result = data.results.slice(0, 17);
    let unid = 0;
    //city1
    for (let i = 0; i < city1.length; i++) {
      // console.log(result[i].id);
      for (let j = count; j < count + 3; j++) {
        datarr.push({
          id: unid,
          moviesid: result[j].id,
          theatre_id: city1[i],
          language: result[j].original_language,
          poster_path: result[j].poster_path,
          genre_ids: result[j].genre_ids,
          title: result[j].title,
          vote_count: result[j].vote_count,
          vote_average: result[j].vote_average,
          now_showing: true
        });
        unid++;
      }
      count = count + 3;
    }
    //city2
    count = 0;
    for (let i = 0; i < city2.length; i++) {
      // console.log(result[i].id);
      for (let j = count; j < count + 3; j++) {
        datarr.push({
          id: unid,
          moviesid: result[j].id,
          theatre_id: city2[i],
          language: result[j].original_language,
          poster_path: result[j].poster_path,
          genre_ids: result[j].genre_ids,
          title: result[j].title,
          vote_count: result[j].vote_count,
          vote_average: result[j].vote_average,
          now_showing: true
        });
        unid++;
      }
      count = count + 3;
    }
    //city3
    count = 0;
    for (let i = 0; i < city3.length; i++) {
      // console.log(result[i].id);
      for (let j = count; j < count + 3; j++) {
        datarr.push({
          id: unid,
          moviesid: result[j].id,
          theatre_id: city3[i],
          language: result[j].original_language,
          poster_path: result[j].poster_path,
          genre_ids: result[j].genre_ids,
          title: result[j].title,
          vote_count: result[j].vote_count,
          vote_average: result[j].vote_average,
          now_showing: true
        });
        unid++;
      }
      count = count + 3;
    }
    //city4
    count = 0;
    for (let i = 0; i < city4.length; i++) {
      // console.log(result[i].id);
      for (let j = count; j < count + 3; j++) {
        datarr.push({
          id: unid,
          moviesid: result[j].id,
          theatre_id: city4[i],
          language: result[j].original_language,
          poster_path: result[j].poster_path,
          genre_ids: result[j].genre_ids,
          title: result[j].title,
          vote_count: result[j].vote_count,
          vote_average: result[j].vote_average,
          now_showing: true
        });
        unid++;
      }
      count = count + 3;
    }
    //city5
    count = 0;
    for (let i = 0; i < city5.length; i++) {
      // console.log(result[i].id);
      for (let j = count; j < count + 3; j++) {
        datarr.push({
          id: unid,
          moviesid: result[j].id,
          theatre_id: city5[i],
          language: result[j].original_language,
          poster_path: result[j].poster_path,
          genre_ids: result[j].genre_ids,
          title: result[j].title,
          vote_count: result[j].vote_count,
          vote_average: result[j].vote_average,
          now_showing: true
        });
        unid++;
      }
      count = count + 3;
    }
    //city6
    count = 0;
    for (let i = 0; i < city6.length; i++) {
      // console.log(result[i].id);
      for (let j = count; j < count + 3; j++) {
        datarr.push({
          id: unid,
          moviesid: result[j].id,
          theatre_id: city6[i],
          language: result[j].original_language,
          poster_path: result[j].poster_path,
          genre_ids: result[j].genre_ids,
          title: result[j].title,
          vote_count: result[j].vote_count,
          vote_average: result[j].vote_average,
          now_showing: true
        });
        unid++;
      }
      count = count + 3;
    }
    //city7
    count = 0;
    for (let i = 0; i < city7.length; i++) {
      // console.log(result[i].id);
      for (let j = count; j < count + 3; j++) {
        datarr.push({
          id: unid,
          moviesid: result[j].id,
          theatre_id: city7[i],
          language: result[j].original_language,
          poster_path: result[j].poster_path,
          genre_ids: result[j].genre_ids,
          title: result[j].title,
          vote_count: result[j].vote_count,
          vote_average: result[j].vote_average,
          now_showing: true
        });
        unid++;
      }
      count = count + 3;
    }
    //city8
    count = 0;
    for (let i = 0; i < city8.length; i++) {
      // console.log(result[i].id);
      for (let j = count; j < count + 3; j++) {
        datarr.push({
          id: unid,
          moviesid: result[j].id,
          theatre_id: city8[i],
          language: result[j].original_language,
          poster_path: result[j].poster_path,
          genre_ids: result[j].genre_ids,
          title: result[j].title,
          vote_count: result[j].vote_count,
          vote_average: result[j].vote_average,
          now_showing: true
        });
        unid++;
      }
      count = count + 3;
    }
    //city9
    count = 0;
    for (let i = 0; i < city9.length; i++) {
      // console.log(result[i].id);
      for (let j = count; j < count + 3; j++) {
        datarr.push({
          id: unid,
          moviesid: result[j].id,
          theatre_id: city9[i],
          language: result[j].original_language,
          poster_path: result[j].poster_path,
          genre_ids: result[j].genre_ids,
          title: result[j].title,
          vote_count: result[j].vote_count,
          vote_average: result[j].vote_average,
          now_showing: true
        });
        unid++;
      }
      count = count + 3;
    }
    //city10
    count = 0;
    for (let i = 0; i < city10.length; i++) {
      // console.log(result[i].id);
      for (let j = count; j < count + 3; j++) {
        datarr.push({
          id: unid,
          moviesid: result[j].id,
          theatre_id: city10[i],
          language: result[j].original_language,
          poster_path: result[j].poster_path,
          genre_ids: result[j].genre_ids,
          title: result[j].title,
          vote_count: result[j].vote_count,
          vote_average: result[j].vote_average,
          now_showing: true
        });
        unid++;
      }
      count = count + 3;
    }
    // console.log(datarr);
  })
  .catch(err => console.log(err));

module.exports = { datarr, items };
