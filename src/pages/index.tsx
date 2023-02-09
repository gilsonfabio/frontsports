import Menubar from "../components/Menubar";
import Modalidades from "../components/Modalidades";
import Slideshow from "../components/SliderShow";

export default function Home() {
  return (
    <div className="flex flex-col bg-[#ffffff] w-full h-full" >
       <Menubar />
       <Slideshow />
       <div className='ml-2 mr-2 md:ml-36 md:mr-36 '>
            <Modalidades />
        </div>
    </div>
  )
}   
