import api from "../../api/baseApi";

const oddServices = {
  getBets: async (token, page, betId) => {
    return api.get("/odds/sports/betting/get-bets-list", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        page,
        betId,
      },
    }); // Replace with your backend endpoint
  },
};
export { oddServices };
