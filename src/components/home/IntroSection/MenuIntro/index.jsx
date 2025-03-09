import React from 'react'
import  MenuIntroItem  from './MenuIntroItem'
import './MenuIntro.css';


const MenuIntro = () => {
  const listMenu = [
    {
        img:"/assets/imgs/menuIntro/h1.jpg",
        title:"Một góc nhỏ bình yên",
        content:"Bước qua cánh cửa của Chuồn Chuồn Kim, bạn như chạm vào một miền ký ức dịu dàng. Ở đây, mỗi chiếc bàn gỗ, từng món đồ gốm, chiếc đèn treo đều mang hơi thở của một thời xưa cũ – nơi những bữa cơm nhà luôn ấm áp, đầy đủ hương vị và yêu thương.",
        href:"#",
    }
    ,
    {
        img:"/assets/imgs/menuIntro/h2.jpg",
        title:"Mỗi bữa cơm là một câu chuyện",
        content:"Thực đơn tại Chuồn Chuồn Kim không chỉ là những món ăn, mà là những câu chuyện về quê nhà. Từ bát canh rau xanh mát, dĩa cá kho đậm đà đến chén cơm trắng dẻo thơm – tất cả đều được nâng niu như một phần ký ức. Mỗi bữa ăn tại quán là một hành trình trở về với hương vị xưa, nơi cơm nhà không chỉ là món ăn, mà còn là sợi dây kết nối tình thân.",
        href:"#",
    },
    {
        
        img:"/assets/imgs/menuIntro/h3.jpg",
        title:"Vị ngon từ thiên nhiên",
        content:"Chúng tôi tin rằng, bữa cơm ngon bắt đầu từ những điều thuần khiết nhất. Rau xanh được hái trực tiếp từ Chuồn Chuồn Kim Garden, nơi từng luống rau, cọng hành, nhánh rau thơm đều lớn lên trong sự nâng niu của đất lành và bàn tay người chăm sóc. Gia vị được tuyển chọn cẩn thận, từng nguyên liệu đều mang theo hương vị nguyên bản của thiên nhiên. Từ nông trại đến bàn ăn, mỗi món ăn không chỉ là sự kết tinh của đất trời mà còn là cam kết về sự tươi sạch, an lành mà chúng tôi muốn gửi đến bạn.",
        href:"#",
    }
];

  return (
    <div class="menuIntro">
        
          {listMenu.map((a) => (
            <MenuIntroItem {...a} />
          )) }
        
    </div>
  );
};

export default MenuIntro;
