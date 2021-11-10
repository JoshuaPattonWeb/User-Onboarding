import * as yup from 'yup';

    const formLayout = yup.object().shape( {
        username: yup
            .string()
            .trim()
            .required('')
            .min(3,'')

    })






export default formLayout;