import {CheckCircle2} from 'lucide-react';
import integrationImg from '../assets/indigo/indigo-features.png'
import { checklistItems } from '../constants';

const Workflow = () => {
  return (
    <section className="mt-20">
      <div className="text-center">
            <span className="bg-neutral-900 text-[#3608FF] rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">workflow</span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-6 tracking-tight"> <span className="bg-gradient-to-b from-neutral-50 to-neutral-950 text-transparent bg-clip-text">Integrate with a click</span>
            </h2>
      </div>
      <div className="flex flex-wrap justify-center mt-20">
         <div className="p-2 w-full lg:w-1/2 self-center">
            <img src={integrationImg} alt="integration image"/>
         </div>
         <div className="pt-12 w-full lg:w-1/2 ">
            {checklistItems.map((item, index) => (
                <div key={index} className="flex mb-12 ">
                     <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                        <CheckCircle2 />
                     </div>
                     <div>
                        <h5 className="mt-1 mb-2 text-xl ">{item.title}</h5>
                        <p className="text-md text-neutral-500">{item.description}</p>
                     </div>
                </div>
            ))}
         </div>
      </div>
    </section>
  )
}

export default Workflow