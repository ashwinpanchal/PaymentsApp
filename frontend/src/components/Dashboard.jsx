import { useRecoilValue } from "recoil";
import { Balance } from "./Balance";
import { UserComponent } from "./UserComponent";
import { signedInAtom } from "../store/atoms/Atoms";

export function Dashboard() {
  const signedIn = useRecoilValue(signedInAtom);
  return (
    <>
      {signedIn ? (
        <div className="p-10">
          <Balance balance={34.34} />
          <UserComponent />
        </div>
      ) : null}
    </>
  );
}
