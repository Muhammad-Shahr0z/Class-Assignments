

export default function ChildComponent({ name, age, profession }:{name:string, age:number, profession:string}) {
    return (

      <div className="flex flex-col justify-center text-2xl items-start border-2 border-black p-4 gap-y-4 w-auto rounded-lg">
        <h2 className="text-lg font-semibold self-center">Child Component</h2>
          <h3 className="font-bold">Name: <span className="text-red-900">{name}</span></h3>
          <h3 className="font-bold">Age: <span className="text-red-900">{age}</span></h3>
          <h3 className="font-bold">Profession: <span className="text-red-900">{profession}</span></h3>
      </div>
    );
  }
  
  