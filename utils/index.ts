import { CarCardProps, FilterProps } from "@/types";

export async function fetchCars (filter:FilterProps){
    const headers = {
            'X-RapidAPI-Key': '30bb75c425mshf5d7de2f3a47d62p1c706bjsn96023bd60bee',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'

    }
    const {manufacturer,year,fuel,limit,model} = filter
    const res = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {headers:headers});
    const result = await res.json();
    return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };

export const generateCarImageUrl = (car:CarCardProps,angle?:string)=>{
    const url = new URL('https://cdn.imagin.studio/getimage')
    const {make,year,model} = car
    url.searchParams.append('customer','hrjavascript-mastery')
    url.searchParams.append('make',make)
    url.searchParams.append('modelFamily',model.split(' ')[0])
    url.searchParams.append('zoomType','fullscreen')
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angel',`${angle}`)
    return `${url}`
}

export const updateSearchParams = (type:string,value:string)=>{
    const searchParams = new URLSearchParams(window.location.search)
    searchParams.set(type,value)
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`
    return newPathname
}