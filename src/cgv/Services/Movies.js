// import React from 'react';
import axios from 'axios';


const getDataMoviesById = async (id, lang = 'en-US') => {

     const url = `https://api.themoviedb.org/3/movie/${id}?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&&language=${lang}&append_to_response=videos,images&include_image_language=en,null`;
     const res = await axios.get(url);
     const result = res.status === 200 ? res.data : {};
     return result;
}


const getDataUpcoming = async (page = 1, lang = 'en-US') => {
     // lay ra cacs bo phim tu hien ai den 3 thang sau

     let date = new Date();
     let today = date.getDate();
     today = today < 10 ? "0" + today : today;

     let month = date.getMonth() + 1;// get month tra ve thang tinh tu 0-11 ne ta can phai cong them 1 vao
     month = month < 10 ? "0" + month : month;

     let year = date.getFullYear();
     //gte la lay ngay thang nam cua ngay hom do
     let gte = `${year}-${month}-${today}`;

     //gia tri lte cong them 3 thang tiep theo

     let futureDate = new Date();
     futureDate.setTime(date.getTime() + (129600 * 60 * 1000));//lay theo 
     // lay ra ngya hien tai cua 2 thang tiep theo
     let today2 = futureDate.getDate();
     today2 = today2 < 10 ? "0" + today2 : today2;


     let month2 = futureDate.getMonth() + 1;// get month tra ve thang tinh tu 0-11 ne ta can phai cong them 1 vao
     month2 = month2 < 10 ? "0" + month2 : month2;
     let year2 = futureDate.getFullYear();

     let lte = `${year2}-${month2}-${today2}`;


     const url = `https://api.themoviedb.org/3/discover/movie?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=${lang}
     -US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}
     &release_date.gte=${gte}&release_date.lte=${lte}&with_release_type=3|2`;

     const res = await axios.get(url);
     const result = res.status === 200 ? res.data : {};
     return result;



};



export const api = { getDataUpcoming, getDataMoviesById };