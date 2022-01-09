import * as yup from "yup";

export default yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  school_type: yup.string().required("Campo brigatório"),
  email: yup.string().required("E-mail inválido"),
  password: yup.string().required("Campo obrigatório")
});
