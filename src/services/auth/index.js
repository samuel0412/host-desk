import API from "../../Config/apiConfig";
import endpoints from "../../Config/endpoints";

const SignIn = async (loginData) => {
  try {
    const responseLogin = await API.post(endpoints.login, loginData);
    return responseLogin.data;
  } catch (error) {
    console.log(error.message);
  }
};

export { SignIn };
