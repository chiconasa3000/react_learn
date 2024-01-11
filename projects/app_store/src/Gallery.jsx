import {getImageUrl,today, formatDate} from './utils';
import Clock from './Clock';

export function Card({children}){ 
  return(
    <>
      <div 
        className="card" 
        style={{
          padding: "2px 2px",
          border:"solid", 
          borderRadius:"10%",
          display: "inline-block"
        }}
      >
        {children}
      </div>
    </>
  ); 
}

export function Avatar({
  person, 
  size, 
  theme={ 
    backgroundColor: "black",
    color: "pink",
  }}){
  

  return(
    <>
      <h3>{person.name}'s Profile</h3>
      <Card>
        <img
          src={getImageUrl(person)}
          alt={person.description}
          width={size}
          height={size}
          className = "avatar"
        />
      </Card>
      <ul style={theme}>
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
      <h1>Amazing scientist </h1>
      <Clock color="green" time={formatDate(today)}/>
      <Avatar
        person={{
          name: "Katsuko Saruhashi",
          description: "Katsuko Saruhashi",
          imageId: "YfeOqp2"
        }}
        size={100}
      />

      <Avatar 
        person={{
          name: "Aklilu Lemma",
          description: "Aklilu Lemma",
          imageId: "OKS67lh"
        }}
        size={80}
      />

      <Avatar 
        person={{
          name: "Lin Lanying",
          imageId: "1bX5QH6"
        }}
        size={50}
      />
    </section>
  );
}
