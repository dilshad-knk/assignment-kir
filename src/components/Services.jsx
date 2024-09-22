import React from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md'

const Services = () => {

    let services = [
    { name: 'BRAND IDENTITY',
     description : 'We provide digital solutions as Website Design, Mobile App Design, Landing Page design, Illustration, Animation, etc that increase company’s values',
     bg: true
    },
    { name: 'UX/UI DESIGN',
     description : 'We provide digital solutions as Website Design, Mobile App Design, Landing Page design, Illustration, Animation, etc that increase company’s values'
    },
    { name: 'WEBFLOW DEVELOPER',
     description : 'We provide digital solutions as Website Design, Mobile App Design, Landing Page design, Illustration, Animation, etc that increase company’s values'
    },
   
]
  return (
    <div className='mx-10 mt-10 rounded-md px-10 py-10 text-white bg-white bg-opacity-15 md:mx-20'>

        <div className='mb-5'>
                <h2 className='font-bold text-center mb-4 text-4xl md:mx-20'>Our services</h2>

                <p className='text-2xl text-center py-2'>We are a close-knit team of experts dedicated to crafting memorable and emotionally engaging websites, digital experiences, and native apps.</p>
        </div>


        <div className='flex flex-col md:flex-row gap-7'>
            {services.map(
                s => (
                    <div className={`flex flex-col  px-5 py-4 ${s.bg ? 'bg-custom-purple' : ''} p-2 rounded-md gap-2 hover:ring ring-blue-900`} key={s.name}>
                            <div className='flex justify-between'>
                                <h3 className='font-bold text-xl'>{s.name}</h3>
                                <MdOutlineArrowOutward className="ml-2 tex-white" size={20} />
                            </div>

                            <p className='ps-5'>{s.description}</p>
                    </div>
            )
            )}
        </div>

        



    </div>
  )
}

export default Services