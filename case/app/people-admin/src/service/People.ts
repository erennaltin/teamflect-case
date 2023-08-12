import { GET, DELETE, POST } from "./Client";

const getPeopleListUrl = "/People";
const deletePersonUrl = "/People/";
const addPersonUrl = "/People";

const GetPeopleList = async () => {
  return await GET(getPeopleListUrl);
};

const DeletePerson = async (id: number | string) => {
  return await DELETE(deletePersonUrl + id);
};

const AddPerson = async (body: Person) => {
  return await POST(addPersonUrl, body);
};

export { GetPeopleList, DeletePerson, AddPerson };
