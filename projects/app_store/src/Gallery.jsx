export function Profile(){
  
  // today
  const today = new Date();
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

  //js object
  const person = {
    avatar: "https://i.imgur.com/yXOvdOSs.jpg",
    description: "Hedy Lamarr",
    name: "Hedy Lamarr",
    theme: {
      backgroundColor: 'black',
      color: 'green',
    }
  }
 
  function formatDate(date){
    return new Intl.DateTimeFormat(
      'en-US',
      options,
    ).format(date);
  } 

  return(
    <>
      <h1>{person.name}'s Todos for {formatDate(today)}</h1>
      <img
        src={person.avatar}
        alt={person.description}
        className = "photo"
      />
      <ul style={person.theme}>
        <li>Invent new traffic lights </li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </>
  );
}

export default function Gallery(){
  return(
    <section>
      <h4>Amazing scientist </h4>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
