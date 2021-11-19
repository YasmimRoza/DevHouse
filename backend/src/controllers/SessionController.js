
//Metodos: index, show, update, store, destroy
import User from '../models/User';
import * as Yup from 'yup';

class SessionController{
    async store(req, res){

        const schema = Yup.object().shape({
            email: Yup.string().email().required(),
        })

        const { email } = req.body;

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({ error: 'Falha na validação.' }); 
        }

        //Procura o email recebido na requisição
        let user = await User.findOne({ email });

        //Se não estiver no banco então entre
        if(!user){
            //Registra o novo usuario no banco
            user = await User.create({ email });
        }

        return res.json(user)
    }
}

export default new SessionController();