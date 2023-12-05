import React from 'react'
import { AiOutlineStrikethrough } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io"
import { CiMail } from "react-icons/ci";
import { MdWindow } from "react-icons/md"
 import download from "../images/download.png"
 import { FcInvite } from "react-icons/fc"
 import { IoMdAnalytics } from "react-icons/io"
 import { CgProfile } from "react-icons/cg"
 import { MdTravelExplore } from "react-icons/md"
 import { GiGingerbreadMan } from "react-icons/gi"
 import Ninja from "../images/ninja.jpg"
 import { FaPeopleLine } from "react-icons/fa6"
 import { IoChevronForward } from "react-icons/io5"
 import Prototype from "../images/prototype.jpg"
 import UI_Designer from "../images/UI.jpg";
 import { PiToggleRightThin } from "react-icons/pi"
 import { FaCirclePlus } from "react-icons/fa6"
 import { SlSocialDropbox } from "react-icons/sl"
 import { BiLogoNetlify } from "react-icons/bi"
 import { FaStaylinked } from "react-icons/fa6"
 import progress from "../images/progress.jpg";
 import { CiEdit } from "react-icons/ci"
 import loading from "../images/load.jpg";
 import { FcElectricity } from "react-icons/fc"
 import { MdOutlineWork } from "react-icons/md"
 import { FaUserGraduate } from "react-icons/fa6"
 
function Header() {
  return (
    <div >
      <div className='text-black flex justify-between '>
        <div >
           <div className='flex border-2 shadow-md p-1 rounded-sm w-80 text-2xl my-2 '> 
           <FcElectricity  className='mt-1 ml-2 text-3xl'/>  <span> spehre</span> 
           </div>
          <div className='mx-1 mt-3 flex p-1 border-2 rounded-md border-opacity-20 '>
          <MdWindow className='mt-2 mx-2 text-lg text-purple-600' /> <span className='m-1 font-bold text-purple-600'> Home</span>
            </div> 

          <div className='mx-1 mt-3 flex p-1 opacity-50'>
          <FcInvite className='mt-1 mx-2 text-lg text-purple-600'/> <span className=' font-semibold'>Job Invites</span>
            </div>

            <div className='mx-1 mt-1 flex p-1 opacity-40'>
          <IoMdAnalytics className='mt-1 mx-2 text-lg text-purple-600'/> <span className=' font-semibold'>Analytics</span>
            </div>  

            <div className='mx-1 mt-1 flex p-1 opacity-40'>
          <CgProfile className='mt-1 mx-2 text-lg text-purple-600'/> <span className=' font-semibold'> My Profile </span>
            </div>

            <div className='mx-1 mt-1 flex p-1 opacity-40'>
          <MdTravelExplore className='mt-1 mx-2 text-lg text-purple-600'/> <span className=' font-semibold'> Explore </span>
            </div>

        <div className='underline mt-8 mx-2 underline-offset-2 border-2 my-3'> 
        </div>

          <div className='p-4 text-xl font-sans '>
             Communities Feed
            
             <div className='text-sm flex mt-4 justify-around'>
                  <GiGingerbreadMan className='text-2xl mt-2 ml-2'/>
                      <div className='text-md  font-semibold'>  Indonesia UI Designer
                      <div className='opacity-60'> 734 members</div> </div>
             </div>
            
             <div className='text-sm flex mt-4 justify-around'>
                  <img src={Ninja} alt='' className='max-w-[40px] max-h-[40px] '/>
                      <div className='text-md  font-semibold'>  Indonesia UX Resea....
                      <div className='opacity-60'> 125 members</div> </div>
             </div>

             <div className='text-sm  flex mt-6 justify-around'>
                  <img src={Prototype} alt='' className='max-w-[35px] max-h-[35px] border rounded-full ml-[-20px]'/>
                      <div className='text-md  font-semibold ml-[-40px] '> Prototyping Club
                      <div className='opacity-60'> 891 members</div> </div>
             </div>


             <div className='text-sm  flex mt-6 justify-around'>
                  <img src={UI_Designer} alt='' className='max-w-[40px] max-h-[40px] border rounded-full  ml-3'/>
                      <div className='text-md  font-semibold  ml-4'> Indonesia UI Designer
                      <div className='opacity-60'> 241 members</div> </div>
             </div>
              
                  <p className='flex justify-evenly  mt-8 ml-20 text-blue-500'> Show 5 more  <IoChevronForward className='mt-2 mx-2'/> </p>
            

             <div className='flex justify-around mt-20 text-sm ml-2 opacity-60'>
               <div> About </div>
               <div> Accessibility</div>
               <div> Help </div> 
             </div>
           <div className='flex justify-around mt-6 text-sm ml-1 opacity-60'>
             <div>Privacy & Terms</div>
             <div> Advertise </div>
             <div> more </div>
            </div>  
            </div>
              <span className='m-16 '>  <strong className='text-violet-600'>spehre.io</strong>@2023</span>
            
        </div>
<div>
        <div className=" left-80 absolute top-12  h-40  bg-indigo-600 w-screen ">
         <div className='absolute mt-4 ml-6 left-80 top-40 max-w-[1240px] h-screen shadow-lg bg-slate-100 rounded-lg'> 
        <div className=' m-6  flex justify-around  gap-80 border-2 ml-0 mt-0 p-4 rounded mr-0'> 
         <button className="text-xl  font-semibold text-indigo-500 hover:text-green-900"> About</button>
         <button className="text-xl opacity-75"> Skills & Certification </button>
         <button className="text-xl opacity-75"> Posts</button>
         <button className="text-xl opacity-75"> Spaces</button>
        </div >
           

            <div>
              <div className='flex justify-between'>
              <div className='ml-6 p-4 opacity-70' > The discovery was made by Richard McClintock , a professor of latin 
               at Hampden-Sydney College in Virginia , who faced the impetuous recurrence of the darkword
               consectetur in the text Lorem ipsum researched its origins to identify them in sections 1.10.32
                and 1.10.33 of the aforementione. </div>
                 <CiEdit className='m-3 text-4xl text-purple-600 hover:text-green-600'/>
                </div>
                 <div className=' mt-8 mx-2 underline-offset-2 border-2 my-3'></div>
                      <div className='text-xl p-4 font-semibold  '> Experience 
                        
                        <div className='flex justify-between'>

                           
                       <div className='flex'>
                      <MdOutlineWork  className='text-purple-600 mt-8 ml-4 text-4xl '/>
                      <div className='mt-5 ml-2 text-lg'> Crisis Intervention Specialist
                             <div className='text-base opacity-75 '>
                               January 2023 - Present
                               <div className='text-sm opacity-60'> Icoderz-Ahmedabad,India</div>
                             </div>

                             </div>
                             </div>
                             <div className='flex justify-between'>
                          <FaCirclePlus  className='mr-4 text-purple-600  hover:text-green-600'/>
                          <CiEdit  className='text-purple-600  hover:text-green-600'/>
                             </div>
                      </div>
                                <div className='text-base ml-12 mt-8 mr-6 font-normal'>  Work with clients and web studios as freelancer.Work in nextareas eCommerce web 
                                 projects creative landing pages; iOs and Android apps; corporate web sites and corporate identity 
                                  sometimes.</div>
                      </div>
                          
                         <div  className=' mt-8 mx-2 underline-offset-2 border-2 my-3'></div> 


     

                         <div className='text-xl p-4 font-semibold  '> Education
                        
                        <div className='flex justify-between'>

                           
                       <div className='flex'>
                      <FaUserGraduate  className='text-purple-600 mt-8 ml-4 text-4xl '/>
                      <div className='mt-5 ml-2 text-lg'> B.E-Electronics & Telecommunication Engg.
                             <div className='text-base opacity-75 '>
                               Aug 2015 - June 2019
                               <div className='text-sm opacity-60'> SBJITMR-Nagpur, India</div>
                             </div>

                             </div>
                             </div>
                             <div className='flex justify-between'>
                          <FaCirclePlus  className='mr-4 text-purple-600  hover:text-green-600'/>
                          <CiEdit  className='text-purple-600  hover:text-green-600'/>
                             </div>
                      </div>
                               
                      </div>
                </div>
                
                  
               
         </div>
        <div className='absolute top-40 left-0 bg-gray-100 shadow-md w-80 h-screen '>
            <img src={download} alt='' className=' absolute  border rounded-full left-10'/>
               <div className=' mt-40  ml-16 text-lg'> Aquib Khan
                 <div className='text-xs opacity-60 '> UI/UX Developer </div>
               <div className='flex gap-3 mt-2 ml-[-28px]'>
                <FaPeopleLine/> <span className='text-sm'>21 Followers</span > <span className='text-sm'>43 Following</span>
                </div>  
               </div>
               <div className='flex justify-around text-sm mt-3'>
               Make the profile visible to employees <PiToggleRightThin className='text-2xl text-indigo-600'/>
               </div>
               <div className='text-xs opacity-60 p-2'>your  profile and career goals will appear  when employer search our database for candidates</div>
            <div className='flex justify-between mt-2 p-2'>
             
             <div > Online Links</div> 

                <FaCirclePlus className='mt-2' />
            </div>
            <div className='text-sm p-[-1] ml-2 opacity-60'> Add your online portfolio links to increase your profile strength. </div>
           
            <div className=' mt-4 ml-2 max-w-[250px] h-8 shadow-xl bg-white rounded-md flex gap-5 text-lg'  > 
               <SlSocialDropbox className='ml-14'/>
               <BiLogoNetlify/>
               <FaStaylinked />
             </div>
             
             <div className='max-w-[250px] ml-2 mt-6 shadow-2xl h-58 bg-blue-50 rounded-xl '>
                    <span className='text-base font-semibold mt-2 ml-6'> Wheel of Oppurtunity </span>
                <img src={progress} alt='' className='w-25 h-25 rounded-full'  />
             </div>
              <div className='text-xl font-semibold m-6'> Your Ranking </div>
             <img src={loading} alt='' className='max-w-[300px] h-16 mt-[-18px]  text-gray-100' />
                   <span className='ml-14 opacity-80'> Hurray! you are in the top <strong className='text-violet-500 text-lg' > 27%</strong> </span> 
          </div> 
          
          </div>
          
          </div>
           
        <div className=' flex justify-between gap-2 mr-1'>
          <div>  <input  className='my-3 border-2 border-current  rounded' type='text' placeholder='search'/></div>
         
          <div>
          <IoMdNotificationsOutline className='my-3 text-2xl border-2 rounded-sm ' />
          </div>
          <div > 
          <CiMail className='my-3 border-2 text-2xl rounded-sm'/>
          </div>
             <img  className='w-[25px] h-[25px] my-3' src={download} alt='' />
          
        </div>
      </div>
    </div>
  )
}

export default Header