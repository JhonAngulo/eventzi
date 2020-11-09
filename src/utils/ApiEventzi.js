import axios from "axios";

const instance = axios.create({
  baseURL: "https://eventziapi.herokuapp.com",
});

async function callApiPost(url, data) {
  const response = await instance({
    method: "POST",
    url,
    data,
  });

  if (response.data.token) {
    instance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${response.data.token}`;
  }
  return response;
}

async function callApiGet(url) {
  const response = await instance({
    method: "GET",
    url,
  });

  return response;
}

const ApiEventzi = {
  login(email, password) {
    let data = {
      email: email,
      psswd: password,
    };
    return callApiPost("/users/validate", data);
  },
  upcoming() {
    return callApiGet(`/events/upcoming`);
  },
  getOrganizations() {
    return callApiGet("/organizations/orgsByUser");
  },
  newOrganization(organization_name, description) {
    let data = {
      organization_name,
      description,
    };
    return callApiPost("/organizations", data);
  },
  newEvent(id_organization, event_name, event_type, status_, event_description, date, url,template) {
    let data = {
      event_name,
      event_type,
      status_,
      event_description,
      date,
      url,
      template,
    };
    console.log(data);
    return callApiPost(`/events/organizations/${id_organization}`, data);
  },
  testEvent(){
    let data = {
      event_name:"Testing",
      event_type:"Online",
      status_:"Published",
      event_description:"Insert description",
      date:"2020-11-11 18:00:00",
      url:"www.google.com",
      template:"Template 1",
    };
    console.log(data);
    return callApiPost(`/events/organizations/59`, data);
  }
};

export default ApiEventzi;
