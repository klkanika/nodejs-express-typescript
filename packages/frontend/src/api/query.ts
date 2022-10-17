import useAxios from "axios-hooks"
import { config } from "src/config"

export const useData = () => {
  const [{ data, loading }] = useAxios<Response, Request>({
    url: `${config.apiBaseUrl}/`,
    method: 'get',
  }, {
    useCache: false,
  })
  return {
    data,
    loading,
  }
}