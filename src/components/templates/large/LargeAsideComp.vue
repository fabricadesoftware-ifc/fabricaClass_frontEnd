<template>
    <aside class="h-screen w-2/12">
      <div class="flex flex-col justify-between h-screen py-24">
        <div class="pt-24">
          <ul class="flex flex-col gap-2">
            <li class="gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="black">
                <path stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M16 1C18.1046 1 19 1.88316 19 2.9726L19 6.33992C19 7.42936 18.1046 8.31252 17 8.31252H14C12.8954 8.31252 12 7.42936 12 6.33992L12 2.9726C12 1.88316 12.8954 1 14 1L17 1Z"/>
                <path d="M3 1C1.89543 1 0.999999 1.88316 0.999999 2.9726L1.00001 6.33992C1.00001 7.42936 1.89544 8.31252 3.00001 8.31252H6.00001C7.10458 8.31252 8.00001 7.42936 8.00001 6.33992L8 2.9726C8 1.88316 7.10457 1 6 1L3 1Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17 11.6875C18.1046 11.6875 19 12.5707 19 13.6601V17.0274C19 18.1168 18.1046 19 17 19H14C12.8954 19 12 18.1168 12 17.0274L12 13.6601C12 12.5707 12.8954 11.6875 14 11.6875H17Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.00001 11.6875C1.89544 11.6875 1.00001 12.5707 1.00001 13.6601L1.00001 17.0274C1.00001 18.1168 1.89544 19 3.00001 19H6.00001C7.10458 19 8.00001 18.1168 8.00001 17.0274L8.00001 13.6601C8.00001 12.5707 7.10458 11.6875 6.00001 11.6875H3.00001Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Explorar
            </li>
            <li class="gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="3 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M19 2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2zm0 14H5V5c0-.806.55-.988 1-1h13v12z"></path></svg>
              Formulário
            </li>
            <li class="gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="1 0 19 22" fill="none">
                <path d="M17.7994 20.2L17.7997 16.6003C17.7999 14.612 16.188 13 14.1997 13H4.6004C2.61234 13 1.00063 14.6115 1.0004 16.5996L1 20.2M13 4.6C13 6.58822 11.3882 8.2 9.4 8.2C7.41177 8.2 5.8 6.58822 5.8 4.6C5.8 2.61177 7.41177 1 9.4 1C11.3882 1 13 2.61177 13 4.6Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Perfil
            </li>
          </ul>
        </div>
        <div>
          <ul class="">
            <li class="gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M14 15L19 10M19 10L14 5M19 10H7M7 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V14.2C1 15.8802 1 16.7202 1.32698 17.362C1.6146 17.9265 2.07354 18.3854 2.63803 18.673C3.27976 19 4.11984 19 5.8 19H7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Sair
            </li>
          </ul>
          
        </div>
      </div>
    </aside>
  </template>
  
  <script>
  export default {}
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  *{
    font-family: "Poppins", sans-serif;
  
  }
  ul li{
    width: 280px;
    display: flex;
    opacity: 0.7;
    color: black;
    font-weight: 500;
    cursor: pointer;
    align-items: center;
    padding-left: 80px;
    height: 40px;
  }
  ul li:hover{
    opacity: 1;
    background-color: #fbfbfb;
  }
  </style>
  