
import ChildComponent from "@/app/components/ChildComponent"

export default function ParentComponent() {
  const name:String = "Muhammad Shahroz";
  const age:number = 26;
  const profession:String = "Frontend Developer";

  return (
    <div className="p-4">
      <ChildComponent name={name as string} age={age} profession={profession as string} />
    </div>
  );
}
