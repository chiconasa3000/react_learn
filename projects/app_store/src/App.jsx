import TheGallery from './Gallery';
import {Avatar as TheProfile} from './Gallery';

export default function App(){
  return (
    <div>
      <TheGallery/>
      <TheProfile 
        person={{
          name: "Lin Lanying",
          imageId: "1bX5QH6"
        }}
        size={50}
        theme={{
          backgroundColor: "black",
          color: "pink",
        }}

      />
    </div>
  );
}


