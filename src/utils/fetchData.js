export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9ba539354cmsh662e24aae5fe6fep1ec52cjsn5d4458cd9052',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  },
}
  
  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': '9ba539354cmsh662e24aae5fe6fep1ec52cjsn5d4458cd9052',
    },
  };

  export const BMIOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9ba539354cmsh662e24aae5fe6fep1ec52cjsn5d4458cd9052',
      'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
    }
  };
  
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };