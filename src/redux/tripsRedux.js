/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;

  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // TODO - filter by duration

  if (filters.duration) {
    output = output.filter(trip => trip.days >= filters.duration.from && trip.days <= filters.duration.to);
  }

  // TODO - filter by tags

  if (filters.tags) {
    const pattern = new RegExp(filters.tags, 'i');
    output = output.filter(trip => pattern.test(trip.tags));
  }

  // TODO - sort by cost descending (most expensive goes first)
  output.sort(function (a, b) {
    let firstPrice = a.cost.replace('$', '');
    let secondPrice = b.cost.replace('$', '');
    return parseInt(firstPrice) < parseInt(secondPrice) ? 1: -1;
  });
  return output;
};

export const getTripById = ({trips}, tripId) => {
  let filtered = trips;

  // TODO - filter trips by tripId
  for (let index = 0; index < filtered.length; index++) {
    if (filtered[index].id === tripId) {
      const pattern = new RegExp(tripId, 'i');
      filtered = filtered.filter(trip => pattern.test(trip.id));
    }
  }
  // console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered[0] : {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) => {
  let filtered = trips;
  // TODO - filter trips by countryCode
  for (let index = 0; index < filtered.length; index++) {
    if (filtered[index].country.code === countryCode) {
      const pattern = new RegExp(countryCode, 'i');
      filtered = filtered.filter(trip => pattern.test(trip.country.code));
    }
  }
  //console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered.length ? filtered : [{error: true}];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;
// action types
// action creators
// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */