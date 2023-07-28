export async function getWorldWide(){
  return await fetch('https://disease.sh/v3/covid-19/all').then((res)=>res.json());
}

export async function getCountrySpecific(){
    return await fetch('https://disease.sh/v3/covid-19/countries').then((res)=>res.json());
}

export async function getGraphData(){
   return await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all').then((res)=>res.json());
}
