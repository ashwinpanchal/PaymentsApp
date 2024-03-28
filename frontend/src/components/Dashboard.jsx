import { Balance } from "./Balance";
import { UserComponent } from "./UserComponent";

export function Dashboard() {
  return (
    <div className="p-10">
      <Balance balance={34.34} />
      <UserComponent />
    </div>
  );
}
