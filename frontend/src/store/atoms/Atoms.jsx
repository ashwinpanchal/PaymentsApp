import axios from "axios";
import { atom, atomFamily, selector, selectorFamily } from "recoil";

export const searchUserAtom = atom({
  key: "searchUserAtom",
  default: "",
});

export const amountAtom = atom({
  key: "amountAtom",
  default: null,
});

export const signedInAtom = atom({
  key: "signedInAtom",
  default: false,
});

// export const nameAtom = atom({
//   key: "nameAtom",
//   default: selector({
//     key: "nameSelector",
//     get: async ({ get }) => {
//       const headers = {
//         Authorization: "Bearer " + localStorage.getItem("token"),
//       };
//       const name = await axios.get("http://localhost:3000/api/v1/user/me", {
//         headers: headers,
//       });
//       return name.data.data.firstName + " " + name.data.data.lastName;
//     },
//   }),
// });

export const balanceAtom = atom({
  key: "balanceAtom",
  default: selector({
    key: "balanceSelector",
    get: async ({ get }) => {
      const bal = await axios.get(
        "http://localhost:3000/api/v1/account/balance",
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      return bal.data.data.balance;
    },
  }),
});

// export const userListAtom = atom({
//   key: "userListAtom",
//   default: selector({
//     key: "userSelectorAtom",
//     get: async ({ get }) => {
//       const filter = get(searchUserAtom);
//       const user = await axios.get(`http://localhost:3000/api/v1/user/bulk`, {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//       });
//       return user;
//     },
//   }),
// });
