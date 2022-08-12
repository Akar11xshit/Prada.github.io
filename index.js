const navHolder=document.createElement('div');
      document.body.appendChild(navHolder);
      navHolder.innerHTML=`
         <div class="nav">
          <div class="brand">
           <a href="/">
           <img src="https://allyourfonts.com/wp-content/uploads/2019/05/Prada-Font-Family-Free-Download.jpg"/>
           </a>
           <a href="/">
           <h3>
             PRADA
           </h3>
           </a>
         </div>

      <div class="menu-item">
        <a href="cart.html">Cart <span class="counter">0</span></a>
        <a href="signin.html">SignIn</a>
      </div>
      </div> `;

      const header=document.createElement('div');
                   document.body.appendChild(header);
                   header.innerHTML=`<h1 style="text-align: center;margin: 20px;">Our Products</h1>`;

                   const productList=[
     
                    {
                          brand:"PRADA",
                          name:"shirt",
                          id:0,
                          price: 4400,
                          img:"https://www.prada.com/content/dam/pradanux_products/U/UJL/UJL185/1YWUF0967/UJL185_1YWU_F0967_S_211_SLF.png/_jcr_content/renditions/cq5dam.web.white.800.1000.webp",
                          description:"100% pure cotton clothe",
                    },
                    {
                          brand:"PRADA",
                          name:"shirt",
                          id:1,
                          price: 4800,
                          img:"https://www.prada.com/content/dam/pradanux_products/U/UJN/UJN741/1YWWF0009/UJN741_1YWW_F0009_S_211_SLF.png/_jcr_content/renditions/cq5dam.web.white.800.1000.webp",
                          description:"100% pure cotton clothe",
                    },
                    {
                          brand:"PRADA",
                          name:"shirt",
                          id:2,
                          price: 5500,
                          img:"https://www.prada.com/content/dam/pradanux_products/U/UJL/UJL185/1YWTF0964/UJL185_1YWT_F0964_S_211_SLF.png/_jcr_content/renditions/cq5dam.web.white.800.1000.webp",
                          description:"100% pure cotton clothe",
                    },
                    {
                          brand:"PRADA",
                          name:"shirt",
                          id:3,
                          price: 5000,
                          img:"https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS400/1YV4F0009/UCS400_1YV4_F0009_S_211_SLF.png/_jcr_content/renditions/cq5dam.web.white.800.1000.webp",
                          description:"100% pure cotton clothe",
                    },
                    {
                          brand:"PRADA",
                          name:"shirt",
                          id:4,
                          price: 5000,
                          img:"https://www.prada.com/content/dam/pradanux_products/U/UJN/UJN741/1YZNF0009/UJN741_1YZN_F0009_S_211_SLF.png/_jcr_content/renditions/cq5dam.web.white.800.1000.webp",
                          description:"100% pure cotton clothe",
                    },
                    {
                          brand:"PRADA",
                          name:"shirt",
                          id:5,
                          price: 6500,
                          img:"https://www.prada.com/content/dam/pradanux_products/S/SJN/SJN282/1YMDF0002/SJN282_1YMD_F0002_S_211_SLF.png",
                          description:"suitable for western wear",
                    },
                    {
                          brand:"PRADA",
                          name:"shirt",
                          id:6,
                          price: 6700,
                          img:"https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1X9CF0P62/UCS319_1X9C_F0P62_S_182_SLF.png/_jcr_content/renditions/cq5dam.web.white.800.1000.webp",
                          description:"suitable for western wear",
                    },
                    {
                          brand:"PRADA",
                          name:"shirt",
                          id:7,
                          price: 6200,
                          img:"https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOVF011O/UCS319_1YOV_F011O_S_182_SLF.png/_jcr_content/renditions/cq5dam.web.white.800.1000.webp",
                          description:"suitable for western wear",
                    },
                    {
                          brand:"PRADA",
                          name:"shirt",
                          id:8,
                          price: 6000,
                          img:"https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png/_jcr_content/renditions/cq5dam.web.white.800.1000.webp",
                          description:"suitable for western wear",
                    },
                    {
                          brand:"PRADA",
                          name:"shirt",
                          id:9,
                          price: 6000,
                          img:"https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOSF014A/UCS319_1YOS_F014A_S_182_SLF.png/_jcr_content/renditions/cq5dam.web.white.800.1000.webp",
                          description:"suitable for western wear",
                    },
                    {
                          brand:"PRADA",
                          name:"shirt",
                          id:10,
                          price: 5800,
                          img:"https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS400/1YV5F0002/UCS400_1YV5_F0002_S_211_SLF.png/_jcr_content/renditions/cq5dam.web.white.800.1000.webp",
                          description:"Party Wear",
                    },
                    {
                          brand:"PRADA",
                          name:"shirt",
                          id:11,
                          price: 6800,
                          img:"https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1X9MF0KFS/UCS319_1X9M_F0KFS_S_182_SLF.png/_jcr_content/renditions/cq5dam.web.white.800.1000.webp",
                          description:"Party Wear",
                    },
                    {
                          brand:"PRADA",
                          name:"shirt",
                          id:12,
                          price: 5600,
                          img:"https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1X9MF0KFS/UCS319_1X9M_F0KFS_S_182_SLF.png/_jcr_content/renditions/cq5dam.web.white.800.1000.webp",
                          description:"Party Wear",
                    },
                    {
                          brand:"PRADA",
                          name:"shirt",
                          id:13,
                          price: 4000,
                          img:"https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1X9KF087W/UCS319_1X9K_F087W_S_182_SLF.png/_jcr_content/renditions/cq5dam.web.white.800.1000.webp",
                          description:"Party Wear",
                    },
                    {
                          brand:"PRADA",
                          name:"shirt",
                          id:14,
                          price: 8000,
                          img:"https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1X9MF0P5N/UCS319_1X9M_F0P5N_S_182_SLF.png/_jcr_content/renditions/cq5dam.web.white.800.1000.webp",
                          description:"Party Wear",
                    },
              
              
              ]
  const productHolder=document.createElement('div');
        productHolder.className="productContainer";
        document.body.appendChild(productHolder);
        
        var i;
        for(i=0;i<productList.length;i++){
          let product=productList[i];
          let cardHolder=document.createElement('div');
               cardHolder.className="cardContainer ";
               productHolder.appendChild(cardHolder);
               cardHolder.innerHTML=`
               <a href="showproduct.html?id=${product.id}">
               <div class="card">
                 <div class="product-img">
                 <img src=${product.img} />
               </div>
              <div class="card-body">
              <div class="row">
              <span>${product.name}</span>
              <span>Price :&#8377; ${product.price}</span>
              </div>
             <p>${product.description}</p>
             </div>
             </div>
             </a>
               `
        }
        // ?id=value

        const footerHolder=document.createElement('div');
              document.body.appendChild(footerHolder);
              footerHolder.innerHTML=`
               <div class="footer" style="background-color: whitesmoke;padding: 10px;">
              <p style="text-align: center;">all copy right resversed with <a href="#">PRADA</a></p>
              </div>
              `;
              let cartItem=localStorage.getItem("cartItem")?JSON.parse(localStorage.getItem("cartItem")):[];
              const counter=document.querySelector('.counter');
              counter.innerHTML=cartItem.length;