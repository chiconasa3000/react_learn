export function Profile(){
  return(
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Jhonson"
    />
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
