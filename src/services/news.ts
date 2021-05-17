import { jsonQuery, getLocalToken, generatePagenationParameters } from "./common";
import query from "./query";

export const getMemberInfoFromLocal = () => {
  const token = getLocalToken();
  const userInfo = token ? token.member : null;
  return userInfo;
}

export async function apiGetAllSurveys() {
  return await query<any>(`/surveys`);
}

export async function apiGetSurveyById(id) {
  return await query<any>(`/surveys/${id}`);
}
