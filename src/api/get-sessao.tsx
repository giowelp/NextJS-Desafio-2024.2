import axios from "axios";

type ApiProps = {
    id: number;
    title: string;
    text: string;
}

type ApiData = {
    identities: ApiProps[];
    status: number;
}

const getApi = async () : Promise<ApiData> => {
  const response = await axios.get('https://treinamentoapi.codejr.com.br/api/identities');
  return response.data;
}

export default getApi;