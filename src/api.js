import axios from 'axios';

export default axios.create({
    baseURL:'https://wf-dev.shift4.com/Primary/restapi/Flow/4599413d-9336-11ec-aaa9-0e1d8cb44bd9?sessionid=NS-06c14697-fabd-11eb-aaa8-0e1d8cb44bd9&outputtype=RawJson&TaskId={TaskId}&UserToken={UserToken}'
});