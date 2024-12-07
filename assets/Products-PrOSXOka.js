import{m as _}from"./modalMixins-eD7zMzD1.js";import{_ as g,o as b,c as f,b as t,t as c,w as a,v as p,f as M,h as w,i as C,a as u,F as h,j as U,r as m,n as k}from"./index-CywCkABC.js";import{D as V,P as D}from"./Pagination-PpUMT5td.js";import"./component-functions-DgVAUczx.js";const $={props:{product:{type:Object,default(){return{}}}},watch:{product(){this.tempProduct=this.product}},data(){return{modal:{},tempProduct:{}}},methods:{async uploadFile(){const s=this.$refs.fileInput.files[0],o=new FormData;o.append("file-to-upload",s);let n=await this.axios.post("https://vue3-course-api.hexschool.io/api/darrenapi/admin/upload",o);this.tempProduct.imageUrl=n.data.imageUrl}},mixins:[_]},F={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},L={class:"modal-dialog modal-xl",role:"document"},N={class:"modal-content border-0"},S={class:"modal-header bg-primary text-white"},B={class:"modal-title",id:"exampleModalLabel"},j={class:"modal-body"},I={class:"row"},T={class:"col-sm-4"},z={class:"mb-3"},E={class:"mb-3"},O=["src"],q={class:"col-sm-8"},A={class:"mb-3"},G={class:"row gx-2"},H={class:"mb-3 col-md-6"},J={class:"mb-3 col-md-6"},K={class:"row gx-2"},Q={class:"mb-3 col-md-6"},R={class:"mb-3 col-md-6"},W={class:"mb-3"},X={class:"mb-3"},Y={class:"mb-3"},Z={class:"form-check"},tt={class:"modal-footer"};function ot(s,o,i,n,e,r){return b(),f("div",F,[t("div",L,[t("div",N,[t("div",S,[t("h5",B,[t("span",null,c(e.tempProduct.id?"編輯產品":"新增產品"),1)]),o[11]||(o[11]=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1))]),t("div",j,[t("div",I,[t("div",T,[t("div",z,[o[12]||(o[12]=t("label",{for:"image",class:"form-label"},"輸入圖片網址",-1)),a(t("input",{type:"text",class:"form-control",id:"image",placeholder:"請輸入圖片連結","onUpdate:modelValue":o[0]||(o[0]=l=>e.tempProduct.imageUrl=l)},null,512),[[p,e.tempProduct.imageUrl]])]),t("div",E,[o[13]||(o[13]=t("label",{for:"customFile",class:"form-label"},[M("或 上傳圖片 "),t("i",{class:"fas fa-spinner fa-spin"})],-1)),t("input",{type:"file",id:"customFile",class:"form-control",onChange:o[1]||(o[1]=(...l)=>r.uploadFile&&r.uploadFile(...l)),ref:"fileInput"},null,544)]),t("img",{class:"img-fluid",alt:"",src:e.tempProduct.imageUrl},null,8,O),o[14]||(o[14]=w('<div class="mt-5"><div class="mb-3 input-group"><input type="url" class="form-control form-control" placeholder="請輸入連結"><button type="button" class="btn btn-outline-danger">移除</button></div><div><button class="btn btn-outline-primary btn-sm d-block w-100">新增圖片</button></div></div>',1))]),t("div",q,[t("div",A,[o[15]||(o[15]=t("label",{for:"title",class:"form-label"},"標題",-1)),a(t("input",{"onUpdate:modelValue":o[2]||(o[2]=l=>e.tempProduct.title=l),type:"text",class:"form-control",id:"title",placeholder:"請輸入標題"},null,512),[[p,e.tempProduct.title]])]),t("div",G,[t("div",H,[o[16]||(o[16]=t("label",{for:"category",class:"form-label"},"分類",-1)),a(t("input",{"onUpdate:modelValue":o[3]||(o[3]=l=>e.tempProduct.category=l),type:"text",class:"form-control",id:"category",placeholder:"請輸入分類"},null,512),[[p,e.tempProduct.category]])]),t("div",J,[o[17]||(o[17]=t("label",{for:"price",class:"form-label"},"單位",-1)),a(t("input",{"onUpdate:modelValue":o[4]||(o[4]=l=>e.tempProduct.unit=l),type:"text",class:"form-control",id:"unit",placeholder:"請輸入單位"},null,512),[[p,e.tempProduct.unit]])])]),t("div",K,[t("div",Q,[o[18]||(o[18]=t("label",{for:"origin_price",class:"form-label"},"原價",-1)),a(t("input",{type:"number",class:"form-control",id:"origin_price",placeholder:"請輸入原價","onUpdate:modelValue":o[5]||(o[5]=l=>e.tempProduct.origin_price=l)},null,512),[[p,e.tempProduct.origin_price]])]),t("div",R,[o[19]||(o[19]=t("label",{for:"price",class:"form-label"},"售價",-1)),a(t("input",{"onUpdate:modelValue":o[6]||(o[6]=l=>e.tempProduct.price=l),type:"number",class:"form-control",id:"price",placeholder:"請輸入售價"},null,512),[[p,e.tempProduct.price]])])]),o[23]||(o[23]=t("hr",null,null,-1)),t("div",W,[o[20]||(o[20]=t("label",{for:"description",class:"form-label"},"產品描述",-1)),a(t("textarea",{type:"text",class:"form-control",id:"description",placeholder:"請輸入產品描述","onUpdate:modelValue":o[7]||(o[7]=l=>e.tempProduct.description=l)},null,512),[[p,e.tempProduct.description]])]),t("div",X,[o[21]||(o[21]=t("label",{for:"content",class:"form-label"},"說明內容",-1)),a(t("textarea",{type:"text",class:"form-control",id:"content",placeholder:"請輸入產品說明內容","onUpdate:modelValue":o[8]||(o[8]=l=>e.tempProduct.content=l)},null,512),[[p,e.tempProduct.content]])]),t("div",Y,[t("div",Z,[a(t("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,id:"is_enabled","onUpdate:modelValue":o[9]||(o[9]=l=>e.tempProduct.is_enabled=l)},null,512),[[C,e.tempProduct.is_enabled]]),o[22]||(o[22]=t("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1))])])])])]),t("div",tt,[o[24]||(o[24]=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1)),t("button",{type:"button",class:"btn btn-primary text-light",onClick:o[10]||(o[10]=l=>s.$emit("update-product",e.tempProduct))}," 確認 ")])])])],512)}const et=g($,[["render",ot]]),lt={data(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1}},components:{ProductModal:et,DeleteModal:V,Pagination:D},methods:{async getProducts(s=1){const o=`https://vue3-course-api.hexschool.io/api/darrenapi/admin/products?page=${s}`;try{this.isLoading=!0;let i=await this.axios.get(o);i.data.success&&(this.products=i.data.products,this.pagination=i.data.pagination)}catch(i){console.log(i)}finally{this.isLoading=!1}},openModal(s,o){s?this.tempProduct={}:this.tempProduct={...o},this.isNew=s,this.$refs.productModal.showModal()},async updateProduct(s){const o=this.$refs.productModal;let i="https://vue3-course-api.hexschool.io/api/darrenapi/admin/product",n="post";this.isNew||(i=`https://vue3-course-api.hexschool.io/api/darrenapi/admin/product/${s.id}`,n="put");try{let e=await this.axios[n](i,{data:s});o.hideModal(),this.$httpMessageState(e,"更新"),this.getProducts(this.pagination.current_page)}catch(e){console.log(e)}},async deleteProduct(s){const o=this.$refs.deleteModal;let i=`https://vue3-course-api.hexschool.io/api/darrenapi/admin/product/${s.id}`;try{let n=await this.axios.delete(i);o.hideModal(),this.$httpMessageState(n,"刪除"),this.getProducts(this.pagination.current_page)}catch(n){console.log(n)}},openDeleteModal(s){this.tempProduct={...s},this.$refs.deleteModal.showModal()}},created(){this.getProducts()}},st={class:"text-end"},it={class:"table mt-4"},nt={class:"text-right"},dt={class:"text-right"},rt={class:"btn-group"},at=["onClick"],pt=["onClick"];function ct(s,o,i,n,e,r){const l=m("Loading"),P=m("Pagination"),v=m("ProductModal"),y=m("DeleteModal");return b(),f(h,null,[u(l,{active:e.isLoading},null,8,["active"]),o[2]||(o[2]=t("div",{class:"text-center mt-5 mb-5"},[t("h2",null,"產品列表")],-1)),t("div",st,[t("button",{class:"btn btn-primary text-light",type:"button",onClick:o[0]||(o[0]=d=>r.openModal(!0))}," 增加一個產品 ")]),t("table",it,[o[1]||(o[1]=t("thead",null,[t("tr",null,[t("th",{width:"140"},"分類"),t("th",null,"產品名稱"),t("th",{width:"120"},"原價"),t("th",{width:"120"},"售價"),t("th",{width:"100"},"是否啟用"),t("th",{width:"200"},"編輯")])],-1)),t("tbody",null,[(b(!0),f(h,null,U(e.products,d=>(b(),f("tr",{key:d.id},[t("td",null,c(d.category),1),t("td",null,c(d.title),1),t("td",nt,c(s.$filters.currency(d.origin_price)),1),t("td",dt,c(s.$filters.currency(d.price)),1),t("td",null,[t("span",{class:k(d.is_enabled?"text-success":"text-muted")},c(d.is_enabled?"啟用":"未啟用"),3)]),t("td",null,[t("div",rt,[t("button",{class:"btn btn-outline-secondary btn-sm",onClick:x=>r.openModal(!1,d)}," 編輯 ",8,at),t("button",{class:"btn btn-outline-danger btn-sm",onClick:x=>r.openDeleteModal(d)}," 刪除 ",8,pt)])])]))),128))])]),u(P,{pages:e.pagination,onChangePage:r.getProducts},null,8,["pages","onChangePage"]),u(v,{ref:"productModal",product:e.tempProduct,onUpdateProduct:r.updateProduct},null,8,["product","onUpdateProduct"]),u(y,{ref:"deleteModal",item:e.tempProduct,onDeleteProduct:r.deleteProduct},null,8,["item","onDeleteProduct"])],64)}const ht=g(lt,[["render",ct]]);export{ht as default};
