import * as yup from "yup";

export default yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().required("Campo obrigatório").email("Insira um e-mail válido"),
  password: yup.string().required("Campo obrigatório").min(6, "Sua senha deve conter pelo menos 6 dígitos.")
});
