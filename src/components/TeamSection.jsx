import React from 'react';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

const SocialIcon = ({ Icon }) => (
  <div className="w-6 h-6 flex items-center justify-center bg-zinc-700 rounded-full">
    <Icon className="w-3 h-3 text-gray-400" />
  </div>
);


const DummyCylinder = ({ isLong ,isRightSide }) => (
  <div className={`hidden lg:block border-white border-opacity-40 border-y  ${isLong ? "h-32 w-2/5  " : "h-32  flex-1 "} ${isRightSide ?'border-e rounded-e-full ': 'border-s rounded-s-full' }`}></div>
);



const TeamMember = ({ name, role, isLeader ,index}) => {
  return (
    <div className='flex  gap-7 justify-center '>

      <DummyCylinder isLong={index % 2 === 0} isRightSide ={true}/>

    <div className={`flex items-center w-96 lg:w-2/6 overflow-hidden rounded-full h-24 md:h-32 ${isLeader ? "bg-indigo-600" : "bg-zinc-800"}`}>
        <div className="w-1/2 h-full bg-white bg-opacity-20"></div>
        <div className="w-1/2 flex flex-col justify-center px-4 py-2">
          <h3 className="text-white font-semibold text-sm">{name}</h3>
          <p className="text-gray-300 text-xs">{role}</p>
          <div className="flex space-x-1 mt-1">
            <SocialIcon Icon={Twitter} />
            <SocialIcon Icon={Instagram} />
            <SocialIcon Icon={Linkedin} />
          </div>
        </div>
      </div>

     <DummyCylinder isLong={index % 2 !== 0} isRightSide ={false}/>

    </div>
  );
};

const TeamSection = () => {
  return (
    <div className="bg-black text-white p-8 mx-10 md:my-20">
      <div className="mb-8">
        <h2 className="font-bold text-center mb-5 text-4xl">Our leaders</h2>
        <p className="text-2xl font-bold text-center">" Each product is crafted with passion and dedication. Meet our leader ! "</p>
      </div>
      <div className="flex flex-col gap-8">
        <TeamMember name="Cody Fisher" role="CEO Founder" isLeader={true} index={0}  />
        <TeamMember name="Kristin Watson" role="Manager" isLeader={false} index={1}/>
        <TeamMember name="Leslie Alexander" role="Design Leader" isLeader={false} index={2} />
      </div>
    </div>
  );
};

export default TeamSection;