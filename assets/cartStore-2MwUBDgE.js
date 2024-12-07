import{y as o,z as n}from"./index-CywCkABC.js";import{s as i}from"./statusStore-D8qcawhQ.js";const s="https://vue3-course-api.hexschool.io/api/darrenapi";class d{addToCart(t,e=1){return o.post(`${s}/cart`,{data:{product_id:t,qty:e}})}getCart(){return o.get(`${s}/cart`)}deleteOneProductFromCart(t){return o.delete(`${s}/cart/${t}`)}updateCartCount(t,e){return o.put(`${s}/cart/${t}`,{data:{product_id:t,qty:+e}})}}const c=new d,r=i(),u=n("cartStore",{state:()=>({cart:{}}),actions:{async addToCart(a,t){r.cartLoadingItem=a;try{let e=await c.addToCart(a,t);r.httpMessageState(e,"加入購物車"),this.getCart()}catch(e){console.log(e)}finally{r.cartLoadingItem=""}},async getCart(){r.isLoading=!0;try{let a=await c.getCart();this.cart=a.data.data}catch(a){console.log(a)}finally{r.isLoading=!1}},async deleteOneProduct(a){r.cartLoadingItem=a;try{let t=await c.deleteOneProductFromCart(a);r.httpMessageState(t,"刪除"),this.getCart()}catch(t){console.log(t)}finally{r.cartLoadingItem=""}},async updateCartCount(a,t){r.cartLoadingItem=a;try{let e=await c.updateCartCount(a,t);r.httpMessageState(e,"更新"),this.getCart()}catch(e){console.log(e)}finally{r.cartLoadingItem=""}}}});export{u as c};
