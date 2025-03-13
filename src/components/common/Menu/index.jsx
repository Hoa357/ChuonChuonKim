import React, { useState } from 'react'
import SideBarMenu from './SideBarMenu';

const MainMenu = () => {
    const mockMenu = [
    {
        title: "TRANG CHỦ",
        href:"#"
    },
    {
        title:"CHUYỆN NHÀ CHUỒN CHUỒN KIM",
        href:"#"
    },
    {
        title:"GIỮ CHỖ CHO BỮA CƠM NHÀ",
        href:"#"
    },
    {
        title:"MÂM CƠM HÔM NAY",
        href:"#"
    },
    {
        title:"LỜI THƯƠNG TỪ QUÝ KHÁCH",
        href:"#"
    },
    {
        title:"MÙI QUÊ TRONG GIAN BẾP",
        href:"#"
    },
    {
        title:"ĐƯỜNG VỀ NHÀ",
        href:"#"
    }
    ];
const [isOpen, setIsOpen] = useState(false);

const handleClose = () =>
{
    setIsOpen(false);
}
  return (
    <div>

   
    <div className="w-full bg-[#2a1d10] flex justify-between items-center">
    
       <div onClick={() => setIsOpen(true)}> <img src="assets/imgs/Logo/logo.png" alt="logo"></img> </div> 
       <div className ="w-full flex justify-center items-center" >
         <img className='w-[150px] aspect-square' src="assets/imgs/navbarMenu/menu.svg"></img>
       </div>
       
       <div className="hidden lg:flex justify-between items-center space-x[20px]">
        {mockMenu.map((x) => (
            <div>
                <p>x.title</p>
            </div>
        ))}
       </div>

          <img src="assets/imgs/navbarMenu/search.svg"></img>
      
       
    </div>
       <SideBarMenu isOpen={isOpen} handleCloseMenu={ handleCloseMenu } />

   </div>
  );
};

export default MainMenu;
