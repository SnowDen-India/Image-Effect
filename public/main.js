async function init(){
       let rustApp = null;

       try {
        rustApp = await import('../pkg')
       } catch (e) {
         console.error(e)
         return;
       }

       console.log(rustApp)
 
      

    const input = document.getElementById('upload');
    const fileReader = new FileReader()
    document.getElementById("myAnchor").style.visibility='hidden';
     fileReader.onloadend = ()=>{
        const base64 = fileReader.result.replace(/^data:image\/(png|jpeg|jpg);base64,/,'');

       let img_data_url= rustApp.grayscale(base64)
      document.getElementById('new-img').setAttribute(
         'src',img_data_url
      )
      document.getElementById("myAnchor").href = img_data_url;
      document.getElementById("myAnchor").style.visibility='visible';

     }


    input.addEventListener('change',()=>{
       fileReader.readAsDataURL(input.files[0])
    })
}

init()



