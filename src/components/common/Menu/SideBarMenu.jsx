import React from 'react'

const SideBarMenu = (props) => {
const {isOpen , handleCloseMenu} = props;

 return (
    <div>
    <div style={{transform: isOpen ? "translateX(0)" : "translateX(-100%)"}}
    className="bg-blue-300 fixed z-[100] w-[260px]">
    
    </div>

    <div style={{ display: isOpen ? "block" : "none"}} onClick={handleCloseMenu} className="bg-black/30 fixed inset-0">
          <img src="assets/imgs/navbarMenu/out.svg"></img>
    </div>

    </div>
 
 
  );
};

export default SideBarMenu;