import Navigation from "@/app/components/Navigation";
import Counter from "../components/Counter";
const res = await fetch("https://jsonplaceholder.typicode.com/users");
const data = await res.json();
console.log(data);
function page() {
  return (
    <div>
      <h1>cabins pages</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <Counter users={data} />
    </div>
  );
}

export default page;
