import Info from "./Component/Info";
function App() {
  let array = [
    {
      name: "Alice",
      phone: "(816)-403-5456",
    },
    {
      name:"Bob",
      phone:"(572)-566-2397",
    },
    {
      name:"Cris",
      phone:"(864)-309-4841",
    },
    {
      name:"Daniel",
      phone:"(816)-403-5456",
    },
   
  ];
  return (
   <div className="flex justify-center items-center bg-black h-screen">
    <div className="px-5 pt-2.5 pb-5 w-2/5 h-50 bg-white">
      <div className="flex justify-center items-center gap-x-2.5 w-full">
        <input className=" shrink grow basic-auto bg-neutral-200 h-7.5  rounded-md px-2.5 py-0" type="text" placeholder="Nhập tên" />
        <input  className=" shrink grow basic-auto bg-neutral-200 h-7.5 rounded-md px-2.5 py-0"type="text " placeholder="Nhập số điện thoại" />
        <button className="shrink grow basic-auto text-white bg-blue-800 h-7.5 rounded-md">THÊM</button>      
      </div>
      <div className="h-px bg-gray-400 w-full my-2.5 mx-0 "/>
      <div className="flex justify-center items-center w-full gap-x-2.5">
      <input  className=" shrink grow basic-auto bg-neutral-200 px-2.5 py-0 h-7.5 rounded-md" type="text" placeholder="Tìm kiếm" />
        <button className="shrink grow basic-auto text-white bg-blue-800  h-7.5 rounded-md">TÌM</button>
        <button className="shrink grow basic-auto text-white bg-blue-800  h-7.5 rounded-md"> XÓA TRÙNG</button>     
      </div>
      <div className="h-50 flex mt-2.5 flex-col gap-y-3.5 ">
        {
          array.map((value) =>(
            <Info name={value.name} phone={value.phone} />
          ))
        }
      </div>
    </div>
   </div>
  );
}

export default App;
