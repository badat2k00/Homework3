function Info({name, phone}) {
    return (
      <div className=" text-2xl p-2.5 bg-neutral-200 flex justify-between items-center rounded-xl ">
        <div>{name}</div>
        <div>{phone}</div>
      </div>
    );
  }
  export default Info;