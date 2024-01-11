// today
export const today = new Date();
let options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "America/Lima",
  timeZoneName: "short",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};

export function formatDate(date){
  return new Intl.DateTimeFormat(
    'en-US',
    options,
  ).format(date);
} 

export function getImageUrl(person, size='s'){
  return(
    'http://i.imgur.com/' + person.imageId + size + '.jpg'
  );
}
