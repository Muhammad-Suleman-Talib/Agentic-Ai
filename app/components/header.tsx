'use client'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Header() {
  const [nav, setnav] = useState(false)
  const navlink = [
    {name:'home',href:'/'},
    {name:'about',href:'/about'},
    {name:'blog',href:'/'},
    {name:'contact',href:'/'},
  ]
  return (
    <div className='w-full bg-[#64b1b4] text-black shadow-lg'>
      <div className='max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 '>
        <div className='flex justify-between items-center py-3 '>
          <div>
            <Link href={'/'}>
            <span className='cursor-pointer'>logo</span>
            </Link>
          </div>
          <nav>
            <ul className='hidden md:flex space-x-6 '>
              {navlink.map((link)=>(
                <li key={link.name}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <button onClick={()=>setnav(!nav) } className='md:hidden'>
            {nav ? <X/> : <Menu/>}
          </button>

        </div>
         <div className={`md:hidden ${nav ? 'block' : 'hidden'} text-center list-none` }>
          {navlink.map((link)=>(
            <li key={link.name} onClick={(()=> setnav(false))}>
              <Link href={link.href}> {link.name}</Link>
            </li>
          ))}
          </div>     
      </div>
      
    </div>
  )
}





// 'use client'
// import { Menu, X } from 'lucide-react'
// import Link from 'next/link'
// import React, { useState } from 'react'

// export default function Header() {
//   const [open ,setOpen] = useState(false)
//   const navlinks = [
//     {name:'home',href:'/'},
//     {name:'about',href:'/'},
//     {name:'services',href:'/'},
//     {name:'blog',href:'/'},
//   ]
//   return (
//     <div className='w-full bg-[#64b1b4] shadow-md '>
//       <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8 '>
//         <div className='flex justify-between py-4'>
//           <div>
//             <Link href={'/'}>
//             <span>logo</span>
//             </Link>
//           </div>
//             <nav>
//               <ul className='hidden md:flex space-x-6'>
//                 {navlinks.map((link)=>(
//                   <li key={link.name}>
//                     <Link href={link.href}>{link.name}</Link>
//                   </li>
//                 ))}
//               </ul> 
      
//             </nav>
//             <button onClick={(()=>setOpen(!open) )} className='md:hidden focus:outline-none'>
//               {open ? <X/>:<Menu/>}
//             </button>
//         </div>
//             <div className={`md:hidden ${open ? 'block' : 'hidden'}`}>
//               <ul>
//                 {navlinks.map((link)=> (
//                   <li key={link.name}>
//                     <Link href={link.href}>{link.name}</Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>      
//       </div>
      
//     </div>
//   )
// }






// 'use client'
// import { Menu, X } from 'lucide-react'
// import Link from 'next/link'
// import React, { useState } from 'react'

// export default function Header() {
//   const [open, setOpen] = useState(false)
//     const navlinks = [
//         {name:'home',href:'/'},
//         {name:'about',href:'/'},
//         {name:'services',href:'/'},
//         {name:'blogs',href:'/'},
//     ]
//   return (
//     <div className='w-full bg-[#64b1b4] text-white shadow-md'>
//       <div className='max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8'>
//             <div className='flex justify-between py-4'>
//                 <div className=''>
//                     <Link href={ '/'}>
//                     <span className='cursor-pointer '> logo </span>
//                     </Link>
//                 </div>   
//                 <nav>
//                     <ul className=' hidden md:flex space-x-6'>
//                         {navlinks.map((link)=>(
//                           <li key={link.name}>
//                             <Link href={link.href}>{link.name}</Link>
//                           </li>
//                         ))}
//                     </ul>
//                 </nav> 
//                 <button onClick={(()=> setOpen(!open))} className='md:hidden text-white focus:outline-none'>
//                   {open ? <X/> : <Menu/>}
//                 </button>
//             </div>
//             <div className={`md:hidden ${open ? 'block' : 'hidden'}`}>
//               <ul>
//                 {navlinks.map((link)=>(
//                   <li key={link.name}>
//                     <Link href={link.href}>{link.name}</Link>
//                   </li>
//                 ))}
//               </ul>

//             </div>
//       </div>
//     </div>
//   )
// }






// 'use client'
// import { Menu, X } from 'lucide-react'
// import Link from 'next/link'
// import React, { useState } from 'react'

// export default functon Header() {
//     const [open,setOpen] = useState(false)
//     const navlinks = [
//         {name:"Home",href:"/"},
//         {name:"about",href:"/"},
//         {name:"blogs",href:"/"},
//         {name:"news",href:"/"},
//     ]
//   return (
//     <div className=' w-full bg-[#64b1b4] text-white  shadow-md '>  
//         <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
//          <div className='flex justify-between items-center py-4'>
//             <div className='flex  items-center '>
//                 <Link href={'/'}><span className='cursor-pointer'>logo</span></Link>
//                 <div>
//                 <form action="#" className='flex items-center justify-center pl-4 '>
//                     <input type="search" placeholder='Search...' className='small:w-[150px]  sm:w-64  px-4 py-2 rounded-md bg-white focus:outline-none  '/>
//                     <button type='submit' className='bg-black text-white px-4 py-2 rounded-md'>Search</button>
//                 </form>
//                 </div>
//             </div>
            
//             <nav>
//                 <ul className=' hidden md:flex space-x-6'>
//                     {navlinks.map((links)=>(
//                         <li key={links.name} >
//                             <Link href={links.href}>{links.name}</Link>
//                         </li>
//                     ))}
//                 </ul>
//             </nav>
//             <button onClick={()=>setOpen(!open)} className='md:hidden text-white focus:outline-none'>
//                 {open ? <X/> : <Menu/>}
//             </button>
//          </div>
//          {/* mobile responsiveness */}
//             <div className={`md:hidden ${open ? 'block' : 'hidden'} text-center`}>
//                     <ul>
//                         {navlinks.map((links)=>(
//                             <li key={links.name} onClick={(()=>setOpen(false))}>
//                                 <Link href={links.href}>{links.name}</Link>
//                             </li>
//                         ))}
//                     </ul>
//             </div>

//         </div>
//     </div>
//   )
// }







// 'use client'
// import { Menu, X } from 'lucide-react';
// import Link from 'next/link'
// import React, { useState } from 'react'

// export default function Header() {
//     const [open, setOpen] = useState(false);
//     const navlinks = [
//         { name: "Home", href: "/" },
//         { name: "About", href: "/about" },
//         { name: "Services", href: "/services" },
//         { name: "Contact", href: "/contact" },
//     ];

//     return (
//         <div className='w-full bg-[#64b1b4] text-white shadow-md'>
//             <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
//                 <div className='flex justify-between items-center py-4'>
//                     <div>
//                         <Link href='/'><span className='cursor-pointer'>logo</span></Link>
//                     </div>
//                     <nav>
//                         <ul className='hidden md:flex space-x-6'>
//                             {navlinks.map((link) => (
//                                 <li key={link.name}>
//                                     <Link href={link.href}>{link.name}</Link>
//                                 </li>
//                             ))}
//                         </ul>
//                     </nav>
//                     <button className='md:hidden text-white focus:outline-none' onClick={() => setOpen(!open)}>
//                         {open ? <X /> : <Menu />}
//                     </button>
//                 </div>
//                 <div className={`md:hidden ${open ? 'block' : 'hidden'} text-center `}>
//                     <ul>
//                         {navlinks.map((link) => (
//                             <li key={link.name} className='mt-2  hover:text-black'>
//                                 <Link href={link.href} >{link.name}</Link>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// }



// 'use client';
// import { Menu, X } from 'lucide-react';
// import Link from 'next/link';
// import { useState } from 'react';

// export default function Header() {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className='w-full bg-[#64b1b4] text-white shadow-md'>
//       <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
//         <div className='flex justify-between items-center py-4'>
//           {/* Logo */}
//           <div className='text-2xl font-bold'>
//             <Link href='/'>
//               <span className='cursor-pointer'>Logo</span>
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <nav>
//             <ul className='hidden md:flex space-x-6'>
//               <li><Link href='/' className='hover:text-gray-900'>Home</Link></li>
//               <li><Link href='/about' className='hover:text-gray-900'>About</Link></li>
//               <li><Link href='/services' className='hover:text-gray-900'>Services</Link></li>
//               <li><Link href='/contact' className='hover:text-gray-900'>Contact</Link></li>
//             </ul>
//           </nav>

//           {/* Mobile Menu Button */}
//           <button
//             className='md:hidden text-white focus:outline-none'
//             onClick={() => setOpen(!open)}
//             aria-label='Toggle Menu'
//           >
//             {open ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         <div
//           className={`md:hidden ${open ? 'block' : 'hidden'} bg-[#64b1b4] mt-2 pb-4 transition-all duration-300 ease-in-out`}
//         >
//           <Link href='/' className='block py-2 text-center hover:text-gray-900'>Home</Link>
//           <Link href='/about' className='block py-2 text-center hover:text-gray-900'>About</Link>
//           <Link href='/services' className='block py-2 text-center hover:text-gray-900'>Services</Link>
//           <Link href='/contact' className='block py-2 text-center hover:text-gray-900'>Contact</Link>
//         </div>
//       </div>
//     </header>
//   );
// }